using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class AccountStatement
    {
        public int Id { get; set; }
        public decimal? Value { get; set; }
        public string ValueInfo { get; set; }
        public DateTime? Date { get; set; }
        public string AccountCode { get; set; }
        public string Sign { get; set; }
        public int? EmpId { get; set; }
        public DateTime? RegisterDate { get; set; }
        public string Note { get; set; }
    }
}
