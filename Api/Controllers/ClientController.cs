using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Site4Check.Models;
using Site4Check.listVm;

namespace Site4Check.Controllers
{
    [Route("api/{lang}/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private readonly HR_DirectionContext _context;

        public ClientController(HR_DirectionContext context)
        {
            _context = context;
        }


        [HttpPost("NewClient")]
        public IActionResult PostNewClient([FromBody] Clients newClient) {
            newClient.RegisterDate = DateTime.Now;
           // var getUserId = _context.Employees.Where(e => e.Id == newClient.EmpId).FirstOrDefault();
           // getUserId.Clients.Add(newClient);
            _context.Clients.Add(newClient);
            _context.SaveChanges();
            return Ok("Successfully Add");

        }


        //[HttpGet("GetClient/{id}")]
        //public ClientslistVm GetClient([FromRoute] int id)
        //{
        //    var getClient = _context.Clients.Where(e => e.EmpId == id).OrderBy(a=>a.UnitValue).ToList();
        //    var ListlistVm = new List<ClientData>();
        //    if (getClient.Count>0)
        //    {
        //        foreach(var getClientById in getClient)
        //        {
        //            var clientlistVm = new ClientData();
        //            clientlistVm.ClientName = getClientById.ClientName;
        //            clientlistVm.Mobile1 = getClientById.Mobile1;
        //            clientlistVm.Mobile2 = getClientById.Mobile2;
        //            clientlistVm.ProjectName = getClientById.ProjectName;
        //            clientlistVm.UnitNumber = getClientById.UnitNumber;
        //            clientlistVm.UnitValue = getClientById.UnitValue;
        //            clientlistVm.RegisterDate = getClientById.RegisterDate;
        //            clientlistVm.EmpId = getClientById.EmpId;
        //            ListlistVm.Add(clientlistVm);
        //        }

        //        return new ClientslistVm() {Status="Seccess" , data=ListlistVm};
        //    }
        //    else
        //    {
        //        return new ClientslistVm() { Status = "Failed", data = ListlistVm };
        //    }

        //}



        [HttpGet("GetClient/{id}")]
        public IActionResult GetClient([FromRoute] int id)
        {
            var getClient = _context.Clients.Where(e => e.EmpId == id).OrderBy(a => a.UnitValue).ToList();
            var ListlistVm = new List<ClientData>();
            if (getClient.Count > 0)
            {
                foreach (var getClientById in getClient)
                {
                    var clientlistVm = new ClientData();
                    clientlistVm.ClientName = getClientById.ClientName;
                    clientlistVm.Mobile1 = getClientById.Mobile1;
                    clientlistVm.Mobile2 = getClientById.Mobile2;
                    clientlistVm.ProjectName = getClientById.ProjectName;
                    clientlistVm.UnitNumber = getClientById.UnitNumber;
                    clientlistVm.UnitValue = getClientById.UnitValue;
                    clientlistVm.RegisterDate = getClientById.RegisterDate;
                    clientlistVm.EmpId = getClientById.EmpId;
                    ListlistVm.Add(clientlistVm);
                }

            }
            return Ok(ListlistVm);

        }
    }
}