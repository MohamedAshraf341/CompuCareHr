using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class Holdayreq
    {
        public int Id { get; set; }
        public DateTime? Datereq { get; set; }
        public int? Empid { get; set; }
        public int? Dbbossid { get; set; }
        public int? Bossid { get; set; }
        public DateTime? StartDate { get; set; }
        public string StartHdate { get; set; }
        public DateTime? EndDate { get; set; }
        public string EndHdate { get; set; }
        public int? Briod { get; set; }
        public int? Hstatues { get; set; }
        public string Hstatuestext { get; set; }
        public string Dbbcancle { get; set; }
        public string Bcancle { get; set; }
        public int? Holdaytype { get; set; }
        public int? Empsupport { get; set; }
    }
}
