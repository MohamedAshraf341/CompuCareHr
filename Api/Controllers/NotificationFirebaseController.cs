using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Hangfire;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Site4Check.Models;
using Site4Check.listVm;

namespace Site4Check.Controllers
{
    [Route("api/{lang}/[controller]")]
    [ApiController]
    /// Notification Type
    /// 1= Absent
    public class NotificationFirebaseController : ControllerBase
    {
        private readonly IBackgroundJobClient backgroundJobClient;
        private readonly IRecurringJobManager recurringJobManager;
        private readonly HR_DirectionContext _context;

        private static Uri FireBasePushNotificationsURL = new Uri("https://fcm.googleapis.com/fcm/send");
        private static string ServerKey = "AAAANi8jmlY:APA91bE9Dj34dnEWSGjqvoxWQtV3Rs7Ds2HmpsjpUbk5DDZFr5PPAPVbSw1iUIfcgXNpuyGOKN95zB3iKZ91WuitOHuHZk1tGgWoRdXmJZ4ZIHgmHXdx0qMeBLvY1nZ61XCpqN5dM16-";
        private static string senderId = "232719096406";
        public NotificationFirebaseController(HR_DirectionContext context)
        {
            _context = context;
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="deviceTokens">List of all devices assigned to a user</param>
        /// <param name="title">Title of notification</param>
        /// <param name="body">Description of notification</param>
        /// <param name="data">Object with all extra information you want to send hidden in the notification</param>
        /// <returns></returns>
        /// 

        //Updata User Token 
        [HttpPut("Token/{id}")]
        public IActionResult UpdateUserTokenFirebase([FromRoute] int id, [FromBody] UserFirebaseToken token)
        {
            var getEmp = _context.Employees.Find(id);
            var getEmpToken = _context.UserFirebaseToken.Where(a => a.EmpId == id).FirstOrDefault();
            if (getEmpToken != null)
            {
                getEmpToken.UserToken = token.UserToken;
                getEmpToken.Language = token.Language;
                getEmpToken.DeviceType = token.DeviceType;
                _context.Entry(getEmpToken).State = EntityState.Modified;

            }
            else
            {
               // getEmp.UserFirebaseToken.Add(token);
                _context.UserFirebaseToken.Add(token);
            }
            _context.SaveChanges();
            return NoContent();
        }



        #region Push Notification Using Firebase


        //[HttpPost("Push")]
        //public async Task<bool> SendPushNotification(string[] token, [FromBody]NotificationMessagelistVm meg)
        //{
        //    bool sent = false;

        //    if (token.Count() > 0)
        //    {
        //        //Object creation

        //        var messageInformation = new NotifyTokenlistVm()
        //        {
        //            //data for android 
        //            //Notification For IOS
        //            data = new NotificationMessagelistVm()
        //            {
        //                title = meg.title,
        //                body = meg.body
        //            },
        //            registration_ids = token,
        //            priority = "high"
        //        };

        //        //using (var client = new HttpClient())
        //        //{
        //        //    string jsonMessage = JsonConvert.SerializeObject(messageInformation);
        //        //    client.BaseAddress = new Uri("https://fcm.googleapis.com");
        //        //    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        //        //    client.DefaultRequestHeaders.TryAddWithoutValidation("Authorization",
        //        //        $"key={ServerKey}");
        //        //    client.DefaultRequestHeaders.TryAddWithoutValidation("Sender", $"id={senderId}");

        //        //    var httpContent = new StringContent(jsonMessage, Encoding.UTF8, "application/json");

        //        //    var result = await client.PostAsync("/fcm/send", httpContent);

        //        //    sent = result.StatusCode.Equals(HttpStatusCode.OK);
        //        //}




        //        //Object to JSON STRUCTURE => using Newtonsoft.Json;
        //        string jsonMessage = JsonConvert.SerializeObject(messageInformation);


        //        //Create request to Firebase API
        //        var request = new HttpRequestMessage(HttpMethod.Post, FireBasePushNotificationsURL);

        //        request.Headers.TryAddWithoutValidation("Authorization", "key=" + ServerKey);
        //        request.Headers.TryAddWithoutValidation("Sender", $"id={senderId}");
        //        request.Content = new StringContent(jsonMessage, Encoding.UTF8, "application/json");

        //        HttpResponseMessage result;
        //        using (var client = new HttpClient())
        //        {
        //            result = await client.SendAsync(request);
        //            sent = result.IsSuccessStatusCode;
        //        }
        //    }

        //    return sent;
        //}
        #endregion

        //[HttpGet("notify/{Id}")]
        //public IActionResult GetUserNotificationById([FromRoute] int Id)
        //{
        //  // var lang= Request.Headers["Accept-Language"].ToString();

        //    var entity = _context.UserNotifivations.Where(e => e.EmpId == Id).Include(e => e.Msg).OrderByDescending(e => e.NotifyTime).ToList();
        //    var noteListlistVm = new List<NotificationMessagelistVm>();

        //    foreach (var item in entity)
        //    {
        //        var noteMsg = _context.NotificationMessage.Where(a => a.Id == item.MsgId).ToList();

        //        foreach (var mg in noteMsg)
        //        {
        //            var notelistVm = new NotificationMessagelistVm();
        //            notelistVm.title = mg.Title +" " + item.NotifyTime;
        //            notelistVm.body = mg.Body ;
        //            notelistVm.NotifyTime = item.NotifyTime;
        //            noteListlistVm.Add(notelistVm);
        //        }

        //    }
        //    return Ok(noteListlistVm);
        //}

      
        #region CheckIn Notification
        public List<string> EmpTokens()
        {
            var tokenList = new List<string>();
            var getEmp = _context.CheckinoutMob.Where(s=>s.Inoutmode == 1).ToList();

            foreach (var item in getEmp)
            {
                var getEmpList = _context.UserFirebaseToken.Where(a => a.EmpId == item.Empid).Select(e => e.UserToken).FirstOrDefault();
                tokenList.Add(getEmpList);
            }

            return tokenList;
        }


        //public async Task<bool> SendPushNotification()
        //{
        //    bool sent = false;
        //    var token = EmpTokens();
        //    var msg = _context.NotificationMessage.FirstOrDefault();

        //    if (token.Count() > 0)
        //    {

        //        foreach (var item in token)
        //        {


        //            var getEmpId = _context.UserFirebaseToken.Where(a => a.UserToken == item).Select(e => e.EmpId).FirstOrDefault();
        //            var getEmp = _context.CheckinoutMob.Where(s => s.Empid == getEmpId).Select(a=>a.Inoutmode).FirstOrDefault();
        //            switch (getEmp)
        //            {
        //                case 1:
        //                    msg = _context.NotificationMessage.Where(a => a.Id == 1).FirstOrDefault();

        //                    break;
        //                case 2:
        //                    msg = _context.NotificationMessage.Where(a => a.Id == 2).FirstOrDefault();
        //                    break;
        //            }

        //            var messageInformation = new NotifyTokenlistVm()
        //            {

        //                data = new NotificationMessagelistVm()
        //                {
        //                    title = msg.Title + " ",
        //                    body = msg.Body
        //                },
        //                registration_ids = token,
        //                priority = "high"
        //            };
        //            //Object to JSON STRUCTURE => using Newtonsoft.Json;
        //            string jsonMessage = JsonConvert.SerializeObject(messageInformation);


        //            //Create request to Firebase API
        //            var request = new HttpRequestMessage(HttpMethod.Post, FireBasePushNotificationsURL);

        //            request.Headers.TryAddWithoutValidation("Authorization", "key=" + ServerKey);
        //            request.Headers.TryAddWithoutValidation("Sender", $"id={senderId}");
        //            request.Content = new StringContent(jsonMessage, Encoding.UTF8, "application/json");

        //            HttpResponseMessage result;
        //            using (var client = new HttpClient())
        //            {
        //                result = await client.SendAsync(request);
        //                sent = result.IsSuccessStatusCode;
        //            }

        //        }
        //        if (sent == true)
        //        {
        //            foreach (var items in token)
        //            {
        //                var x = _context.UserFirebaseToken.Where(a => a.UserToken == items).Select(e => e.EmpId).FirstOrDefault();
        //                var userNotify = new UserNotifivations();
        //                userNotify.EmpId = x;
        //                if (getEmp == 1)
        //                {
        //                    userNotify.MsgId = msg.Id;

        //                }
        //                userNotify.MsgId = msg.Id;
        //                userNotify.NotifyTime = DateTime.Now;
        //                _context.UserNotifivations.Add(userNotify);
        //                _context.SaveChanges();
        //            }
        //        }
        //    }


        //    return sent;
        //}

        public async Task<bool> SendPushNotification()
        {
            bool sent = false;
            var token = EmpTokens();

            var msg = _context.NotificationMessage.Where(a => a.Id == 1).FirstOrDefault();
            if (token.Count() > 0)
            {

                var messageInformation = new NotifyTokenlistVm()
                {

                    data = new NotificationMessagelistVm()
                    {
                        title = msg.Title + " ",
                        body = msg.Body
                    },
                    registration_ids = token,
                    priority = "high"
                };
                //Object to JSON STRUCTURE => using Newtonsoft.Json;
                string jsonMessage = JsonConvert.SerializeObject(messageInformation);


                //Create request to Firebase API
                var request = new HttpRequestMessage(HttpMethod.Post, FireBasePushNotificationsURL);

                request.Headers.TryAddWithoutValidation("Authorization", "key=" + ServerKey);
                request.Headers.TryAddWithoutValidation("Sender", $"id={senderId}");
                request.Content = new StringContent(jsonMessage, Encoding.UTF8, "application/json");




                //////////////////////////////////////////////////////////////////////////////////////////
                HttpResponseMessage result;
                using (var client = new HttpClient())
                {
                    result = await client.SendAsync(request);
                    sent = result.IsSuccessStatusCode;
                }
            }
            if (sent == true)
            {
                foreach (var item in token)
                {
                    var x = _context.UserFirebaseToken.Where(a => a.UserToken == item).Select(e => e.EmpId).FirstOrDefault();
                    var userNotify = new UserNotifivations();
                    userNotify.EmpId = x;
                    userNotify.MsgId = msg.Id;
                //    userNotify.NotifyTime = DateTime.Now;
                    _context.UserNotifivations.Add(userNotify);
                    _context.SaveChanges();
                }
            }

            return sent;
        }


        [HttpGet("Push")]
        public IActionResult Invoice()
        {
            RecurringJob.AddOrUpdate(() => SendPushNotification(), Cron.Hourly);

            return Ok();
        }
        #endregion


        #region CheckOut Notification 
        public List<string> EmpTokensOut()
        {
            var tokenList = new List<string>();
            var getEmp = _context.CheckinoutMob.Where(s => s.Inoutmode == 2).ToList();

            foreach (var item in getEmp)
            {
                var getEmpList = _context.UserFirebaseToken.Where(a => a.EmpId == item.Empid).Select(e => e.UserToken).FirstOrDefault();
                tokenList.Add(getEmpList);
            }

            return tokenList;
        }
        public async Task<bool> SendPushNotificationOut()
        {
            bool sent = false;
            var token = EmpTokensOut();

            var msg = _context.NotificationMessage.Where(a => a.Id == 2).FirstOrDefault();
            if (token.Count() > 0)
            {

                var messageInformation = new NotifyTokenlistVm()
                {

                    data = new NotificationMessagelistVm()
                    {
                        title = msg.Title + " ",
                        body = msg.Body
                    },
                    registration_ids = token,
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
            if (sent == true)
            {
                foreach (var item in token)
                {
                    var x = _context.UserFirebaseToken.Where(a => a.UserToken == item).Select(e => e.EmpId).FirstOrDefault();
                    var userNotify = new UserNotifivations();
                    userNotify.EmpId = x;
                    userNotify.MsgId = msg.Id;
                 //   userNotify.NotifyTime = DateTime.Now;
                    _context.UserNotifivations.Add(userNotify);
                    _context.SaveChanges();
                }
            }

            return sent;
        }


        [HttpGet("PushOut")]
        public IActionResult InvoiceOut()
        {
            RecurringJob.AddOrUpdate(() => SendPushNotificationOut(), Cron.Hourly);

            return Ok();
        }
        #endregion

    }

}
