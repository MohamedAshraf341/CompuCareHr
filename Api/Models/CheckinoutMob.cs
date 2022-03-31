using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class CheckinoutMob
    {
        public int Id { get; set; }
        public int? Empid { get; set; }
        public DateTime? Gdatetime { get; set; }
        public int? Inoutmode { get; set; }
        public TimeSpan? Chektime { get; set; }
        public int? Shiftid { get; set; }
        public int? LocationId { get; set; }
        public string MobSer { get; set; }
        public string Image { get; set; }
        public bool? Status { get; set; }

        public Location Location { get; set; }
        public Shifts Shift { get; set; }
    }
}
