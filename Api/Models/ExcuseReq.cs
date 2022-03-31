using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class ExcuseReq
    {
        public int Id { get; set; }
        public int? Empid { get; set; }
        public int? Typeid { get; set; }
        public TimeSpan? Stime { get; set; }
        public TimeSpan? Etime { get; set; }
        public int? Shiftid { get; set; }
        public DateTime? Edate { get; set; }
        public string Ehdate { get; set; }
        public string Dpbcancle { get; set; }
        public string Bcancle { get; set; }
        public int? Dpbossid { get; set; }
        public int? Bossid { get; set; }
        public string Excwhy { get; set; }
        public int? Exstatues { get; set; }
        public string Exstatuestext { get; set; }
    }
}
