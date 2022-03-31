using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class ApprovalEdafi
    {
        public int Id { get; set; }
        public DateTime? StartDate { get; set; }
        public string StartHdate { get; set; }
        public DateTime? EndDate { get; set; }
        public string EndHdate { get; set; }
    }
}
