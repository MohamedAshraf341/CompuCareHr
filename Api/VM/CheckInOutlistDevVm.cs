using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.listVm
{
    public class CheckInOutlistDevVm
    {
         
            public string Status { get; set; }
            public List<CheckDateDev> data { get; set; }

   }
        public class CheckDateDev
        {

            public int Id { get; set; }
            public int? Empid { get; set; }
            public DateTime? Gdatetime { get; set; }
            public int? Inoutmode { get; set; }
            public TimeSpan? Chektime { get; set; }
            public string Devid { get; set; }
            public int? LocationId { get; set; }
            public string MobSer { get; set; }
            public IFormFile Image { get; set; }
        }
     
}
