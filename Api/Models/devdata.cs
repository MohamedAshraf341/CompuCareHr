using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.Models
{
    public class devdata
    {
        public devdata()
        {
            CheckinoutDev = new HashSet<CheckinoutDev>();
        }

        public string Id { get; set; }
        public string Name { get; set; }
      

        public ICollection<CheckinoutDev> CheckinoutDev { get; set; }
    }
}
