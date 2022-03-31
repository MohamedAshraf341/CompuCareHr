using System;
using System.Collections.Generic;
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
    public class LeavesVacsController : ControllerBase
    {
        private readonly HR_DirectionContext _context;

        public LeavesVacsController(HR_DirectionContext context)
        {
            _context = context;
        }

        // GET: api/LeavesVacs
        [HttpGet]
        public IActionResult GetLeavesVac()
        {
            var listVm = new List<LeavesVacVm>();
            var listLeave = _context.LeavesVac.ToList();
            foreach (var item in listLeave)
            {
                var leaveVcVm = new LeavesVacVm();
                leaveVcVm.VacName = item.VacName;
                leaveVcVm.Id = item.Id;
               
                listVm.Add(leaveVcVm);
            }
            return Ok(listVm);
        }

        // GET: api/LeavesVacs/5
        [HttpGet("GetVac/{id}")]
        public async Task<IActionResult> GetLeavesVac([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var leavesVac = await _context.LeavesVac.FindAsync(id);
            var leavesVacVm = new LeavesVacVm();

            leavesVacVm.Id = id;
            leavesVacVm.VacName = leavesVac.VacName;
            if (leavesVac == null)
            {
                return NotFound();
            }

            return Ok(leavesVacVm);
        }

        // PUT: api/LeavesVacs/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLeavesVac([FromRoute] int id, [FromBody] LeavesVac leavesVac)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != leavesVac.Id)
            {
                return BadRequest();
            }

            _context.Entry(leavesVac).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LeavesVacExists(id))
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

        // POST: api/LeavesVacs
        [HttpPost]
        public async Task<IActionResult> PostLeavesVac([FromBody] LeavesVac leavesVac)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.LeavesVac.Add(leavesVac);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLeavesVac", new { id = leavesVac.Id }, leavesVac);
        }

        // DELETE: api/LeavesVacs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLeavesVac([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var leavesVac = await _context.LeavesVac.FindAsync(id);
            if (leavesVac == null)
            {
                return NotFound();
            }

            _context.LeavesVac.Remove(leavesVac);
            await _context.SaveChangesAsync();

            return Ok(leavesVac);
        }

        private bool LeavesVacExists(int id)
        {
            return _context.LeavesVac.Any(e => e.Id == id);
        }
    }
}