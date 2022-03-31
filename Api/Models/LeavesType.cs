using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class LeavesType
    {
        public LeavesType()
        {
            Leaves = new HashSet<Leaves>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Leaves> Leaves { get; set; }
    }
}
