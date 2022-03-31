using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Site4Check.Models;
using Microsoft.AspNetCore.Hosting;
using Site4Check.listVm;
using Hangfire;
using Newtonsoft.Json;
using System.Net.Http;
using System.Text;

namespace Site4Check.Controllers
{
    [Route("api/{lang}/[controller]")]
    [ApiController]
    public class CheckinoutMobController : ControllerBase {
        private readonly HR_DirectionContext _context;
        private readonly IBackgroundJobClient backgroundJobClient;
        private readonly IRecurringJobManager recurringJobManager;

        private static Uri FireBasePushNotificationsURL = new Uri("https://fcm.googleapis.com/fcm/send");
        private static string ServerKey = "AAAANi8jmlY:APA91bE9Dj34dnEWSGjqvoxWQtV3Rs7Ds2HmpsjpUbk5DDZFr5PPAPVbSw1iUIfcgXNpuyGOKN95zB3iKZ91WuitOHuHZk1tGgWoRdXmJZ4ZIHgmHXdx0qMeBLvY1nZ61XCpqN5dM16-";
        private static string senderId = "232719096406";
        public CheckinoutMobController(HR_DirectionContext context)
    {
        _context = context;
    }

    // GET: api/Checkinouts
    [HttpGet]
    public CheckInOutlistVm GetCheckinout()
    {
         var list=_context.CheckinoutMob.ToList();
            var ListlistVm = new List<CheckDate>();
            foreach (var item in list)
            {
                var checklistVm = new CheckDate();
                checklistVm.Chektime = item.Chektime;
                checklistVm.Empid = item.Empid;
                checklistVm.Gdatetime = item.Gdatetime;
                checklistVm.Inoutmode = item.Inoutmode;
                checklistVm.LocationId = item.LocationId;
                checklistVm.MobSer = item.MobSer;
                checklistVm.Shiftid = item.Shiftid;
                ListlistVm.Add(checklistVm);

            }
            return new CheckInOutlistVm() { Status = "Success", data = ListlistVm };
    }



    // GET: api/Checkinouts/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetCheckinout([FromRoute] int id)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var checkinout = await _context.CheckinoutMob.FindAsync(id);

        if (checkinout == null)
        {
            return NotFound();
        }

        return Ok(checkinout);
    }

    // PUT: api/Checkinouts/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutCheckinout([FromRoute] int id, [FromBody] CheckinoutMob checkinout)
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

        #region NewCheck 
        //// POST: api/CheckinoutMob
        //[HttpPost("NewCheck2")]
        //public async Task<IActionResult> PostCheckinout2([FromForm] CheckDateDev checkinoutlistVm)
        //{
        //    int? diff = _context.DiffHour.Select(c => c.DiffHour1).FirstOrDefault();

        //    var dbPath = "";
        //    //Get Photo
        //    if (checkinoutlistVm.Image != null)
        //    {
        //        var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Images");

        //        var uniqueFileName = Guid.NewGuid().ToString() + "_" + checkinoutlistVm.Image.FileName;
        //        dbPath = uniqueFileName;
        //        using (var fileStream = new FileStream(Path.Combine(filePath, uniqueFileName), FileMode.Create))
        //        {
        //            await checkinoutlistVm.Image.CopyToAsync(fileStream);
        //        }
        //    }

        //    var check = new CheckinoutDev();

        //    check.Gdatetime = DateTime.Now.AddHours((double)diff);
        //    check.Chektime = check.Gdatetime - DateTime.Now;
        //    check.Image = dbPath;
        //    check.LocationId = checkinoutlistVm.LocationId;
        //    check.MobSer = checkinoutlistVm.MobSer;
        //    check.Devid = checkinoutlistVm.Devid;
        //    check.Empid = checkinoutlistVm.Empid;
        //    check.Status = true;
        //    check.Inoutmode = checkinoutlistVm.Inoutmode;

        //    var getLocation = _context.Location.Where(l => l.Id == checkinoutlistVm.LocationId).FirstOrDefault();
        //    var getShift = _context.devdata.Where(s => s.Id == checkinoutlistVm.Devid).FirstOrDefault();
        //    //var getEmp = _context.Employees.Where(e => e.Id == checkinoutlistVm.Empid).FirstOrDefault();
        //    try
        //    {

        //        getLocation.CheckinoutDev.Add(check);
        //        getShift.CheckinoutDev.Add(check);
        //        // getEmp.CheckinoutMob.Add(check);
        //        _context.CheckinoutDev.Add(check);
        //        await _context.SaveChangesAsync();
        //        //  await SendPushNotification(checkinoutlistVm.Inoutmode, DateTime.Now.AddHours((double)diff));
        //        return Ok("Added Successfully");


