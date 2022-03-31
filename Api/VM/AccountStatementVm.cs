using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.listVm
{
    public class AccountStatementlistVm
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
