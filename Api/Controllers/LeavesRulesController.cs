using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Site4Check.Models;
using Site4Check.VM;
using Site4Check.listVm;


namespace Site4Check.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeavesRulesController : ControllerBase
    {
        private readonly HR_DirectionContext _context;

        public LeavesRulesController(HR_DirectionContext context)
        {
            _context = context;
        }

        // GET: api/LeavesRules
        [HttpGet]
        public IActionResult GetLeavesRule()
        {
            var listVm = new List<LeavesRuleVm>();
            var listLeave= _context.LeavesRule.ToList();
            foreach (var item in listLeave)
            {
                var leaveRuleVm = new LeavesRuleVm();
                leaveRuleVm.Name = item.Name;
                leaveRuleVm.Id = item.Id;
                leaveRuleVm.IshourAdd = item.IshourAdd;
                leaveRuleVm.IsHourCut = item.IsHourCut;
                leaveRuleVm.Isshift = item.Isshift;
                listVm.Add(leaveRuleVm);
            }
            return Ok(listVm);
        }

        // GET: api/LeavesRules/5
        [HttpGet("GetRules/{id}")]
        public async Task<IActionResult> GetLeavesRule([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var leavesRule = await _context.LeavesRule.FindAsync(id);

            if (leavesRule == null)
            {
                return NotFound();
            }

            var leaveRuleVm = new LeavesRuleVm();
            leaveRuleVm.Name = leavesRule.Name;
            leaveRuleVm.Id = id;
            leaveRuleVm.IshourAdd = leavesRule.IshourAdd;
            leaveRuleVm.IsHourCut = leavesRule.IsHourCut;
            leaveRuleVm.Isshift = leavesRule.Isshift;

            return Ok(leaveRuleVm);
        }

        // PUT: api/LeavesRules/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLeavesRule([FromRoute] int id, [FromBody] LeavesRule leavesRule)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != leavesRule.Id)
            {
                return BadRequest();
            }

            _context.Entry(leavesRule).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LeavesRuleExists(id))
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

        // POST: api/LeavesRules
        [HttpPost]
        public async Task<IActionResult> PostLeavesRule([FromBody] LeavesRule leavesRule)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.LeavesRule.Add(leavesRule);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLeavesRule", new { id = leavesRule.Id }, leavesRule);
        }

        // DELETE: api/LeavesRules/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLeavesRule([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var leavesRule = await _context.LeavesRule.FindAsync(id);
            if (leavesRule == null)
            {
                return NotFound();
            }

            _context.LeavesRule.Remove(leavesRule);
            await _context.SaveChangesAsync();

            return Ok(leavesRule);
        }

        private bool LeavesRuleExists(int id)
        {
            return _context.LeavesRule.Any(e => e.Id == id);
        }
    }
}