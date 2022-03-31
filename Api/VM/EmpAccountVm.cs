using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.listVm
{
    public class EmpAccountlistVm
    {
        public string Status { get; set; }
        public int Id { get; set; }
        public string AccountCode { get; set; }
        public string AccountName { get; set; }
        public int? EmpId { get; set; }
    }
}