        //    }

        //    catch (Exception e)
        //    {
        //        return BadRequest("Sorry Can't Add Some Required Value Null... Please Check on Location or Shift or Emp " + checkinoutlistVm.Empid.ToString() + " e " + checkinoutlistVm.Devid.ToString() + " L " + e.ToString());

        //    }
        //}

        #endregion

        #region NewCheck1 
        // POST: api/CheckinoutMob
        [HttpPost("NewCheck")]
        public async Task<IActionResult> PostCheckinout([FromForm] CheckDate checkinoutlistVm)
        {
            int? diff = _context.DiffHour.Select(c => c.DiffHour1).FirstOrDefault();

            var dbPath = "";
            //Get Photo
            if (checkinoutlistVm.Image != null)
            {
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Images");

                var uniqueFileName = Guid.NewGuid().ToString() + "_" + checkinoutlistVm.Image.FileName;
                dbPath = uniqueFileName;
                using (var fileStream = new FileStream(Path.Combine(filePath, uniqueFileName), FileMode.Create))
                {
                    await checkinoutlistVm.Image.CopyToAsync(fileStream);
                }
            }

            var check = new CheckinoutMob();

            check.Gdatetime = DateTime.Now.AddHours((double)diff);
            check.Chektime = check.Gdatetime - DateTime.Now;
            check.Image = dbPath;
            check.LocationId = checkinoutlistVm.LocationId;
            check.MobSer = checkinoutlistVm.MobSer;
            check.Shiftid = checkinoutlistVm.Shiftid;
            check.Empid = checkinoutlistVm.Empid;
            check.Status = true;
            check.Inoutmode = checkinoutlistVm.Inoutmode;

   //         var getLocation = _context.Location.Where(l => l.Id == checkinoutlistVm.LocationId).FirstOrDefault();
    //        var getShift = _context.Shifts.Where(s => s.Id == checkinoutlistVm.Shiftid).FirstOrDefault();
            //var getEmp = _context.Employees.Where(e => e.Id == checkinoutlistVm.Empid).FirstOrDefault();
            try
            {

    //            getLocation.CheckinoutMob.Add(check);
      //          getShift.CheckinoutMob.Add(check);
                // getEmp.CheckinoutMob.Add(check);
                _context.CheckinoutMob.Add(check);
                await _context.SaveChangesAsync();
                //  await SendPushNotification(checkinoutlistVm.Inoutmode, DateTime.Now.AddHours((double)diff));
                return Ok("Added Successfully");


            }

            catch (Exception e)
            {
                return BadRequest("Sorry Can't Add Some Required Value Null... Please Check on Location or Shift or Emp " + checkinoutlistVm.Empid.ToString() + " e " + checkinoutlistVm.Shiftid.ToString() + " s " + checkinoutlistVm.LocationId.ToString() + " L " + e.ToString());

            }
        }

        #endregion

       

        #region NewCheck 
        //// POST: api/CheckinoutMob
        //[HttpPost("CheckIn/{id}")]
        //public async Task<IActionResult> PostCheckinout([FromForm] CheckDate checkinoutlistVm, [FromRoute] int id)
        //{
        //    int? diff = _context.DiffHour.Select(c => c.DiffHour1).FirstOrDefault();
        //    var getLocation = _context.Location.Where(l => l.Id == checkinoutlistVm.LocationId).FirstOrDefault();
        //    var getShift = _context.Shifts.Where(s => s.Id == checkinoutlistVm.Shiftid).FirstOrDefault();
        //    var getEmp = _context.Employees.Where(e => e.Id == id).FirstOrDefault();

        //    var check = new CheckinoutMob();

        //    check.Gdatetime = DateTime.Now.AddHours((double)diff);
        //    check.Chektime = check.Gdatetime - DateTime.Now;
        //    check.Image = UploadImage(checkinoutlistVm.Image);
        //    check.LocationId = checkinoutlistVm.LocationId;
        //    check.MobSer = checkinoutlistVm.MobSer;
        //    check.Shiftid = checkinoutlistVm.Shiftid;
        //    //     check.Empid = checkinoutlistVm.Empid;
        //    check.Status = true;
        //    check.Inoutmode = checkinoutlistVm.Inoutmode;

        //    getLocation.CheckinoutMob.Add(check);
        //    getShift.CheckinoutMob.Add(check);
        //    getEmp.CheckinoutMob.Add(check);
        //    _context.CheckinoutMob.Add(check);
        //    await _context.SaveChangesAsync();
        //    return Ok("Added Successfully");
        //}

