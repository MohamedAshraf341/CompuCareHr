using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Site4Check.Services;

namespace Site4Check.Models
{
    [Route("api/{lang}/[controller]")]
    [ApiController]
    public class NotificationSignalController : ControllerBase
    {
        private readonly HR_DirectionContext _context;

        public NotificationSignalController(HR_DirectionContext context)
        {
            _context = context;
        }


        [HttpPost]
        public IActionResult SendNotification(NotificationData obj)
        {
            obj.Createdate = DateTime.Now;
          //  var getEmpId = _context.Employees.Where(e => e.Id == obj.Empid).FirstOrDefault();
            var getUserId = _context.Users.Where(e => e.Id == obj.Userid).FirstOrDefault();
            if ( getUserId != null)
            {
               // getEmpId.NotificationData.Add(obj);
                getUserId.NotificationData.Add(obj);
                _context.NotificationData.Add(obj);
                _context.SaveChanges();
                return Ok("Notifiy Successfully");
            }
            else
            {
                return NotFound("Employee Id Or User Id Not Found");
            }
        }
    }
}