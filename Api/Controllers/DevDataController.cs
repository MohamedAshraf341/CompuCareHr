using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Site4Check.Models;
using Site4Check.listVm;
using Site4Check.VM;

namespace Site4Check.Controllers
{
    [Route("api/{lang}/[controller]")]
    [ApiController]
    public class DevDataController :  ControllerBase
    {
        private readonly HR_DirectionContext _context;

    public DevDataController(HR_DirectionContext context)
    {
        _context = context;
    }

    #region Get devdata 
    [HttpGet]
    public IActionResult GetAlldevdata()
    {
        var locList = _context.devdata.ToList();

        var ListlistVm = new List<devdata>();
        foreach (var item in locList)
        {
            var loclistVm = new devdata();
            loclistVm.Id = item.Id;
            loclistVm.Name = item.Name;



            ListlistVm.Add(loclistVm);
        }
        var location = new DevDatalistVm();
        location.status = "Success";
        location.data = ListlistVm;
        return Ok(location);

    }
    #endregion


}
}
