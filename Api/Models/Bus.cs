using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class Bus
    {
        public int Id { get; set; }
        public string NameAr { get; set; }
        public string NameEn { get; set; }
        public string Code { get; set; }
        public bool? IsStop { get; set; }
        public string StopNote { get; set; }
        public int? ProfileId { get; set; }

        public EmployeeProfile Profile { get; set; }
    }
}
