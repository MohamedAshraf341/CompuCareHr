using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class Empshift
    {
        public int Id { get; set; }
        public int? Empid { get; set; }
        public int? Shiftid { get; set; }
        public DateTime? StartDate { get; set; }
        public string StartHdate { get; set; }
        public DateTime? EndDate { get; set; }
        public string EndHdate { get; set; }
    }
}
