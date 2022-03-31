using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.listVm
{
    public class Sp_SopremalistVm
    {
        public int Id { get; set; }
        public int EmpId { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public string Type { get; set; }
        public string StatusCode { get; set; }
        public string StatusName { get; set; }
        public string Note { get; set; }
        public DateTime Tnme { get; set; }
        public IFormFile Image { get; set; }
        public int ? Flag { get; set; }
       

    }
}
