using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class EmpStatus
    {
        public int Id { get; set; }
        public int? EmpId { get; set; }
        public bool? Active { get; set; }
        public bool? Audit { get; set; }
        public string Message { get; set; }
    }
}
