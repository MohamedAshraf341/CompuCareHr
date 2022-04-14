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
    [Route("api/[controller]")]
    [ApiController]
    public class UserRoleController : ControllerBase
    {

        private readonly HR_DirectionContext _context;

        public UserRoleController(HR_DirectionContext context)
        {
            _context = context;
        }
        [HttpGet("getpages")]
        public IActionResult getpages()
        {
            var listVm = new List<SystempageVm>();

            var list = _context.Systempage.ToList();
            foreach (var item in list)
            {
                var Systempage = new SystempageVm();
                Systempage.Id= item.Id;
                Systempage.Name= item.Name;

                listVm.Add(Systempage);
            }
            return Ok(listVm);
        }

        [HttpGet("GetUserSystemPage/{UserId}")]
        public IActionResult GetUserSystemPage([FromRoute] int UserId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            //var result = from person in _context.Systempage
            //             join detail in _dbContext.PersonDetails on person.Id equals detail.PersonId into Details
            //             from m in Details.DefaultIfEmpty()
            //             select new
            //             {
            //                 id = person.Id,
            //                 firstname = person.Firstname,
            //                 lastname = person.Lastname,
            //                 detailText = m.DetailText
            //             };
            var entryPoint = (from SP in _context.Systempage
                               join us in _context.UserSystempage on SP.Id equals us.Pagid
                              into us1
                              from defaultVal in us1.DefaultIfEmpty()
                              where defaultVal.Userid == UserId
                              select new
                              {
                                  pageId = SP.Id,
                                  PaageName = SP.Name,
                                  New = defaultVal.New,
                                  edit = defaultVal.edit,
                                  delete = defaultVal.delete,
                              }).ToList();

            if (entryPoint == null)
            {
                return NotFound();
            }

            return Ok(entryPoint);
        }

        [HttpPost("NewUserRole")]
        public async Task<ActionResult<Attcomp>> NewUserRole(UserSystempage company)
        {
            _context.UserSystempage.Add(company);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCompanies", new { id = company.Id }, company);
        }
    }
}
