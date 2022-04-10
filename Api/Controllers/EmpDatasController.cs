using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Site4Check.Models;
using Site4Check.VM;

namespace Site4Check.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpDatasController : ControllerBase
    {
        private readonly HR_DirectionContext _context;

        public EmpDatasController(HR_DirectionContext context)
        {
            _context = context;
        }

        // GET: api/EmpDatas
        [HttpGet]
        public IEnumerable<EmpData> GetEmpData()
        {
            return _context.EmpData;
        }
        //[HttpGet]
        //public IEnumerable<EmpData> GetEmpData()
        //{
        //    return _context.EmpData;
        //}

        // GET: api/EmpDatas/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmpData([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var empData = await _context.EmpData.FindAsync(id);

            if (empData == null)
            {
                return NotFound();
            }

            return Ok(empData);
        }

        // PUT: api/EmpDatas/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmpData([FromRoute] int id, [FromForm] EmpDateVm empDateVm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var check = _context.EmpData.Find(id);
            if (id != check.Id)
            {
                return BadRequest();
            }
            var dbPath = "";
            //Get Photo
            if (empDateVm.Image != null)
            {
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Images");

                var uniqueFileName = Guid.NewGuid().ToString() + "_" + empDateVm.Image.FileName;
                dbPath = uniqueFileName;
                using (var fileStream = new FileStream(Path.Combine(filePath, uniqueFileName), FileMode.Create))
                {
                    empDateVm.Image.CopyTo(fileStream);
                }
            }
            check.EmpCode = empDateVm.EmpCode;
            check.EmpName = empDateVm.EmpName;
            check.FullCode = empDateVm.FullCode;
            check.Fz = empDateVm.Fz;
            check.Comp = empDateVm.Comp;
            check.Cost = empDateVm.Cost;
            check.Dep = empDateVm.Dep;
            check.Div = empDateVm.Div;
            check.Birth = empDateVm.Birth;
            check.Bus = empDateVm.Bus;
            check.BusWay = empDateVm.BusWay;
            check.CardId = empDateVm.CardId;
            check.Add = empDateVm.Add;
            check.Password = empDateVm.Password;
            check.Gender = empDateVm.Gender;
            check.Hiring = empDateVm.Hiring;
            check.Hourv = empDateVm.Hourv;
            check.Quli = empDateVm.Quli;
            check.Religion = empDateVm.Religion;
            check.Sec = empDateVm.Sec;
            check.ShiftType = empDateVm.ShiftType;
            check.Stop = empDateVm.Stop;
            check.Tel = empDateVm.Tel;
            check.Image = dbPath;
            check.Insurance = empDateVm.Insurance;
            check.Is5 = empDateVm.Is5;
            check.Is5work = empDateVm.Is5work;
            check.Ishour = empDateVm.Ishour;
            check.Isover = empDateVm.Isover;
            check.Isshift = empDateVm.Isshift;
            check.Job = empDateVm.Job;
            check.Level = empDateVm.Level;
            check.MaritalStatus = empDateVm.MaritalStatus;
            check.Military = empDateVm.Military;
            check.Note = empDateVm.Note;

            check.B_ent = empDateVm.B_ent;
            check.B_tab = empDateVm.B_tab;
            check.B_tam = empDateVm.B_tam;
            check.B_malbs = empDateVm.B_malbs;
            check.b_food = empDateVm.b_food;
            check.Elwa = empDateVm.Elwa;
            check.Nafa = empDateVm.Nafa;
            check.Medical = empDateVm.Medical;
            check.Basic = empDateVm.Basic;
            check.Basic1 = empDateVm.Basic1;
            check.Variable = empDateVm.Variable;
            check.Variable1 = empDateVm.Variable1;


            _context.Entry(check).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmpDataExists(id))
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

        #region NewEmpDate 
        // POST: api/EmpDatas
        [HttpPost]
        public IActionResult PostEmpData([FromForm] EmpDateVm empDateVm)
        {

            var dbPath = "";
            //Get Photo
            if (empDateVm.Image != null)
            {
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Images");

                var uniqueFileName = Guid.NewGuid().ToString() + "_" + empDateVm.Image.FileName;
                dbPath = uniqueFileName;
                using (var fileStream = new FileStream(Path.Combine(filePath, uniqueFileName), FileMode.Create))
                {
                     empDateVm.Image.CopyTo(fileStream);
                }
            }

            var check = new EmpData();
            check.EmpCode = empDateVm.EmpCode;
            check.EmpName = empDateVm.EmpName;
            check.FullCode = empDateVm.FullCode;
            check.Fz = empDateVm.Fz;
            check.Comp = empDateVm.Comp;
            check.Cost = empDateVm.Cost;
            check.Dep = empDateVm.Dep;
            check.Div = empDateVm.Div;
            check.Birth = empDateVm.Birth;
            check.Bus = empDateVm.Bus;
            check.BusWay = empDateVm.BusWay;
            check.CardId = empDateVm.CardId;
            check.Add = empDateVm.Add;
            check.Password = empDateVm.Password;
            check.Gender = empDateVm.Gender;
            check.Hiring = empDateVm.Hiring;
            check.Hourv = empDateVm.Hourv;
            check.Quli = empDateVm.Quli;
            check.Religion = empDateVm.Religion;
            check.Sec = empDateVm.Sec;
            check.ShiftType = empDateVm.ShiftType;
            check.Stop = empDateVm.Stop;
            check.Tel = empDateVm.Tel;
            check.Image = dbPath;
            check.Insurance = empDateVm.Insurance;
            check.Is5 = empDateVm.Is5;
            check.Is5work = empDateVm.Is5work;
            check.Ishour = empDateVm.Ishour;
            check.Isover = empDateVm.Isover;
            check.Isshift = empDateVm.Isshift;
            check.Job = empDateVm.Job;
            check.Level = empDateVm.Level;
            check.MaritalStatus = empDateVm.MaritalStatus;
            check.Military = empDateVm.Military;
            check.Note = empDateVm.Note;

           // var getLocation = _context.Location.Where(l => l.Id == checkinoutlistVm.LocationId).FirstOrDefault();
           // var getShift = _context.Shifts.Where(s => s.Id == checkinoutlistVm.Shiftid).FirstOrDefault();
           // var getEmp = _context.Employees.Where(e => e.Id == checkinoutlistVm.Empid).FirstOrDefault();
            try
            {

            
                _context.EmpData.Add(check);
                 _context.SaveChanges();
                return Ok("Added Successfully");


            }

            catch (Exception e)
            {
                return BadRequest(e.InnerException);

            }
        }

        #endregion
      

        // DELETE: api/EmpDatas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmpData([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var empData = await _context.EmpData.FindAsync(id);
            if (empData == null)
            {
                return NotFound();
            }

            _context.EmpData.Remove(empData);
            await _context.SaveChangesAsync();

            return Ok(empData);
        }

        private bool EmpDataExists(int id)
        {
            return _context.EmpData.Any(e => e.Id == id);
        }
    }
}