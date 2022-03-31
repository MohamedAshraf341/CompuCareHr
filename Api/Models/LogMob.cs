using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class LogMob
    {
        public int Id { get; set; }
        public int? EmpId { get; set; }
        public DateTime? GdateTime { get; set; }
        public decimal? Latitude { get; set; }
        public decimal? Longitude { get; set; }
        public string LocatinName { get; set; }
        public string MobSer { get; set; }
        public string Image { get; set; }
    }
}
