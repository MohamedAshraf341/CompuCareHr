using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Site4Check.Models;
using Site4Check.listVm;
using Site4Check.VM;

namespace Site4Check.Controllers
{
    [Route("api/{lang}/[controller]")]
    [ApiController]
    public class LeavesController : ControllerBase
    {
        private readonly HR_DirectionContext _context;

        public LeavesController(HR_DirectionContext context)
        {
            _context = context;
        }

        // GET: api/Leaves
        [HttpGet]
        public IActionResult GetLeaves()
        {
                    var listVm = new List<LeavesVm>();
         
                    var list= _context.Leaves.ToList();
                    foreach (var item in list)
                    {
                var leav = new LeavesVm();
                leav.Id = item.Id;
                leav.Name = item.Name;
                leav.Type = item.Type;
                leav.Issub = item.Issub;
                leav.LeavesRuleId = item.LeavesVacId;
                leav.LeavesVacId = item.LeavesVacId;
                leav.Alis = item.Alis;
                leav.AcceptVac = item.AcceptVac;
                leav.CutVal = item.CutVal;

                listVm.Add(leav);
                    }
                    return Ok(listVm);
        }

        // GET: api/Leaves/5
        [HttpGet("{id}")]
        public IActionResult GetLeavesById([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var vm = new List<LeavesVm>();   
            var leaves = _context.Leaves.Where(t => t.Type == id);
            foreach (var item in leaves)
            {
                var leav = new LeavesVm();
                leav.Id = item.Id;
                leav.Name = item.Name;
                leav.Type = item.Type;

                leav.Alis = item.Alis;
                leav.CutVal = item.CutVal;
                leav.Issub = item.Issub;
                leav.AcceptVac = item.AcceptVac;

                vm.Add(leav);
            }
           
            if (leaves == null)
            {
                return NotFound();
            }

            return Ok(vm);
        }

        // GET: api/Leaves/type
        [HttpGet("bytype/{type}")]

        public IActionResult GetLeavesByType([FromRoute] int type)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var leaves = _context.Leaves.Where(t => t.Type == type);
            
            if (leaves == null)
            {
                return NotFound();
            }

            return Ok(leaves);
        }
        //Leaves By Type and Year

        [HttpGet("{EmpCode}/{type}/{year}")]
        public IActionResult GetEmpLeaves([FromRoute]int EmpCode, [FromRoute] int type, [FromRoute] int year)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            List<TransData> Tleaves = new List<TransData>();
            var leaves = _context.Transaction.Where(t => t.EmpCode == EmpCode).ToList();
           // var year = _context.Year.FirstOrDefault();
            foreach (var item in leaves)
            {
                var LItem = _context.Leaves.Where(l => l.Id == item.LeaveId).FirstOrDefault();
                if (LItem.Type == type && int.Parse(item.Date.Substring(0,4))==year)
                {
                    var day = DateTime.ParseExact(item.Date.Substring(0,8), "yyyyMMdd", null);
                    TransData Temp = new TransData
                    {
                        From = item.From,
                        To = item.To,
                        Status = _context.TransactionStatus.Where(t => t.Id == item.TransacrtionCode).Select(tt => tt.Name).FirstOrDefault(),
                        StatusCode = item.TransacrtionCode,
                        TranDate = item.Date.Substring(4, 4),
                        Day = day.DayOfWeek.ToString(),
                        Type = _context.Leaves.Where(l => l.Id == item.LeaveId).Select(ll => ll.Name).FirstOrDefault(),
                        TypeCode = item.LeaveId,
                        Id = item.Id
                    };
                    Tleaves.Add(Temp);
                }
            }

            if (Tleaves == null)
            {
                return NotFound();
            }

            return Ok(Tleaves);
        }

