using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Site4Check.Models;
using Site4Check.VM;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AttCompController : ControllerBase
    {
        private readonly HR_DirectionContext _context;
        public AttCompController(HR_DirectionContext context)
        {
            _context = context;
        }
        //GET: api/AttComp/GetCompanies
       [HttpGet("GetCompanies")]
        public async Task<ActionResult<IEnumerable<attcomp>>> GetCompanies()
        {
            return await _context.Attcomp.ToListAsync();
        }
        [HttpGet("GetCompany/{id}")]
        public async Task<ActionResult<attcomp>> GetCompany(int id)
        {
            var company = await _context.Attcomp.FindAsync(id);

            if (company == null)
            {
                return NotFound();
            }

            return company;
        }

        // PUT: api/Attcomp/PutCompany/5

        [HttpPut("PutCompany/{id}")]
        public async Task<IActionResult> PutCompany(int id, AttcompVm company)
        {
            var Attcomp = _context.Attcomp.Find(id);
            if (id != Attcomp.Id)
            {
                return BadRequest();
            }
            Attcomp.Enname = company.Enname;
            Attcomp.Arname= company.Arname;
            Attcomp.City= company.City;
            Attcomp.Owner= company.Owner;
            Attcomp.Insno= company.Insno;
            Attcomp.Add= company.Add;
            Attcomp.Twon= company.Twon;
            Attcomp.Law= company.Law;
            Attcomp.office = company.office;
            Attcomp.Person= company.Person;
            Attcomp.Date= company.Date;
            Attcomp.PerJob= company.PerJob;
            Attcomp.isActive = company.isActive;

            _context.Entry(Attcomp).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompanyExists(id))
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

        // POST: api/Attcomp/AddComany

        [HttpPost("AddComany")]
        public async Task<ActionResult<attcomp>> AddComany(attcomp company)
        {
            _context.Attcomp.Add(company);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCompanies", new { id = company.Id }, company);
        }

        // DELETE: api/Attcomp/DeleteCpmpany/5
        [HttpDelete("DeleteCpmpany/{id}")]
        public async Task<ActionResult<attcomp>> DeleteCpmpany(int id)
        {
            var Company = await _context.Attcomp.FindAsync(id);
            if (Company == null)
            {
                return NotFound();
            }

            _context.Attcomp.Remove(Company);
            await _context.SaveChangesAsync();

            return Company;
        }

        private bool CompanyExists(int id)
        {
            return _context.Attcomp.Any(e => e.Id == id);
        }
    }
}
