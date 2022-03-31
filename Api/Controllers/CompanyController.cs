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
    public class CompanyController : ControllerBase
    {
        private readonly HR_DirectionContext _context;

        public CompanyController(HR_DirectionContext context)
        {
            _context = context;
        }

        //[HttpPost]
        //public IActionResult PostNewCompany([FromBody] CompUrl newCompany)
        //{
        //    _context.CompUrl.Add(newCompany);
        //    _context.SaveChanges();
        //    return Ok("Added Succesfully");
        //}


        //Get Company Details by Company Code
        [HttpGet("{code}/{password}")]
        public CompanylistVm GetCompanyByCode([FromRoute]string code , [FromRoute] string password)
        {
           
            var getCompany = _context.CompUrl.Where(c => c.CompCode == code).FirstOrDefault();
          
             if (getCompany == null)
            {

                return new CompanylistVm { Status = "Invalid Company"};
            }


                if (getCompany.Password != password)
            {

                return new CompanylistVm { Status = "Invalid Password" };

            }
            else
            {
                var companylistVm = new CompanylistVm();
                companylistVm.Status = "Success";
                companylistVm.Id = getCompany.Id;
                companylistVm.CompCode = getCompany.CompCode;
                companylistVm.CompName = getCompany.CompName;
                companylistVm.Url = getCompany.Url;
                companylistVm.CompLogo = getCompany.CompLogo;
                return companylistVm;
            }
            
        }
       
        


    }
}