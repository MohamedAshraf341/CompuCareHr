using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class EmpBoss
    {
        public int Id { get; set; }
        public int? Empid { get; set; }
        public int? Boss1 { get; set; }
        public int? Boss2 { get; set; }
        public int? Boss3 { get; set; }
        public bool? Relation { get; set; }
        public int? Boss4 { get; set; }
    }
}
