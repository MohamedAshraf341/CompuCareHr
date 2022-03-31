using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class Location
    {
        public Location()
        {
            CheckinoutMob = new HashSet<CheckinoutMob>();
            CheckinoutDev = new HashSet<CheckinoutDev>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public decimal? Latitude { get; set; }
        public decimal? Longitude { get; set; }
        public int? Distance { get; set; }

        public ICollection<CheckinoutMob> CheckinoutMob { get; set; }
        public ICollection<CheckinoutDev> CheckinoutDev { get; set; }
    }


}
