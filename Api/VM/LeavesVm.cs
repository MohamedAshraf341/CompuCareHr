using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.VM
{
    public class LeavesVm
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Alis { get; set; }
        public int? Type { get; set; }
        public bool? Issub { get; set; }
        public bool? AcceptVac { get; set; }
        public int? LeavesVacId { get; set; }
        public decimal? CutVal { get; set; }
        public int? LeavesRuleId { get; set; }

    }
}
