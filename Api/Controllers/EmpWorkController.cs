using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using System.Diagnostics.Contracts;
using Site4Check.Models;
using Site4Check.VM;

namespace Site4Check.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpWorkController : ControllerBase
    {
        private readonly HR_DirectionContext _context;


        public EmpWorkController(HR_DirectionContext context)
        {
            _context = context;
        }

        // GET: api/Smtpdatas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmpWorkTime>>> GetSmtpdata()
        {
               return await _context.EmpWorkTime.Include(e => e.Shift).OrderByDescending(a => a.Id).ToListAsync();
        }

        // GET: api/Smtpdatas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmpWorkTime>> GetSmtpdata(int id)
        {
            var EmpWorkTime = await _context.EmpWorkTime.FindAsync(id);

            if (EmpWorkTime == null)
            {
                return NotFound();
            }

            return EmpWorkTime;
        }

        // PUT: api/Smtpdatas/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSmtpdata(int id, EmpWorkVM dto)
        {
            var EmpWorkTime = _context.EmpWorkTime.Find(id);
            if (id != EmpWorkTime.Id)
            {
                return BadRequest();
            }
            EmpWorkTime.EarlyPermission = dto.EarlyPermission;
            EmpWorkTime.EndShift = dto.EndShift;
            EmpWorkTime.EndSign = dto.EndSign;
            EmpWorkTime.FromDate = dto.FromDate;
            EmpWorkTime.IsDayOff = dto.IsDayOff;
            EmpWorkTime.IsHour = dto.IsHour;
            EmpWorkTime.LatePermission = dto.LatePermission;
            EmpWorkTime.OverTimeStart = dto.OverTimeStart;
            EmpWorkTime.ShiftId = dto.ShiftId;
            EmpWorkTime.StartShift = dto.StartShift;
            EmpWorkTime.StartSign = dto.StartSign;
            EmpWorkTime.ToDate = dto.ToDate;
            _context.Entry(EmpWorkTime).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SmtpdataExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Smtpdatas
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public IActionResult PostSmtpdata(EmpWorkVM dto)
        {
            var EmpWorkTime = new EmpWorkTime();
            EmpWorkTime.EarlyPermission = dto.EarlyPermission;
            EmpWorkTime.EndShift = dto.EndShift;
            EmpWorkTime.EndSign = dto.EndSign;
            EmpWorkTime.FromDate = dto.FromDate;
            EmpWorkTime.IsDayOff = dto.IsDayOff;
            EmpWorkTime.IsHour = dto.IsHour;
            EmpWorkTime.LatePermission = dto.LatePermission;
            EmpWorkTime.OverTimeStart = dto.OverTimeStart;
            EmpWorkTime.ShiftId = dto.ShiftId;
            EmpWorkTime.StartShift = dto.StartShift;
            EmpWorkTime.StartSign = dto.StartSign;
            EmpWorkTime.ToDate = dto.ToDate;

            _context.EmpWorkTime.Add(EmpWorkTime);
            _context.SaveChanges();

            return Ok(EmpWorkTime);
        }

        // DELETE: api/Smtpdatas/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<EmpWorkTime>> DeleteSmtpdata(int id)
        {
            var smtpdata = await _context.EmpWorkTime.FindAsync(id);
            if (smtpdata == null)
            {
                return NotFound();
            }

            _context.EmpWorkTime.Remove(smtpdata);
            await _context.SaveChangesAsync();

            return smtpdata;
        }

        private bool SmtpdataExists(int id)
        {
            return _context.EmpWorkTime.Any(e => e.Id == id);
        }
    }
}