using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.listVm
{
    public class EmpBosslistVm
    {
        public int Id { get; set; }
        public bool? Relation { get; set; }
        public string EmployeeName { get; set; }
        public string Boss1Name { get; set; }
        public string Boss2Name { get; set; }
        public string Boss3Name { get; set; }

    }
}
