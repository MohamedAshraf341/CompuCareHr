using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hangfire;
using Microsoft.AspNetCore.Mvc;

namespace Site4Check.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {

        private readonly IBackgroundJobClient backgroundJobClient;
        private readonly IRecurringJobManager recurringJobManager;

        // GET api/values
        [HttpGet]
        public ActionResult Get(string lang)
        {
           
            if (lang == "en") {

                return Ok( "value1" );

            }
            else
            {
                

                return Ok( "قيمة 1");

            }
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        public void ee(string lang)
        {
            Console.WriteLine("Wlcome");
        }

        [HttpGet]
        [Route("invoice")]
        public IActionResult Invoice(string userName)
        {
            RecurringJob.AddOrUpdate(() => SendInvoiceMail(userName), Cron.Minutely);
            return Ok($"Recurring Job Scheduled. Invoice will be mailed Monthly for {userName}!");
        }
        public void SendInvoiceMail(string userName)
        {
            //Logic to Mail the user
            Console.WriteLine($"Here is your invoice, {userName}");
        }
    }
}
