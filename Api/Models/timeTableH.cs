using System.Collections.Generic;

namespace Site4Check.Models
{
    public class timeTableH
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int TimePeriod { get; set; }
        public string StartDate { get; set; }
        public bool Morning { get; set; }
        public bool Shift { get; set; }
        public bool Driver { get; set; }
        public bool shiftdriver { get; set; }
        public ICollection<timeTableD> timeTableDs { get; set; }

    }
}
