using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.VM
{
    public class EmpWorkVM
    {
        public int Id { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public bool? IsHour { get; set; } = false;
        public bool? IsDayOff { get; set; } = false;
        public string StartSign { get; set; }
        public string EndSign { get; set; }
        public string StartShift { get; set; }
        public string EndShift { get; set; }
        public string EarlyPermission { get; set; }
        public string LatePermission { get; set; }
        public int? OverTimeStart { get; set; }
        public int? ShiftId { get; set; }
    }
}
