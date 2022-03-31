using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class Officialvacation
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime? Vdatestart { get; set; }
        public DateTime? Vdateend { get; set; }
        public string VdatestartH { get; set; }
        public string VdateendH { get; set; }
    }
}
