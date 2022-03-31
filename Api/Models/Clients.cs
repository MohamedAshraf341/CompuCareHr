using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class Clients
    {
        public int Id { get; set; }
        public string ClientName { get; set; }
        public string Mobile1 { get; set; }
        public string Mobile2 { get; set; }
        public string ProjectName { get; set; }
        public string UnitNumber { get; set; }
        public decimal? UnitValue { get; set; }
        public DateTime? RegisterDate { get; set; }
        public int? EmpId { get; set; }
    }
}
