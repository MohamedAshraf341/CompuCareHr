using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.listVm
{
    public class EmpInfolistVm
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool? Active { get; set; }
        public bool? Audit { get; set; }
        public string Message { get; set; }
        public string Image { get; set; }
        public bool? ImageRequired { get; set; }
    }
}
