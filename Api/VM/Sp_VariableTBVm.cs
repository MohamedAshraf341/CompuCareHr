using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.Models
{
    public class Sp_VariableTBlistVm
    {
        public int Id { get; set; }
        public string TableName { get; set; }
        public string NameAr { get; set; }
        public string NameEn { get; set; }
        public string Code { get; set; }
        public string StopNote { get; set; }
        public int ? IsStop { get; set; }
        public int ? ProfileId { get; set; }

    }
}
