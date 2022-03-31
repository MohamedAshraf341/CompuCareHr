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
    public class TransactionStatusController : ControllerBase
    {
        private readonly HR_DirectionContext _context;

        public TransactionStatusController(HR_DirectionContext context)
        {
            _context = context;
        }

        // GET: api/TransactionStatus
        [HttpGet]
        public IEnumerable<TransactionStatus> GetTransactionStatus()
        {
            return _context.TransactionStatus;
        }

        // GET: api/TransactionStatus/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTransactionStatus([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var transactionStatus = await _context.TransactionStatus.FindAsync(id);

            if (transactionStatus == null)
            {
                return NotFound();
            }

            return Ok(transactionStatus);
        }

        // PUT: api/TransactionStatus/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTransactionStatus([FromRoute] int id, [FromBody] TransactionStatus transactionStatus)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != transactionStatus.Id)
            {
                return BadRequest();
            }

            _context.Entry(transactionStatus).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TransactionStatusExists(id))
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

        // POST: api/TransactionStatus
        [HttpPost]
        public async Task<IActionResult> PostTransactionStatus([FromBody] TransactionStatus transactionStatus)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.TransactionStatus.Add(transactionStatus);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTransactionStatus", new { id = transactionStatus.Id }, transactionStatus);
        }

        // DELETE: api/TransactionStatus/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTransactionStatus([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var transactionStatus = await _context.TransactionStatus.FindAsync(id);
            if (transactionStatus == null)
            {
                return NotFound();
            }

            _context.TransactionStatus.Remove(transactionStatus);
            await _context.SaveChangesAsync();

            return Ok(transactionStatus);
        }

        private bool TransactionStatusExists(int id)
        {
            return _context.TransactionStatus.Any(e => e.Id == id);
        }
    }
}