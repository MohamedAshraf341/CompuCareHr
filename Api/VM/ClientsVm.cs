using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.listVm
{
    //public class ClientslistVm
    //{
    //    public string Status { get; set; }
    //    public List<ClientData> data { get; set; }

    //}
    public class ClientData
    {
        public int Id { get; set; }
        public string ClientName { get; set; }
        public string Mobile1 { get; set; }
        public string Mobile2 { get; set; }
        public string ProjectName { get; set; }
        public string UnitNumber { get; set; }
        public decimal? UnitValue { get; set; }
        public DateTime? RegisterDate { get; set; }
        public int? EmpId { get; set; }

    }
}
