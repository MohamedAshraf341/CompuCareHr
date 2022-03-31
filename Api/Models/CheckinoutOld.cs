using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class CheckinoutOld
    {
        public int Id { get; set; }
        public int? Empid { get; set; }
        public DateTime? Gdatetime { get; set; }
        public int? Inoutmode { get; set; }
        public TimeSpan? Chektime { get; set; }
        public int? Shiftid { get; set; }
    }
}
