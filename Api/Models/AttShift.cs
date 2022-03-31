using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class AttShift
    {
        public AttShift()
        {
            EmpWorkTime = new HashSet<EmpWorkTime>();

        }
        public int Id { get; set; }
        public string Enname { get; set; }
        public string Arname { get; set; }

        public ICollection<EmpWorkTime> EmpWorkTime { get; set; }
    }
}
