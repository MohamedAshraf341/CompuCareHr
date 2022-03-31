using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class Shifts
    {
        public Shifts()
        {
            CheckinoutMob = new HashSet<CheckinoutMob>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Timestart { get; set; }
        public string Timestarthasm { get; set; }
        public string Timeend { get; set; }
        public string Timeendhasm { get; set; }
        public string Timerstart { get; set; }
        public string Timerstarthasm { get; set; }
        public string Timerend { get; set; }
        public string Timerendhasm { get; set; }
        public bool? Sun { get; set; }
        public bool? Mon { get; set; }
        public bool? Tues { get; set; }
        public bool? Wed { get; set; }
        public bool? Thurs { get; set; }
        public bool? Fri { get; set; }
        public bool? Sat { get; set; }
        public string Start { get; set; }
        public string Endstart { get; set; }
        public string Endtime { get; set; }
        public string Endend { get; set; }
        public bool? NextDay { get; set; }
        public double? Nohodor { get; set; }
        public double? Noensraf { get; set; }

        public ICollection<CheckinoutMob> CheckinoutMob { get; set; }
    }
}
