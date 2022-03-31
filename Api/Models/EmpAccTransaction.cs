using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class EmpAccTransaction
    {
        public int Id { get; set; }
        public decimal? Value { get; set; }
        public DateTime? Date { get; set; }
        public string Note { get; set; }
        public DateTime? RegisterDate { get; set; }
        public bool? Kind { get; set; }
        public int? EmpId { get; set; }
        public int? EmpAccountId { get; set; }
        public int? EmpCostId { get; set; }

        public EmpAccount EmpAccount { get; set; }
        public EmpCost EmpCost { get; set; }
    }
}
