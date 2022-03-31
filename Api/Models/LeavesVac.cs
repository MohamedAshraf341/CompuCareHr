using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class LeavesVac
    {
        public LeavesVac()
        {
            Leaves = new HashSet<Leaves>();
        }

        public int Id { get; set; }
        public string VacName { get; set; }

        public ICollection<Leaves> Leaves { get; set; }
    }
}
