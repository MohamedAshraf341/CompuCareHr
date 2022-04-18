using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Site4Check.Models;
using Site4Check.listVm;

namespace Site4Check.Controllers
{
    [Route("api/{lang}/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly HR_DirectionContext _context;
        
        public LoginController(HR_DirectionContext context)
        {
            _context = context;
        }
        // GET api/<controller>/5
        [Route("{username}/{password}")]
        public UserData Get(int username, string password, string lang)
        {
            

            var UserData = _context.Users.Where(u => u.Empid == username).FirstOrDefault();
            //if (lang == "ar")
            //{
            //    return new UserData { status = "Access right"};;
            //}
            if (UserData == null)
            {
                return new UserData { status = "InvalidUser", UsId = null };
            }


            if (UserData.Password != password)
                return new UserData { status = "InvalidPassword", UsId = null };
            else
            {
                var emp = _context.Employees.Where(e => e.Id == UserData.Empid).FirstOrDefault();
         
                return new UserData
                {
                    status = "Success",
                    UsId = UserData.Empid,
                    Name = emp.Name,
                    Job = emp.Wazifa ,
                    Image=emp.Image,
                    Active=emp.Active,
                    Audit=emp.Audit,
                    Message=emp.Message,
                    ImageRequired=emp.ImageRequired,
                    Department = _context.Department.Where(d => d.Id == emp.Departid).Select(dd => dd.Name).FirstOrDefault()
                };

            }

        }

        private bool userExists(int id)
        {
            return _context.UserSystem.Any(e => e.id == id);
        }

        [HttpGet("login/{username}/{password}")]
        public UserPermision login(string username, string password, string lang)
        {


            var UserData = _context.UserSystem.Where(u => u.UserName == username).FirstOrDefault();

            if (UserData == null)
            {
                return new UserPermision { status = "InvalidUser", UsId = null };
            }


            if (UserData.Password != password)
                return new UserPermision { status = "InvalidPassword", UsId = null };
            else
            {
                var emp = _context.UserSystem.Where(e => e.id == UserData.id).FirstOrDefault();

            
                return new UserPermision
                {
                    status = "Success",
                    UsId = UserData.id,
                    Name = emp.UserName,
                  
                };

            }

        }


        // POST api/<controller>
        public string Post([FromBody] Checkinout c)
        {
            c.Chektime = TimeSpan.Parse(DateTime.Now.ToString("HH:mm:ss"));
            c.Gdatetime = DateTime.Now;
            c.Shiftid = _context.Empshift.Where(e => e.Empid == c.Empid).Select(s => s.Shiftid).FirstOrDefault();
     
            _context.Checkinout.Add(c);
            _context.SaveChanges();
            return "Added Successfully";
        }



        #region Log Mobile

        // LogMob 
        [HttpPost("logMob")]
        public IActionResult PostLogMob([FromForm] LogMoblistVm LogMoblistVm)
        {
            var dbPath = "";
            //Get Photo
            if (LogMoblistVm.Image != null)
            {
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Images");

                var uniqueFileName = Guid.NewGuid().ToString() + "_" + LogMoblistVm.Image.FileName;
                dbPath = uniqueFileName;
                using (var fileStream = new FileStream(Path.Combine(filePath, uniqueFileName), FileMode.Create))
                {
                     LogMoblistVm.Image.CopyTo(fileStream);
                }
            }

          //  var getEmpId = _context.Employees.Where(e => e.Id == LogMoblistVm.EmpId).FirstOrDefault();
            var logMob = new LogMob();
            logMob.Image = dbPath;
            logMob.Latitude = LogMoblistVm.Latitude;
            logMob.Longitude = LogMoblistVm.Longitude;
            logMob.LocatinName = LogMoblistVm.LocatinName;
            logMob.MobSer = LogMoblistVm.MobSer;
            logMob.GdateTime = DateTime.Now;

            //getEmpId.LogMob.Add(logMob);
            _context.LogMob.Add(logMob);
            _context.SaveChanges();
            return Ok("Added Successfully");
        }

        #endregion

        #region Uploud Image 

        public string UploadImage(IFormFile photo)
        {
            var dbPath = "";
            //Get Photo
            if (photo != null)
            {
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Images");

                var uniqueFileName = Guid.NewGuid().ToString() + "_" + photo.FileName;
                dbPath =  uniqueFileName;
                using (var fileStream = new FileStream(Path.Combine(filePath, uniqueFileName), FileMode.Create))
                {
                    photo.CopyToAsync(fileStream);
                }
                
            }
            return dbPath;
        }


        #endregion

    }
}
