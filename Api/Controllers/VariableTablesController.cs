using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Site4Check.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.Controllers
{
   // [Route("api/{lang}/[controller]")]
    [ApiController]
    public class VariableTablesController : Controller
    {
        private readonly HR_DirectionContext _context;

        public VariableTablesController(HR_DirectionContext context)
        {
            _context = context;
        }

        // GET: api/Checkinouts/5
        [HttpGet("{id}")]
        public IActionResult GetCheckinout([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var checkinout = _context.Checkinout.Find(id);

            if (checkinout == null)
            {
                return NotFound();
            }

            return Ok(checkinout);
        }
       
        [HttpPost("api/InsertNewSp")]
        public IActionResult InsertNewTableSp([FromBody]Sp_VariableTBlistVm input)
        {
            try
            {
                string StoredProc = "exec sp_MasterInser " +
                   "@MyTable = " + input.TableName + "," +
                   "@NameAr = '" + input.NameAr + "'," +
                   "@NameEn= '" + input.NameEn + "'," +
                   "@Code= '" + input.Code + "'," +
                   "@StopNote= '" + input.StopNote + "'," +
                   "@IsStop= '" + input.IsStop + "'," +
                   "@ProfileId= '" + input.ProfileId + "'";
                int count = _context.Database.ExecuteSqlCommand(StoredProc);
                return Ok(count);
            }
            catch (Exception ex)
            {

                throw;
            }
           
        }


        //[HttpGet("api/GetNewSp")]
        //public IActionResult InsertNewTableSp([FromBody] Sp_VariableTBlistVm input)

    }
}
