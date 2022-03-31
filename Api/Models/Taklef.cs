using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class Taklef
    {
        public int Id { get; set; }
        public int Period { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string StartHdate { get; set; }
        public string EndHdate { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
    }
}
