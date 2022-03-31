using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.listVm
{
    public class EmpAccTranslistVm
    {
        public string Status { get; set; }
        public int Id { get; set; }
        public decimal? Value { get; set; }
        public DateTime? Date { get; set; }
        public string Note { get; set; }
        public DateTime? RegisterDate { get; set; }
        public bool? Kind { get; set; }
        public int? EmpId { get; set; }
        public int? EmpAccountId { get; set; }
        public int? EmpCostId { get; set; }
    }
}
