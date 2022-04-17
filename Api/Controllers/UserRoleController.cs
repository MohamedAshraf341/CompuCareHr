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
        [HttpGet("getusers")]
        public async Task<ActionResult<IEnumerable<UserSystem>>> getusers()
        {
            return await _context.UserSystem.ToListAsync();
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
          
            var entryPoint = (from SP in _context.Systempage
                              join us in _context.UserSystempage on SP.Id equals us.pageId
                              join u in _context.UserSystem on us.Userid equals u.id
                             
                              where us.Userid == UserId
                              select new
                              {
                                  UserId = UserId,
                                  pageId = SP.Id,
                                  PaageName = SP.Name,
                                  New = us.New,
                                  edit = us.edit,
                                  delete = us.delete,
                                  login = us.login,
                                  username=u.UserName,
                                  password=u.Password,  
                                

                              }).ToList();

            if (entryPoint == null)
            {
                return NotFound();
            }

            return Ok(entryPoint);
        }

        [HttpGet("SystemPage")]
        public IActionResult SystemPage()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var entryPoint = (from SP in _context.Systempage
                               
                              select new
                              {
                                  UserId = 0,
                                  pageId = SP.Id,
                                  PaageName = SP.Name,
                                  New = false,
                                  edit = false,
                                  delete = false,
                                  login = false,
                              }).ToList();

            if (entryPoint == null)
            {
                return NotFound();
            }

            return Ok(entryPoint);
        }

        [HttpPost("NewUserRole/{Row}")]
        public async Task<ActionResult<UserSystem>> NewUserRole(UserSystempageVm userpermission,int Row)
        {
            var UserSystempage1 = new UserSystempage();

            var UserSystem1 = new UserSystem();

            //UserSystempage1.Id = 0;
            
            UserSystempage1.pageId = userpermission.pageId;
            UserSystempage1.New = userpermission.New;
            UserSystempage1.edit = userpermission.edit;
            UserSystempage1.delete = userpermission.delete;
            UserSystempage1.login = userpermission.login;

            UserSystem1.UserName = userpermission.UserName;
            UserSystem1.Password = userpermission.Password;

            if (Row == 1)
            {
                _context.UserSystem.Add(UserSystem1);
                await _context.SaveChangesAsync();
               

            }
            var UserData = _context.UserSystem.Where(u => u.UserName == userpermission.UserName && u.Password == userpermission.Password).FirstOrDefault();

            UserSystempage1.Userid = UserData.id;

            _context.UserSystempage.Add(UserSystempage1);
            await _context.SaveChangesAsync();

            return CreatedAtAction("adduserpermission", new { id = UserSystempage1.Id }, userpermission);
        }
    }
}
