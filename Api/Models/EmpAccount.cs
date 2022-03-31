using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class EmpAccount
    {
        public EmpAccount()
        {
            EmpAccTransaction = new HashSet<EmpAccTransaction>();
        }

        public int Id { get; set; }
        public string AccountCode { get; set; }
        public string AccountName { get; set; }
        public int? EmpId { get; set; }

        public ICollection<EmpAccTransaction> EmpAccTransaction { get; set; }
    }
}
