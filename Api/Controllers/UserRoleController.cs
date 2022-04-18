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



        [HttpPost("NewUserRolearr")]
        public async Task<ActionResult<UserSystem>> NewUserRolearr(UserSystempageVm[] userpermission)
        {
            try
            {
                var UserSystempage1 = new UserSystempage();
                int ID = 0;
                var UserSystem1 = new UserSystem();
                for (int Row = 0; Row < userpermission.Length; Row++)
                {
                    UserSystempage1 = new UserSystempage();
                     
                    //UserSystempage1.Id = 0;


                    UserSystempage1.pageId = userpermission[Row].pageId;
                    UserSystempage1.New = userpermission[Row].New;
                    UserSystempage1.edit = userpermission[Row].edit;
                    UserSystempage1.delete = userpermission[Row].delete;
                    UserSystempage1.login = userpermission[Row].login;

                    UserSystem1.UserName = userpermission[0].UserName;
                    UserSystem1.Password = userpermission[0].Password;


                    //  var UserData = _context.UserSystem.Where(u => u.UserName == userpermission[0].UserName && u.Password == userpermission[0].Password).FirstOrDefault();

                    if (userpermission[0].Userid == 0)  // add new user
                    {
                        if (Row == 0)
                        {
                            _context.UserSystem.Add(UserSystem1);
                            await _context.SaveChangesAsync();
                            ID = UserSystem1.id;
                            UserSystempage1.Userid = UserSystem1.id;
                        }
                        else
                        {
                            UserSystempage1.Userid = ID;
                        }
                    }
                    else   // edit current user
                    {
                        UserSystempage1.Userid = userpermission[0].Userid;
                        if (Row == 0)
                        {


                            var UserSystempageBYUserid = _context.UserSystempage.Where(u => u.Userid == userpermission[0].Userid).ToList();

                            

                            var getId = _context.UserSystem.Find(userpermission[0].Userid);
                            getId.UserName = userpermission[0].UserName;
                            getId.Password = userpermission[0].Password;


                            if (UserSystempageBYUserid == null)
                            {
                                return NotFound();
                            }

                            if (getId == null)
                            {
                                return NotFound();
                            }

                            _context.UserSystempage.RemoveRange(UserSystempageBYUserid);


                            _context.Entry(getId).State = EntityState.Modified;
                            //_context.UserSystem.Add(UserSystem1);

                        }
                    }


                    _context.Entry(UserSystempage1).State = EntityState.Added;
                    _context.UserSystempage.Add(UserSystempage1);
                    //   await _context.SaveChangesAsync();

                    try
                    {
                        await _context.SaveChangesAsync();
                    }
                    catch (DbUpdateConcurrencyException)
                    {
                        if (!CompanyExists(ID))
                        {
                            return NotFound();
                        }
                        else
                        {
                            throw;
                        }
                    }

                }
                return CreatedAtAction("adduserpermission", new { id = UserSystempage1.Id }, userpermission);
            }
            catch (Exception ex)
            {
                return NoContent();
            }


        }
        [HttpPut("UpdateUserPermission/{id}")]
        public async Task<IActionResult> UpdateUserPermission([FromRoute] int id, [FromBody] UserSystempageVm userrole)
        {
            try
            {
                if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var getuserroleId = _context.UserSystempage.Find(id);
            var getuserid = _context.UserSystem.Find(getuserroleId.Userid);

            getuserid.UserName = userrole.UserName;
            getuserid.Password = userrole.Password;
            
                _context.Entry(getuserid).State = EntityState.Modified;
                await _context.SaveChangesAsync();



            getuserroleId.pageId = userrole.pageId;
            getuserroleId.New=userrole.New;
            getuserroleId.edit = userrole.edit;
            getuserroleId.delete = userrole.delete;
            getuserroleId.login= userrole.login;
            
            if (id != getuserroleId.Id)
            {
                return BadRequest();
            }
            _context.Entry(getuserroleId).State = EntityState.Modified;

           
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return NoContent();
        }
        private bool CompanyExists(int id)
        {
            return _context.UserSystempage.Any(e => e.Id == id);
        }
    }
}
