using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Site4Check.Models;
using Site4Check.VM;

namespace Site4Check.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AttTablesController : ControllerBase
    {
        private readonly HR_DirectionContext _context;

        /// <summary>
        /// case 0 : AttBranch ;
        /// case 1 : Attbus
        /// case 2 : Attcomp
        /// case 3 : Attcost
        /// case 4 : AttDepartment
        /// case 5 : Attjob
        /// case 6 : Attjoblevel
        /// case 7 : Attsection
        /// case 8 : AttShift
        /// case 9 : AttpublicHoliday
        /// </summary>
        /// <param name="context"></param>
        public AttTablesController(HR_DirectionContext context)
        {
            _context = context;
        }


        [HttpGet("t")]
        public string ss()
        {
            return "welcome";
        }
        // GET: api/AttTables
        [HttpGet]
        public IActionResult GetAllAtt(int flag)
        {
            try
            {
                var listcompVm = new List<AttcompVm>();


                var listVm = new List<AttVm>();
                switch (flag)
                {
                    case 0:
                        var attListBranch = _context.AttBranch.ToList();
                        foreach (var item in attListBranch)
                        {
                            var att = new AttVm();
                            att.Id = item.Id;
                            att.Arname = item.Arname;
                            att.Enname = item.Enname;
                            listVm.Add(att);
                        }
                        break;
                    case 1:
                        var attListBus = _context.Attbus.ToList();
                        foreach (var item in attListBus)
                        {
                            var att = new AttVm();
                            att.Id = item.Id;
                            att.Arname = item.Arname;
                            att.Enname = item.Enname;
                            listVm.Add(att);
                        }
                        break;
                    //case 2:
                    //    var attListComp = _context.Attcomp.ToList();
                    //    foreach (var item in attListComp)
                    //    {
                    //        var att = new AttcompVm();
                    //        att.Id = item.Id;
                    //        att.Arname = item.Arname;
                    //        att.Enname = item.Enname;
                    //        att.City= item.City;
                    //        att.Owner= item.Owner;
                    //        att.Insno= item.Insno;
                    //        att.Add= item.Add;
                    //        att.Twon= item.Twon;
                    //        att.Law= item.Law;
                    //        att.office = item.office;
                    //        att.Person= item.Person;
                    //        att.Date= item.Date;
                    //        att.PerJob= item.PerJob;
                    //        att.IsActive= item.IsActive;

                    //        listcompVm.Add(att);
                    //    }
                    //    break;
                    case 3:
                        var attListCost = _context.Attcost.ToList();
                        foreach (var item in attListCost)
                        {
                            var att = new AttVm();
                            att.Id = item.Id;
                            att.Arname = item.Arname;
                            att.Enname = item.Enname;
                            listVm.Add(att);
                        }
                        break;
                    case 4:
                        var attListDept = _context.AttDepartment.ToList();
                        foreach (var item in attListDept)
                        {
                            var att = new AttVm();
                            att.Id = item.Id;
                            att.Arname = item.Arname;
                            att.Enname = item.Enname;
                            listVm.Add(att);
                        }
                        break;
                    case 5:
                        var attListJob = _context.Attjob.ToList();
                        foreach (var item in attListJob)
                        {
                            var att = new AttVm();
                            att.Id = item.Id;
                            att.Arname = item.Arname;
                            att.Enname = item.Enname;
                            listVm.Add(att);
                        }
                        break;
                    case 6:
                        var attListJobLevel = _context.Attjoblevel.ToList();
                        foreach (var item in attListJobLevel)
                        {
                            var att = new AttVm();
                            att.Id = item.Id;
                            att.Arname = item.Arname;
                            att.Enname = item.Enname;
                            listVm.Add(att);
                        }
                        break;
                    case 7:
                        var attListSection = _context.Attsection.ToList();
                        foreach (var item in attListSection)
                        {
                            var att = new AttVm();
                            att.Id = item.Id;
                            att.Arname = item.Arname;
                            att.Enname = item.Enname;
                            listVm.Add(att);
                        }
                        break;
                    case 8:
                        var attListShift = _context.AttShift.ToList();
                        foreach (var item in attListShift)
                        {
                            var att = new AttVm();
                            att.Id = item.Id;
                            att.Arname = item.Arname;
                            att.Enname = item.Enname;
                            listVm.Add(att);
                        }
                        break;
                    case 9:
                        var attListHoliday = _context.AttpublicHoliday.ToList();
                        foreach (var item in attListHoliday)
                        {
                            var att = new AttVm();
                            att.Id = item.Id;
                            att.Arname = item.Arname;
                            att.Enname = item.Enname;
                            att.Fdate = item.Fdate;
                            att.Tdate = item.Tdate;
                            listVm.Add(att);
                        }
                        break;
                    default:
                        break;
                }



                return Ok(listVm);
            }
            catch (Exception ex)
            {
                return BadRequest(ModelState);
            }
        }

        // GET: api/AttTables/5
        [HttpGet("{id}")]
        public IActionResult GetAttTableById(int flag,[FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var attVm = new AttVm();
            switch (flag)
            {
                case 0:
                    var attBranch = _context.AttBranch.Find(id);

                    if (attBranch == null)
                    {
                        return NotFound();
                    }

                    attVm.Id = attBranch.Id ;
                    attVm.Arname = attBranch.Arname ;
                    attVm.Enname = attBranch.Enname ;
                    break;
                case 1:
                    var attBus = _context.Attbus.Find(id);

                    if (attBus == null)
                    {
                        return NotFound();
                    }
                    attVm.Id = attBus.Id ;
                    attVm.Arname = attBus.Arname ;
                    attVm.Enname = attBus.Enname ;
                    break;
                case 2:
                    var attComp = _context.Attcomp.Find(id);

                    if (attComp == null)
                    {
                        return NotFound();
                    }
                     attVm.Id = attComp.Id ;
                     attVm.Arname = attComp.Arname ;
                     attVm.Enname = attComp.Enname ;
                    break;
                case 3:
                    var attCost = _context.Attcost.Find(id);

                    if (attCost == null)
                    {
                        return NotFound();
                    }

                     attVm.Id = attCost.Id;
                     attVm.Arname = attCost.Arname;
                     attVm.Enname = attCost.Enname;
                    break;
                case 4:
                    var attDept = _context.AttDepartment.Find(id);

                    if (attDept == null)
                    {
                        return NotFound();
                    }
                     attVm.Id = attDept.Id ;
                     attVm.Arname = attDept.Arname ;
                     attVm.Enname = attDept.Enname ;
                    break;
                case 5:
                    var attjob = _context.Attjob.Find(id);

                    if (attjob == null)
                    {
                        return NotFound();
                    }
                     attVm.Id = attjob.Id ;
                     attVm.Arname = attjob.Arname ;
                     attVm.Enname = attjob.Enname ;
                    break;
                case 6:
                    var attjoblevel = _context.Attjoblevel.Find(id);

                    if (attjoblevel == null)
                    {
                        return NotFound();
                    }

                    attVm.Id = attjoblevel.Id ;
                    attVm.Arname = attjoblevel.Arname ;
                    attVm.Enname = attjoblevel.Enname ;
                    break;
                case 7:
                    var attsection = _context.Attsection.Find(id);

                    if (attsection == null)
                    {
                        return NotFound();
                    }
                     attVm.Id  = attsection.Id ;
                     attVm.Arname = attsection.Arname ;
                     attVm.Enname = attsection.Enname ;
                    break;
                case 8:
                    var attShift = _context.AttShift.Find(id);

                    if (attShift == null)
                    {
                        return NotFound();
                    }
                     attVm.Id = attShift.Id ;
                     attVm.Arname = attShift.Arname ;
                     attVm.Enname = attShift.Enname ;
                    break;
                case 9:
                    var attHoliday = _context.AttpublicHoliday.Find(id);

                    if (attHoliday == null)
                    {
                        return NotFound();
                    }
                   attVm.Id = attHoliday.Id ;
                   attVm.Arname = attHoliday.Arname ;
                   attVm.Enname = attHoliday.Enname ;
                   attVm.Fdate  = attHoliday.Fdate ;
                   attVm.Tdate  = attHoliday.Tdate ;

                    break;
                default:
                break;
            }
           
            return Ok(attVm);
        }

        // PUT: api/AttTables/5
        [HttpPut("{id}")]
        public IActionResult PutAtt(int flag, [FromRoute] int id, [FromBody] AttVm attVm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            switch (flag)
            {
                case 0:
                    var attBranch = _context.AttBranch.Find(id);
                    if (id != attBranch.Id)
                    {
                        return BadRequest();
                    }

                    attBranch.Arname = attVm.Arname;
                    attBranch.Enname = attVm.Enname;

                    _context.Entry(attBranch).State = EntityState.Modified;
                    break;
                case 1:
                    var attBus = _context.Attbus.Find(id);
                    if (id != attBus.Id)
                    {
                        return BadRequest();
                    }

                    attBus.Arname = attVm.Arname;
                    attBus.Enname = attVm.Enname;

                    _context.Entry(attBus).State = EntityState.Modified;
                    break;
                case 2:
                    var attComp = _context.Attcomp.Find(id);
                    if (id != attComp.Id)
                    {
                        return BadRequest();
                    }

                    attComp.Arname = attVm.Arname;
                    attComp.Enname = attVm.Enname;

                    _context.Entry(attComp).State = EntityState.Modified;
                    break;
                case 3:
                    var attCost = _context.Attcost.Find(id);
                    if (id != attCost.Id)
                    {
                        return BadRequest();
                    }

                    attCost.Arname = attVm.Arname;
                    attCost.Enname = attVm.Enname;

                    _context.Entry(attCost).State = EntityState.Modified;
                    break;
                case 4:
                    var attDept = _context.AttDepartment.Find(id);
                    if (id != attDept.Id)
                    {
                        return BadRequest();
                    }

                    attDept.Arname = attVm.Arname;
                    attDept.Enname = attVm.Enname;

                    _context.Entry(attDept).State = EntityState.Modified;
                    break;
                case 5:
                    var attjob = _context.Attjob.Find(id);
                    if (id != attjob.Id)
                    {
                        return BadRequest();
                    }

                    attjob.Arname = attVm.Arname;
                    attjob.Enname = attVm.Enname;

                    _context.Entry(attjob).State = EntityState.Modified;
                    break;
                case 6:
                    var attjoblevel = _context.Attjoblevel.Find(id);
                    if (id != attjoblevel.Id)
                    {
                        return BadRequest();
                    }

                    attjoblevel.Arname = attVm.Arname;
                    attjoblevel.Enname = attVm.Enname;

                    _context.Entry(attjoblevel).State = EntityState.Modified;
                    break;
                case 7:
                    var attsection = _context.Attsection.Find(id);
                    if (id != attsection.Id)
                    {
                        return BadRequest();
                    }

                    attsection.Arname = attVm.Arname;
                    attsection.Enname = attVm.Enname;

                    _context.Entry(attsection).State = EntityState.Modified;
                    break;
                case 8:
                    var attShift = _context.AttShift.Find(id);
                    if (id != attShift.Id)
                    {
                        return BadRequest();
                    }

                    attShift.Arname = attVm.Arname;
                    attShift.Enname = attVm.Enname;

                    _context.Entry(attShift).State = EntityState.Modified;
                    break;
                case 9:
                    var attHoliday = _context.AttpublicHoliday.Find(id);
                    if (id != attHoliday.Id)
                    {
                        return BadRequest();
                    }

                    attHoliday.Arname = attVm.Arname;
                    attHoliday.Enname = attVm.Enname;
                    attHoliday.Fdate = attVm.Fdate;
                    attHoliday.Tdate = attVm.Tdate;

                    _context.Entry(attHoliday).State = EntityState.Modified;
                    break;
                default:
                    break;
            }
            try
            {
                _context.SaveChanges();
                return Ok(200);

            }
            catch (DbUpdateConcurrencyException)
            {

                throw;

            }

            return NoContent();
        }
        [HttpPost("AddCompany")]

        //public IActionResult AddCompany( [FromBody] AttcompVm attcompVm)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //            var attComp = new Attcomp();
        //            attComp.Arname = attcompVm.Arname;
        //            attComp.Enname = attcompVm.Enname;
        //            attComp.City = attcompVm.City;
        //            attComp.Owner = attcompVm.Owner;
        //            attComp.Insno = attcompVm.Insno;
        //            attComp.Add= attcompVm.Add;
        //            attComp.Twon= attcompVm.Twon;
        //            attComp.Law= attcompVm.Law;
        //            attComp.office = attcompVm.office;
        //            attComp.Person = attcompVm.Person;
        //            attComp.Date = attcompVm.Date;
        //            attComp.PerJob = attcompVm.PerJob;
        //            attComp.IsActive = attcompVm.IsActive;


            
        //    try
        //    {
        //        _context.SaveChanges();
        //        return Ok(attcompVm);

        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }
        //}


        // POST: api/AttTables
        [HttpPost]
        public IActionResult PostAttBranch(int flag ,[FromBody] AttVm attVm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            switch (flag)
            {
                case 0:
                    var attBranch = new AttBranch();
                    attBranch.Arname = attVm.Arname;
                    attBranch.Enname = attVm.Enname;
                    _context.AttBranch.Add(attBranch);

                    break;
                case 1:
                    var attBus = new Attbus();
                    attBus.Arname = attVm.Arname;
                    attBus.Enname = attVm.Enname;
                    _context.Attbus.Add(attBus);

                    break;
                //case 2:
                //    var attComp = new Attcomp();
                //    attComp.Arname = attVm.Arname;
                //    attComp.Enname = attVm.Enname;
                //    _context.Attcomp.Add(attComp);

                //    break;
                case 3:
                    var attCost = new Attcost();
                    attCost.Arname = attVm.Arname;
                    attCost.Enname = attVm.Enname;
                    _context.Attcost.Add(attCost);

                    break;
                case 4:
                    var attDept = new AttDepartment();
                    attDept.Arname = attVm.Arname;
                    attDept.Enname = attVm.Enname;
                    _context.AttDepartment.Add(attDept);

                    break;
                case 5:
                    var attjob = new Attjob();
                    attjob.Arname = attVm.Arname;
                    attjob.Enname = attVm.Enname;
                    _context.Attjob.Add(attjob);

                    break;
                case 6:
                    var attjoblevel = new Attjoblevel();
                    attjoblevel.Arname = attVm.Arname;
                    attjoblevel.Enname = attVm.Enname;
                    _context.Attjoblevel.Add(attjoblevel);

                    break;
                case 7:
                    var attsection = new Attsection();
                    attsection.Arname = attVm.Arname;
                    attsection.Enname = attVm.Enname;
                    _context.Attsection.Add(attsection);

                    break;
                case 8:
                    var attShift = new AttShift();
                    attShift.Arname = attVm.Arname;
                    attShift.Enname = attVm.Enname;
                    _context.AttShift.Add(attShift);

                    break;
                case 9:
                    var attpublicHoliday = new AttpublicHoliday();
                    attpublicHoliday.Arname = attVm.Arname;
                    attpublicHoliday.Enname = attVm.Enname;
                    attpublicHoliday.Fdate = attVm.Fdate;
                    attpublicHoliday.Tdate = attVm.Tdate;
                    _context.AttpublicHoliday.Add(attpublicHoliday);

                    break;
                default:
                    break;
            }
            try
            {
                _context.SaveChanges();
                return Ok();

            }
            catch (Exception)
            {

                throw;
            }

        }

        // DELETE: api/AttTables/5
        [HttpDelete("{id}")]
        public IActionResult DeleteAtt(int flag,[FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            switch (flag)
            {
                case 0:
                    var attBranch = _context.AttBranch.Find(id);
                    if (id != attBranch.Id)
                    {
                        return BadRequest();
                    }

                    _context.AttBranch.Remove(attBranch);
                    break;
                case 1:
                    var attBus = _context.Attbus.Find(id);
                    if (id != attBus.Id)
                    {
                        return BadRequest();
                    }

                    _context.Attbus.Remove(attBus);

                    break;
                case 2:
                    var attComp = _context.Attcomp.Find(id);
                    if (id != attComp.Id)
                    {
                        return BadRequest();
                    }
                    _context.Attcomp.Remove(attComp);

                    break;
                case 3:
                    var attCost = _context.Attcost.Find(id);
                    if (id != attCost.Id)
                    {
                        return BadRequest();
                    }


                    _context.Attcost.Remove(attCost);
                    break;
                case 4:
                    var attDept = _context.AttDepartment.Find(id);
                    if (id != attDept.Id)
                    {
                        return BadRequest();
                    }

                    _context.AttDepartment.Remove(attDept);
                    break;
                case 5:
                    var attjob = _context.Attjob.Find(id);
                    if (id != attjob.Id)
                    {
                        return BadRequest();
                    }

                    _context.Attjob.Remove(attjob);
                    break;
                case 6:
                    var attjoblevel = _context.Attjoblevel.Find(id);
                    if (id != attjoblevel.Id)
                    {
                        return BadRequest();
                    }


                    _context.Attjoblevel.Remove(attjoblevel);
                    break;
                case 7:
                    var attsection = _context.Attsection.Find(id);
                    if (id != attsection.Id)
                    {
                        return BadRequest();
                    }

                    _context.Attsection.Remove(attsection);
                    break;
                case 8:
                    var attShift = _context.AttShift.Find(id);
                    if (id != attShift.Id)
                    {
                        return BadRequest();
                    }

                    _context.AttShift.Remove(attShift);
                    break;
                case 9:
                    var attHoliday = _context.AttpublicHoliday.Find(id);
                    if (id != attHoliday.Id)
                    {
                        return BadRequest();
                    }

                    _context.AttpublicHoliday.Remove(attHoliday);
                    break;
                default:
                    break;
            }
            try
            {
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception)
            {

                throw;
            }
        }

      
    }
}