        [HttpGet("{type}/{year}")]
        public IActionResult GetEmpLeavesBYType( [FromRoute] int type, [FromRoute] int year)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            List<TransData> Tleaves = new List<TransData>();
            var leaves = _context.Transaction.ToList();
            // var year = _context.Year.FirstOrDefault();
            foreach (var item in leaves)
            {
                var LItem = _context.Leaves.Where(l => l.Id == item.LeaveId).FirstOrDefault();
                if (LItem.Type == type && int.Parse(item.Date.Substring(0, 4)) == year)
                {
                    var day = DateTime.ParseExact(item.Date.Substring(0, 8), "yyyyMMdd", null);
                    TransData Temp = new TransData
                    {
                        From = item.From,
                        To = item.To,
                        Status = _context.TransactionStatus.Where(t => t.Id == item.TransacrtionCode).Select(tt => tt.Name).FirstOrDefault(),
                        StatusCode = item.TransacrtionCode,
                        Empcode=item.EmpCode,
                        TranDate = item.Date.Substring(4, 4),
                        Day = day.DayOfWeek.ToString(),
                        Type = _context.Leaves.Where(l => l.Id == item.LeaveId).Select(ll => ll.Name).FirstOrDefault(),
                        TypeCode = item.LeaveId,
                        Id = item.Id
                    };
                    Tleaves.Add(Temp);
                }
            }

            if (Tleaves == null)
            {
                return NotFound();
            }

            return Ok(Tleaves);
        }
        [HttpGet("{type}/{year}/{id}")]
        public IActionResult GetEmpLeavesTypeById([FromRoute] int type, [FromRoute] int year,[FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            List<TransData> Tleaves = new List<TransData>();
            var leaves = _context.Transaction.Where(i => i.Id == id);
            // var year = _context.Year.FirstOrDefault();
            foreach (var item in leaves)
            {
                var LItem = _context.Leaves.Where(l => l.Id == item.LeaveId).FirstOrDefault();
                if (LItem.Type == type && int.Parse(item.Date.Substring(0, 4)) == year)
                {
                    var day = DateTime.ParseExact(item.Date.Substring(0, 8), "yyyyMMdd", null);
                    TransData Temp = new TransData
                    {
                        From = item.From,
                        To = item.To,
                        Status = _context.TransactionStatus.Where(t => t.Id == item.TransacrtionCode).Select(tt => tt.Name).FirstOrDefault(),
                        StatusCode = item.TransacrtionCode,
                        Empcode = item.EmpCode,
                        TranDate = item.Date.Substring(4, 4),
                        Day = day.DayOfWeek.ToString(),
                        Type = _context.Leaves.Where(l => l.Id == item.LeaveId).Select(ll => ll.Name).FirstOrDefault(),
                        TypeCode = item.LeaveId,
                        Id = item.Id
                    };
                    Tleaves.Add(Temp);
                }
            }

            if (Tleaves == null)
            {
                return NotFound();
            }

            return Ok(Tleaves);
        }

        // PUT: api/Leaves/5
        [HttpPut("UpdateLeaves/{id}")]
        public async Task<IActionResult> PutLeaves([FromRoute] int id, [FromBody] Leaves leaves)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var getId = _context.Leaves.Find(id);
            getId.Name = leaves.Name;
            getId.Type = leaves.Type;
            getId.Alis = leaves.Alis;
            getId.CutVal = leaves.CutVal;
            getId.Issub = leaves.Issub;
            getId.AcceptVac = leaves.AcceptVac;
                if (id != getId.Id)
            {
                return BadRequest();
            }
            _context.Entry(getId).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                    throw;
            }
            return NoContent();
        }

        // POST: api/Leaves
        [HttpPost("NewLeaves")]
        public IActionResult PostLeaves([FromBody] Leaves leaves)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var getRuleId = _context.LeavesRule.Where(a => a.Id == leaves.LeavesRuleId).FirstOrDefault();
            var getVacId = _context.LeavesVac.Where(a => a.Id == leaves.LeavesVacId).FirstOrDefault();
            if(getRuleId != null || getVacId!= null)
            {
                getVacId.Leaves.Add(leaves);
                getRuleId.Leaves.Add(leaves);
                _context.Leaves.Add(leaves);
                _context.SaveChanges();

                return Ok("Added Successfully");
            }
            else
            {
                return NotFound("Sorry Empty value for LeaveRules Or LeavesVac ");
            }
        }

        // DELETE: api/Leaves/5
        [HttpDelete("DeleteLeaves/{id}")]
        public async Task<IActionResult> DeleteLeaves([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var leaves = await _context.Leaves.FindAsync(id);
            if (leaves == null)
            {
                return NotFound();
            }

            _context.Leaves.Remove(leaves);
            await _context.SaveChangesAsync();

            return Ok("Successfully Deleted");
        }

        private bool LeavesExists(int id)
        {
            return _context.Leaves.Any(e => e.Id == id);
        }
    }
}
