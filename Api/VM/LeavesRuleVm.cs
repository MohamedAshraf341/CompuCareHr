using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.VM
{
    public class LeavesRuleVm
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool? IsHourCut { get; set; }
        public bool? Isshift { get; set; }
        public bool? IshourAdd { get; set; }
    }
}
