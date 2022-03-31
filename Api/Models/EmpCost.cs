using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class EmpCost
    {
        public EmpCost()
        {
            EmpAccTransaction = new HashSet<EmpAccTransaction>();
        }

        public int Id { get; set; }
        public string CostCode { get; set; }
        public string CostName { get; set; }
        public int? EmpId { get; set; }

        public ICollection<EmpAccTransaction> EmpAccTransaction { get; set; }
    }
}
