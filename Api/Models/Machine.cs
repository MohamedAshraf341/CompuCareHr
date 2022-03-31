using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class Machine
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Mip { get; set; }
        public string Mport { get; set; }
    }
}
