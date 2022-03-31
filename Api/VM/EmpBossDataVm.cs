using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.listVm
{
    public class EmpBossDatalistVm
    {
        public int Id { get; set; }
        public string EmployeeName { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public string Status { get; set; }
        public int? StatusCode { get; set; }
        public string TranDate { get; set; }
        public string Day { get; set; }
        public string Type { get; set; }
        public int? TypeCode { get; set; }
        public int? EmpId { get; set; }



    }
}
