using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.listVm
{
    public class EmpLoglistVm
    {
        public int Id { get; set; }
        public int? EmpId { get; set; }
        public string EmpName { get; set; }
        public DateTime? Date { get; set; }
        public string DayName { get; set; }
        public string Timein { get; set; }
        public string Timeout { get; set; }
        public string Note { get; set; }
        public bool? Islatein { get; set; }
        public bool? Islateout { get; set; }
        public bool? IsOvertime { get; set; }
        public string Latein { get; set; }
        public string LateOut { get; set; }
        public string Overtime { get; set; }
        public int? Monthid { get; set; }
        public int? Yearid { get; set; }
    }
}
