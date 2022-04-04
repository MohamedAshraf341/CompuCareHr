using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class Transaction
    {
        public int Id { get; set; }
        public int? UserCode { get; set; }
        public int? EmpCode { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public int? TransacrtionCode { get; set; }
        public string Note { get; set; }
        public int? LeaveId { get; set; }
        public decimal? Value { get; set; }
        public string Date { get; set; }
        public string Reason { get; set; }
        public int? BossNo { get; set; }

        public Leaves Leave { get; set; }

        //public virtual Employees employees { get; set; }
    }
}
