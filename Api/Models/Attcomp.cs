using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class Attcomp
    {
        public int Id { get; set; }
        public string Enname { get; set; }
        public string Arname { get; set; }
        public string City { get; set; }

        public string Owner { get; set; }

        public string Insno { get; set; }

        public string Add { get; set; }
        public string Twon { get; set; }
        public string Law { get; set; }
        public string office { get; set; }
        public string Person { get; set; }
        public string Date { get; set; }
        public string PerJob { get; set; }
        public bool IsActive { get; set; }


    }
}
