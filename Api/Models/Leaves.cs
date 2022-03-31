using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class Leaves
    {
        public Leaves()
        {
            Transaction = new HashSet<Transaction>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Alis { get; set; }
        public int? Type { get; set; }
        public bool? Issub { get; set; }
        public bool? AcceptVac { get; set; }
        public int? LeavesVacId { get; set; }
        public decimal? CutVal { get; set; }
        public int? LeavesRuleId { get; set; }

        public LeavesRule LeavesRule { get; set; }
        public LeavesVac LeavesVac { get; set; }
        public LeavesType TypeNavigation { get; set; }
        public ICollection<Transaction> Transaction { get; set; }
    }
}
