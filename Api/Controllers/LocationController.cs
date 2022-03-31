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
    public class LocationController : ControllerBase
    {
        private readonly HR_DirectionContext _context;

        public LocationController(HR_DirectionContext context)
        {
            _context = context;
        }

        #region Get Location 
        [HttpGet]
        public IActionResult GetAllLocation() {
            var locList = _context.Location.ToList();
            var ListlistVm = new List<LocationData>();
            foreach (var item in locList)
            {
                var loclistVm = new LocationData();
                loclistVm.Id = item.Id;
                loclistVm.Name = item.Name;
                loclistVm.Latitude = item.Latitude;
                loclistVm.Longitude = item.Longitude;
                ListlistVm.Add(loclistVm);
            }
            var location = new LocationlistVm();
            location.status = "Success";
            location.data = ListlistVm;
            return Ok (location);

}
        #endregion

       
    }

    
}