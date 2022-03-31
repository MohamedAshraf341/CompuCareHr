using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.listVm
{
    public class LocationlistVm
    {
        public string status { get; set; }
        public List<LocationData> data { get; set; }

    }

    public class DevDatalistVm
    {
        public string status { get; set; }
        public List<devdata> data { get; set; }

    }

}
    public class LocationData
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal? Latitude { get; set; }
        public decimal? Longitude { get; set; }
    }

    public class devdata
    {
        public string Id { get; set; }
        public string Name { get; set; }

    }

