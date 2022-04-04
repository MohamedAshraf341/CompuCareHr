using Site4Check.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.listVm
{
    public class TransactionlistVm
    {
        public string Status { get; set; }
        public List<TransData> data { get; set; }
    }

        public class TransData
        {

        public int Id { set; get; }
        public string From { get; set; }
        public string To { get; set; }
        public string Status { get; set; }
        public int? StatusCode { get; set; }
        public string TranDate { get; set; }
        public string Day { get; set; }
        public string Type { get; set; }
        public int? TypeCode { get; set; }
        public string Reason { get; set; }
        public int? BossNo { get; set; }

        public int? Empcode { get; set; }

        //public virtual Employees employees { get; set; }
    }
}
