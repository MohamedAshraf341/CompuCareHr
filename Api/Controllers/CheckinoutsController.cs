using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Site4Check.Models;

namespace Site4Check.Controllers
{
    [Route("api/{lang}/[controller]")]
    [ApiController]
    public class CheckinoutsController : ControllerBase
    {
        private readonly HR_DirectionContext _context;

        public CheckinoutsController(HR_DirectionContext context)
        {
            _context = context;
        }

        // GET: api/Checkinouts
        [HttpGet]
        public List<Checkinout> GetCheckinout()
        {
            return _context.Checkinout.ToList();
        }

        // GET: api/Checkinouts/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCheckinout([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var checkinout = await _context.Checkinout.FindAsync(id);

            if (checkinout == null)
            {
                return NotFound();
            }

            return Ok(checkinout);
        }

        // PUT: api/Checkinouts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCheckinout([FromRoute] int id, [FromBody] Checkinout checkinout)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != checkinout.Id)
            {
                return BadRequest();
            }

            _context.Entry(checkinout).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CheckinoutExists(id))
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

        // POST: api/Checkinouts
        [HttpPost]
        public async Task<IActionResult> PostCheckinout([FromBody] Checkinout checkinout)
        {
            int? diff = _context.DiffHour.Select(c => c.DiffHour1).FirstOrDefault();
            checkinout.Gdatetime =
                new DateTime(
                checkinout.Gdatetime.Value.Year,
                checkinout.Gdatetime.Value.Month,
                checkinout.Gdatetime.Value.Day,
                checkinout.Gdatetime.Value.Hour,

                checkinout.Gdatetime.Value.Minute,
                checkinout.Gdatetime.Value.Second).AddHours((double)diff);

            checkinout.Chektime=new TimeSpan(
                checkinout.Gdatetime.Value.Hour,
                checkinout.Gdatetime.Value.Minute,
                checkinout.Gdatetime.Value.Second);
            _context.Checkinout.Add(checkinout);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCheckinout", new { id = checkinout.Id }, checkinout);
        }

        // DELETE: api/Checkinouts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCheckinout([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var checkinout = await _context.Checkinout.FindAsync(id);
            if (checkinout == null)
            {
                return NotFound();
            }

            _context.Checkinout.Remove(checkinout);
            await _context.SaveChangesAsync();

            return Ok(checkinout);
        }

        private bool CheckinoutExists(int id)
        {
            return _context.Checkinout.Any(e => e.Id == id);
        }
    }
}