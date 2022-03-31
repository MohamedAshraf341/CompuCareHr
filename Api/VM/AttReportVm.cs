using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.VM
{
    public class AttReportVm
    {

        public string Empcode { get; set; }
        public string empname { get; set; }
        public DateTime Date { get; set; }
        public DateTime timein { get; set; }
        public DateTime timeout { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public int Day { get; set; }
        public int worktime { get; set; }
        public int overtime { get; set; }
        public int latein { get; set; }
        public int earlyout { get; set; }
        public int absent { get; set; }
        public string note { get; set; }
        public string vacation { get; set; }
        public string permision { get; set; }
        public string Vac1 { get; set; }
        public string Vac2 { get; set; }
        public string Vac3 { get; set; }
        public string Vac4 { get; set; }
        public string VacName { get; set; }
        public string Value { get; set; }

    }
}
