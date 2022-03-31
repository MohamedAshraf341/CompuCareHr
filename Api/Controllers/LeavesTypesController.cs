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
    [Route("api/{lang}/[controller]")]
    [ApiController]
    public class LeavesTypesController : ControllerBase
    {
        private readonly HR_DirectionContext _context;

        public LeavesTypesController(HR_DirectionContext context)
        {
            _context = context;
        }

        // GET: api/LeavesTypes
        [HttpGet]
        public IActionResult GetLeavesType()
        {
            var listVm = new List<LeavesTypeVm>();
            var listLeave = _context.LeavesType.ToList();
            foreach (var item in listLeave)
            {
                var leaveTypeVm = new LeavesTypeVm();
                leaveTypeVm.Name = item.Name;
                leaveTypeVm.Id = item.Id;

                listVm.Add(leaveTypeVm);
            }
            return Ok(listVm);
        }

        // GET: api/LeavesTypes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetLeavesType([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var leavesType = await _context.LeavesType.FindAsync(id);
            var leavesTypeVm = new LeavesTypeVm();

            leavesTypeVm.Id = id;
            leavesTypeVm.Name = leavesType.Name;
            if (leavesType == null)
            {
                return NotFound();
            }

            return Ok(leavesTypeVm);
        }

        // PUT: api/LeavesTypes/5
        [HttpPut("Update/{id}")]
        public async Task<IActionResult> PutLeavesType([FromRoute] int id, [FromBody] LeavesType leavesType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != leavesType.Id)
            {
                return BadRequest();
            }

            _context.Entry(leavesType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LeavesTypeExists(id))
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

        // POST: api/LeavesTypes
        [HttpPost("new")]
        public async Task<IActionResult> PostLeavesType([FromBody] LeavesType leavesType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.LeavesType.Add(leavesType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLeavesType", new { id = leavesType.Id }, leavesType);
        }

        // DELETE: api/LeavesTypes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLeavesType([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var leavesType = await _context.LeavesType.FindAsync(id);
            if (leavesType == null)
            {
                return NotFound();
            }

            _context.LeavesType.Remove(leavesType);
            await _context.SaveChangesAsync();

            return Ok(leavesType);
        }

        private bool LeavesTypeExists(int id)
        {
            return _context.LeavesType.Any(e => e.Id == id);
        }
    }
}