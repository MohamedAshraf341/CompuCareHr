using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.listVm
{
    public class EmpStatuslistVm
    {
        public int Id { get; set; }
        public int? EmpId { get; set; }
        public bool? Active { get; set; }
        public bool? Audit { get; set; }
        public string Message { get; set; }

    }
}
