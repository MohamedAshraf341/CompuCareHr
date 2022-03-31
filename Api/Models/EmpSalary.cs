using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class EmpSalary
    {
        public int Id { get; set; }
        public int? EmpId { get; set; }
        public string EmpName { get; set; }
        public int? Monthid { get; set; }
        public int? Yearid { get; set; }
        public int? ValCode { get; set; }
        public decimal? Val { get; set; }
        public string ValName { get; set; }
    }
}
