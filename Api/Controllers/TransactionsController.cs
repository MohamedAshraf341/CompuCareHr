using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Site4Check.Models;
using Site4Check.listVm;

namespace Site4Check.Controllers
{
    [Route("api/{lang}/[controller]")]
    [ApiController]
    public class TransactionsController : ControllerBase
    {
        private readonly HR_DirectionContext _context;

        public TransactionsController(HR_DirectionContext context)
        {
            _context = context;
        }

        // GET: api/Transactions
        [HttpGet]
        public IEnumerable<Transaction> GetTransaction()
        {
            return _context.Transaction;
        }

        // GET: api/Transactions/5
        [HttpGet("GetTransaction/{id}")]
        public async Task<IActionResult> GetTransaction([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var transaction = await _context.Transaction.FindAsync(id);

            if (transaction == null)
            {
                return NotFound();
            }

            return Ok(transaction);
        }

       
        // PUT: api/Transactions/5
        [HttpPut("PutTransaction/{id}")]
        public async Task<IActionResult> PutTransaction([FromRoute] int id, [FromBody] Transaction transaction)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != transaction.Id)
            {
                return BadRequest();
            }

            _context.Entry(transaction).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();

            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TransactionExists(id))
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

        // POST: api/Transactions
        [HttpPost]
        public  IActionResult PostTransaction([FromBody] Transaction transaction)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            transaction.Date = DateTime.Now.ToString("yyyyMMddhhmmss");
            var getLeave = _context.Leaves.Where(a => a.Id == transaction.LeaveId).FirstOrDefault();
            if(getLeave != null)
            {
                getLeave.Transaction.Add(transaction);
                _context.Transaction.Add(transaction);
                _context.SaveChanges();

                return Ok("Added Successfully");
            }
          else

            {
                return NotFound("Sorry Can't found Leaves Id or other wrong");
            }
        }

        // DELETE: api/Transactions/5
        [HttpDelete("Delete/{id}")]
        public async Task<IActionResult> DeleteTransaction([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var transaction = await _context.Transaction.FindAsync(id);
            if (transaction == null)
            {
                return NotFound();
            }

            _context.Transaction.Remove(transaction);
            await _context.SaveChangesAsync();

            return Ok(transaction);
        }

        private bool TransactionExists(int id)
        {
            return _context.Transaction.Any(e => e.Id == id);
        }



        #region Trans By EmpCode
        // Get Transaction By Employee Code
        [HttpGet("{code}")]
        public IActionResult GetTransactionByEmpCode([FromRoute] int code)
        {
            var transaction = _context.Transaction.Where(e => e.EmpCode == code).ToList();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            if (transaction == null)
            {
                return NotFound();
            }
            var ListlistVm = new List<TransData>();
            foreach (var item in ListlistVm)
            {
                var trandata = new TransData();
                trandata.Id = item.Id;
                trandata.TypeCode = item.TypeCode;
                trandata.Type = item.Type;
                trandata.TranDate = item.TranDate;
                trandata.Day = item.Day;
                trandata.From = item.From;
                trandata.To = item.To;
                trandata.Status = trandata.Status;
                ListlistVm.Add(trandata);
            }
            var tranlistVm = new TransactionlistVm() { Status = "Success", data = ListlistVm };

            return Ok(tranlistVm);
        }






        // Get Transaction By Leave Type and Employee Code
        [HttpGet("{type}/{code}")]
        public IActionResult GetTransactionByTypeWithEmpCode([FromRoute] int type, [FromRoute] int code)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var transaction = _context.Transaction.Where(e => e.EmpCode == code).Include(e=>e.Leave).ToList();
            //var getleaves = _context.Transaction.Where(e => e.LeaveId == code).ToList();
            var listlistVm = new List<TransData>();
            foreach(var s in transaction)
            {
                var listVm = new TransData();

                listVm.Id = s.Id;
                listVm.TypeCode = s.Leave.Type;
                listlistVm.Add(listVm);
            }


            if (transaction == null)
            {
                return NotFound();
            }

            return Ok(transaction);
        }
        #endregion

    }
}