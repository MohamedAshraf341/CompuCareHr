using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.listVm
{
    public class UserData
    {
        public string status { set; get; }
        public int? UsId { set; get; }
        public string Name { set; get; }
        public string Image { set; get; }
        public string Job { set; get; }
        public string Department { set; get; }
        public int? Year { set; get; }
        public bool? Active { get; set; }
        public bool? Audit { get; set; }
        public string Message { get; set; }
        public bool? ImageRequired { get; set; }

    }
}
