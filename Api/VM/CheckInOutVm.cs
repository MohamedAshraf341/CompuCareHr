using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.listVm
{
    public class CheckInOutlistVm
    {
      
        public string Status { get; set; }
        public List<CheckDate> data { get; set; }
    
    }
        public class CheckDate
        {

        public int Id { get; set; }
        public int? Empid { get; set; }
        public DateTime? Gdatetime { get; set; }
        public int? Inoutmode { get; set; }
        public TimeSpan? Chektime { get; set; }
        public int? Shiftid { get; set; }
        public int? LocationId { get; set; }
        public string MobSer { get; set; }
        public IFormFile Image { get; set; }
    }
}
