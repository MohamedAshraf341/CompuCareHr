using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.listVm
{
    public class EmpSalarylistVm
    {
        public string Status { get; set; }
        public int Id { get; set; }
        public int? EmpId { get; set; }
        public string EmpName { get; set; }
        public int? Monthid { get; set; }
        public int? Yearid { get; set; }
        public int? ValCode { get; set; }
        public decimal? Val { get; set; }
        public string ValName { get; set; }
    }
}