        [HttpPut("CheckOut/{EmpId}/{LocId}")]
        public IActionResult Checkout([FromRoute] int EmpId, [FromRoute] int LocId)
        {
            //var getEmp = _context.Employees.Where(e => e.Id == id).FirstOrDefault();
            var getEmpCheck = _context.CheckinoutMob.Where(e => e.Empid == EmpId && e.LocationId == LocId).FirstOrDefault();
            getEmpCheck.Status = false;
            _context.Entry(getEmpCheck).State = EntityState.Modified;
            _context.SaveChanges();
            return NoContent();

        }

        #endregion



        // DELETE: api/Checkinouts/5
        [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCheckinout([FromRoute] int id)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var checkinout = await _context.CheckinoutMob.FindAsync(id);
        if (checkinout == null)
        {
            return NotFound();
        }

        _context.CheckinoutMob.Remove(checkinout);
        await _context.SaveChangesAsync();

        return Ok(checkinout);
    }

    private bool CheckinoutExists(int id)
    {
        return _context.CheckinoutMob.Any(e => e.Id == id);
    }



        #region Uploud Image 

        public string UploadImage(IFormFile photo)
        {
            var dbPath = "";
            //Get Photo
            if (photo != null)
            {
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Images");

                var uniqueFileName = Guid.NewGuid().ToString() + "_" + photo.FileName;
                dbPath = uniqueFileName;
                using (var fileStream = new FileStream(Path.Combine(filePath, uniqueFileName), FileMode.Create))
                {
                    photo.CopyTo(fileStream);
                }

            }
            return dbPath;
        }


        #endregion

        #region CheckIn Notification
        public string EmpToken()
        {
           
            var getEmp = _context.CheckinoutMob.OrderByDescending(cd => cd.Id).FirstOrDefault();  
            var getEmpList = _context.UserFirebaseToken.Where(a => a.EmpId == getEmp.Empid).Select(e => e.UserToken).FirstOrDefault();      
            return getEmpList;
        }

        public async Task<bool> SendPushNotification(int? inoutmode,DateTime? time)
        {
            bool sent = false;
            var token = EmpToken();
            var getEmpId = _context.UserFirebaseToken.Where(a => a.UserToken == token).Select(e => e.EmpId).FirstOrDefault();
            //var getEmp = _context.CheckinoutMob.Where(s => s.Empid == getEmpId).Select(a=>a.Inoutmode).FirstOrDefault();
            var msg = _context.NotificationMessage.FirstOrDefault();
            if (token != null)
            {
                
            if (inoutmode == 1)
            {
                 msg = _context.NotificationMessage.Where(a => a.Id == 1).FirstOrDefault();

            }
            else
            {
                 msg = _context.NotificationMessage.Where(a => a.Id == 2).FirstOrDefault();

            }
           var messageInformation = new NotifylistVm()
                {
                    data = new NotificationMessagelistVm()
                    {
                        title = msg.Title + " ",
                        body = msg.Body,
                        NotifyTime=time
                    },
                    registration_id = token,
                    priority = "high"
                };
                //Object to JSON STRUCTURE => using Newtonsoft.Json;
                string jsonMessage = JsonConvert.SerializeObject(messageInformation);

                //Create request to Firebase API
                var request = new HttpRequestMessage(HttpMethod.Post, FireBasePushNotificationsURL);

                request.Headers.TryAddWithoutValidation("Authorization", "key=" + ServerKey);
                request.Headers.TryAddWithoutValidation("Sender", $"id={senderId}");
                request.Content = new StringContent(jsonMessage, Encoding.UTF8, "application/json");

                HttpResponseMessage result;
                using (var client = new HttpClient())
                {
                    result = await client.SendAsync(request);
                    sent = result.IsSuccessStatusCode;
                }
            }
            if (sent == true || sent == false)
            {
              
                    var x = _context.UserFirebaseToken.Where(a => a.UserToken == token).Select(e => e.EmpId).FirstOrDefault();
                    var userNotify = new UserNotifivations();
                    userNotify.EmpId = x;
                    userNotify.MsgId = msg.Id;
                   // userNotify.NotifyTime = time;
                    _context.UserNotifivations.Add(userNotify);
                    _context.SaveChanges();
                }

            return sent;
        }


        //[HttpGet("Push")]
        //public IActionResult Invoice()
        //{
        //    RecurringJob.AddOrUpdate(() => SendPushNotification(), Cron.Hourly);

        //    return Ok();
        //}
        #endregion

    }
}
