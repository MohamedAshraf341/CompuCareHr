using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.listVm
{
    public class LogMoblistVm
    {
        public string Status { get; set; }
        public int Id { get; set; }
        public int? EmpId { get; set; }
        public DateTime? GdateTime { get; set; }
        public decimal? Latitude { get; set; }
        public decimal? Longitude { get; set; }
        public string LocatinName { get; set; }
        public string MobSer { get; set; }
        public IFormFile Image { get; set; }


    }
}
