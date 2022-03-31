using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class LeavesRule
    {
        public LeavesRule()
        {
            Leaves = new HashSet<Leaves>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public bool? IsHourCut { get; set; }
        public bool? Isshift { get; set; }
        public bool? IshourAdd { get; set; }

        public ICollection<Leaves> Leaves { get; set; }
    }
}
