using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class Extratime
    {
        public int Id { get; set; }
        public int? Empid { get; set; }
        public int? Dpbossid { get; set; }
        public int? Bossid { get; set; }
        public DateTime? Edate { get; set; }
        public string Ehdate { get; set; }
        public string Dpbcancle { get; set; }
        public string Bcancle { get; set; }
        public int? Reqstatues { get; set; }
        public string Reqstatuestext { get; set; }
        public string Reqwhy { get; set; }
        public double? Extratime1 { get; set; }
    }
}
