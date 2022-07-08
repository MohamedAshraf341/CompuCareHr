using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Site4Check.Models;
using Site4Check.VM;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkscheduleController : ControllerBase
    {

        private readonly HR_DirectionContext _context;

        public WorkscheduleController(HR_DirectionContext context)
        {
            _context = context;
        }


        [HttpPost("NewWorkschedule")]
        public async Task<ActionResult<timeTableD>> NewWorkschedule(timeTableDvm[] Dvm)
        {
            try
            {
                var D = new timeTableD();
                int ID = 0;
                var H = new timeTableH();
                for (int Row = 0; Row < Dvm.Length; Row++)
                {
                    D.DayNO = Dvm[Row].DayNO;
                    D.ShiftCode = Dvm[Row].ShiftCode;
                    D.isdayoff = Dvm[Row].isdayoff;
                    H.Name = Dvm[0].TimeTableh.Name;
                    H.TimePeriod = Dvm[0].TimeTableh.TimePeriod;
                    H.StartDate = Dvm[0].TimeTableh.StartDate;
                    H.Morning = Dvm[0].TimeTableh.Morning;
                    H.Shift = Dvm[0].TimeTableh.Shift;
                    H.Driver = Dvm[0].TimeTableh.Driver;
                    H.shiftdriver = Dvm[0].TimeTableh.shiftdriver;

                    if (Dvm[0].ID == 0)  // add new user
                    {
                        if (Row == 0)
                        {
                            _context.timeTableH.Add(H);
                            D.masterid = H.ID;
                            ID = H.ID;
                            _context.timeTableD.Add(D);
                            await _context.SaveChangesAsync();
                        }
                        else
                        {
                            D.masterid = ID;
                            _context.timeTableD.Add(D);
                            await _context.SaveChangesAsync();
                        }
                    }
                    else   // edit current user
                    {
                        D.ID = Dvm[0].ID;
                        if (Row == 0)
                        {
                            var timeTableDBYid = _context.timeTableD.Where(u => u.ID == Dvm[0].ID).ToList();
                            var getId = _context.timeTableH.Find(Dvm[0].ID);
                            getId.Name = timeTableDBYid[0] .TimeTableh.Name;
                            getId.TimePeriod = timeTableDBYid[0].TimeTableh.TimePeriod;
                            getId.StartDate = timeTableDBYid[0].TimeTableh.StartDate;
                            getId.Morning = timeTableDBYid[0].TimeTableh.Morning;
                            getId.Shift = timeTableDBYid[0].TimeTableh.Shift;
                            getId.Driver = timeTableDBYid[0].TimeTableh.Driver;
                            getId.shiftdriver = timeTableDBYid[0].TimeTableh.shiftdriver;

                            if (timeTableDBYid == null)
                            {
                                return NotFound();
                            }
                            if (getId == null)
                            {
                                return NotFound();
                            }
                            _context.timeTableD.RemoveRange(timeTableDBYid);
                            _context.Entry(getId).State = EntityState.Modified;

                        }
                    }


                    _context.Entry(D).State = EntityState.Added;
                    _context.timeTableD.Add(D);
                    //   await _context.SaveChangesAsync();

                    try
                    {
                        await _context.SaveChangesAsync();
                    }
                    catch (DbUpdateConcurrencyException)
                    {
                        if (!TimeExists(ID))
                        {
                            return NotFound();
                        }
                        else
                        {
                            throw;
                        }
                    }

                }
                return CreatedAtAction("addnewworkschedule", new { id = D.ID }, Dvm);
            }
            catch (Exception ex)
            {
                return NoContent();
            }


        }

        private bool TimeExists(int id)
        {
            return _context.timeTableH.Any(e => e.ID == id);
        }
    }
}
