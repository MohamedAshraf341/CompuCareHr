using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Site4Check.Models;
using Site4Check.listVm;

namespace Site4Check.Controllers
{
    [Route("api/{lang}/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly HR_DirectionContext _context;

        public EmployeeController(HR_DirectionContext context)
        {
            _context = context;
        }


        #region GetInfo
        
        [HttpGet("EmpInfo/{id}")]
        public IActionResult GetEmployeeInfo([FromRoute] int id)
        {
            var Emp = _context.Employees.Find(id);

            var emplistVm = new EmpInfolistVm();
            emplistVm.Id = id;
            emplistVm.Name = Emp.Name;
            emplistVm.Message = Emp.Message;
            emplistVm.ImageRequired = Emp.ImageRequired;
            emplistVm.Active = Emp.Active;
            emplistVm.Audit = Emp.Audit;
            emplistVm.Image = Emp.Image;
            return Ok(emplistVm);


        }

        #endregion

        #region Get Employee Salary

        //Add New Employee Salary 
        [HttpPost("EmpSalary")]
        public IActionResult PostNewEmpSalary([FromBody] EmpSalary newEmpSalary)
        {
            _context.EmpSalary.Add(newEmpSalary);
            _context.SaveChanges();
            return Ok("Added Succesfully");
        }

        //Get Employee Salary By Employee Code 
        [HttpGet("EmpSalary/{code}")]
        public IActionResult GetByEmployeeCode([FromRoute] int code)
        {
            var getByEmployeeCode = _context.EmpSalary.Where(e => e.EmpId == code).OrderByDescending(c => c.ValCode).ToList();
            var listOfEmployeelistVm = new List<EmpSalarylistVm>();
            foreach (var e in getByEmployeeCode)
            {
                var employeelistVm = new EmpSalarylistVm();
                employeelistVm.EmpId = code;
                employeelistVm.EmpName = e.EmpName;
                employeelistVm.Monthid = e.Monthid;
                employeelistVm.Yearid = e.Yearid;
                employeelistVm.Val = e.Val;
                employeelistVm.ValCode = e.ValCode;
                employeelistVm.ValName = e.ValName;
                listOfEmployeelistVm.Add(employeelistVm);
            }
            return Ok(listOfEmployeelistVm);

        }

        //Get Employee Salary By Year Id
        [HttpGet("EmpSalary/{code}/{year}")]
        public IActionResult GetByYearId([FromRoute] int code, [FromRoute] int year)
        {
            var getByYearId = _context.EmpSalary.Where(e => e.Yearid == year && e.EmpId==code).OrderByDescending(c => c.ValCode).ToList();
            var listOfEmployeelistVm = new List<EmpSalarylistVm>();
            foreach (var e in getByYearId)
            {
                var employeelistVm = new EmpSalarylistVm();
                employeelistVm.EmpId = code;
                employeelistVm.EmpName = e.EmpName;
                employeelistVm.Monthid = e.Monthid;
                employeelistVm.Yearid = year;
                employeelistVm.Val = e.Val;
                employeelistVm.ValCode = e.ValCode;
                employeelistVm.ValName = e.ValName;
                listOfEmployeelistVm.Add(employeelistVm);
            }
            return Ok(listOfEmployeelistVm);
        }

        //Get Employee Salary By Month Id
        [HttpGet("EmpSalary/{code}/{month}")]
        public IActionResult GetByMonthId([FromRoute] int code, [FromRoute] int month)
        {
            var getByMonthId = _context.EmpSalary.Where(e => e.Monthid == month && e.EmpId == code).OrderByDescending(c => c.ValCode).ToList();
            var listOfEmployeelistVm = new List<EmpSalarylistVm>();
            foreach (var e in getByMonthId)
            {
                var employeelistVm = new EmpSalarylistVm();
                employeelistVm.EmpId = code;
                employeelistVm.EmpName = e.EmpName;
                employeelistVm.Monthid = month;
                employeelistVm.Yearid = e.Yearid;
                employeelistVm.Val = e.Val;
                employeelistVm.ValCode = e.ValCode;
                employeelistVm.ValName = e.ValName;
                listOfEmployeelistVm.Add(employeelistVm);
            }
            return Ok(listOfEmployeelistVm);

        }


        //Get Employee Salary By EmpId & Month & Year
        [HttpGet("EmpSalary/{id}/{month}/{year}")]
        public IActionResult GetByEmpSalary([FromRoute] int id, [FromRoute] int month, [FromRoute] int year)
        {
            var getByEmpId = _context.EmpSalary.Where(e => e.Monthid == month && e.Yearid == year && e.EmpId == id).OrderBy(c => c.ValCode).ToList();

            if (getByEmpId.Count > 0)
            {
                var listOfEmployeelistVm = new List<EmpSalarylistVm>();
                foreach (var e in getByEmpId)
                {
                    var employeelistVm = new EmpSalarylistVm();
                    employeelistVm.EmpId = id;
                    employeelistVm.EmpName = e.EmpName;
                    employeelistVm.Monthid = month;
                    employeelistVm.Yearid = e.Yearid;
                    employeelistVm.Val = e.Val;
                    employeelistVm.ValCode = e.ValCode;
                    employeelistVm.ValName = e.ValName;
                    listOfEmployeelistVm.Add(employeelistVm);
                }
                return Ok(listOfEmployeelistVm);
            }
            else
            {
                return NotFound();
            }

        }

        #endregion

        #region Get Employee Log

        //Add New Employee Log
        [HttpPost("EmpLog")]
        public IActionResult PostNewEmpLog([FromBody] EmpLog newEmpLog)
        {
            _context.EmpLog.Add(newEmpLog);
            _context.SaveChanges();
            return Ok("Added Succesfully");
        }

        //Get Employee Log By Employee Code 
        [HttpGet("EmpLog/{code}")]
        public IActionResult GetLogByEmployeeCode([FromRoute] int code)
        {
            var getByEmployeeCode = _context.EmpLog.Where(e => e.EmpId == code).OrderByDescending(c => c.Date).ToList();
            var listOfEmployeelistVm = new List<EmpLoglistVm>();
            foreach (var e in getByEmployeeCode)
            {
                var employeelistVm = new EmpLoglistVm();
                employeelistVm.EmpId = code;
                employeelistVm.EmpName = e.EmpName;
                employeelistVm.Monthid = e.Monthid;
                employeelistVm.Yearid = e.Yearid;
                employeelistVm.Date = e.Date;
                employeelistVm.DayName = e.DayName;
                employeelistVm.Islatein = e.Islatein;
                employeelistVm.Islateout = e.Islateout;
                employeelistVm.Timein = e.Timein;
                employeelistVm.Timeout = e.Timeout;
                employeelistVm.Note = e.Note;
                employeelistVm.Overtime = e.Overtime;
                employeelistVm.LateOut = e.LateOut;
                employeelistVm.Latein = e.Latein;
                employeelistVm.IsOvertime = e.IsOvertime;

                listOfEmployeelistVm.Add(employeelistVm);
            }
            return Ok(listOfEmployeelistVm);

        }

        //Get Employee Log By Year Id
        [HttpGet("EmpLogYear/{code}/{year}")]
        public IActionResult GetLogByYearId([FromRoute] int code, [FromRoute] int year)
        {

            var getByEmployeeCode = _context.EmpLog.Where(e => e.Yearid == year && e.EmpId == code).OrderByDescending(c => c.Date).ToList();
            var listOfEmployeelistVm = new List<EmpLoglistVm>();
            foreach (var e in getByEmployeeCode)
            {
                var employeelistVm = new EmpLoglistVm();
                employeelistVm.EmpId = code;
                employeelistVm.EmpName = e.EmpName;
                employeelistVm.Monthid = e.Monthid;
                employeelistVm.Yearid = year;
                employeelistVm.Date = e.Date;
                employeelistVm.DayName = e.DayName;
                employeelistVm.Islatein = e.Islatein;
                employeelistVm.Islateout = e.Islateout;
                employeelistVm.Timein = e.Timein;
                employeelistVm.Timeout = e.Timeout;
                employeelistVm.Note = e.Note;
                employeelistVm.Overtime = e.Overtime;
                employeelistVm.LateOut = e.LateOut;
                employeelistVm.Latein = e.Latein;
                employeelistVm.IsOvertime = e.IsOvertime;

                listOfEmployeelistVm.Add(employeelistVm);
            }
            return Ok(listOfEmployeelistVm);

        }

        //Get Employee Log By Month Id
        [HttpGet("EmpLog/{code}/{month}")]
        public IActionResult GetLogByMonthId([FromRoute] int code, [FromRoute] int month)
        {
            var getByEmployeeCode = _context.EmpLog.Where(e => e.Monthid == month && e.EmpId == code).OrderByDescending(c => c.Date).ToList();
            var listOfEmployeelistVm = new List<EmpLoglistVm>();
            foreach (var e in getByEmployeeCode)
            {
                var employeelistVm = new EmpLoglistVm();
                employeelistVm.EmpId = code;
                employeelistVm.EmpName = e.EmpName;
                employeelistVm.Monthid = month;
                employeelistVm.Yearid = e.Yearid;
                employeelistVm.Date = e.Date;
                employeelistVm.DayName = e.DayName;
                employeelistVm.Islatein = e.Islatein;
                employeelistVm.Islateout = e.Islateout;
                employeelistVm.Timein = e.Timein;
                employeelistVm.Timeout = e.Timeout;
                employeelistVm.Note = e.Note;
                employeelistVm.Overtime = e.Overtime;
                employeelistVm.LateOut = e.LateOut;
                employeelistVm.Latein = e.Latein;
                employeelistVm.IsOvertime = e.IsOvertime;

                listOfEmployeelistVm.Add(employeelistVm);
            }
            return Ok(listOfEmployeelistVm);

        }

        //Get Employee Log By Month Id
        [HttpGet("EmpLog/{id}/{month}/{year}")]
        public IActionResult GetLogByMonthId([FromRoute] int id, [FromRoute] int month, [FromRoute] int year)
        {
            var getByEmployeeCode = _context.EmpLog.Where(a => a.Monthid == month && a.Yearid == year && a.EmpId==id).OrderBy(c => c.Date).ToList();
            if (getByEmployeeCode.Count > 0)
            {
                var listOfEmployeelistVm = new List<EmpLoglistVm>();
                foreach (var e in getByEmployeeCode)
                {
                    var employeelistVm = new EmpLoglistVm();
                    employeelistVm.EmpId = id;
                    employeelistVm.EmpName = e.EmpName;
                    employeelistVm.Monthid = month;
                    employeelistVm.Yearid = e.Yearid;
                    employeelistVm.Date = e.Date;
                    employeelistVm.DayName = e.DayName;
                    employeelistVm.Islatein = e.Islatein;
                    employeelistVm.Islateout = e.Islateout;
                    employeelistVm.Timein = e.Timein;
                    employeelistVm.Timeout = e.Timeout;
                    employeelistVm.Note = e.Note;
                    employeelistVm.Overtime = e.Overtime;
                    employeelistVm.LateOut = e.LateOut;
                    employeelistVm.Latein = e.Latein;
                    employeelistVm.IsOvertime = e.IsOvertime;

                    listOfEmployeelistVm.Add(employeelistVm);
                }
                return Ok(listOfEmployeelistVm);
            }
            else
            {
                return NotFound();
            }

        }


        #endregion

        #region Employee Boss


        //Get All Employee Belong to Boss
        //[HttpGet("Boss/{id}")]
        //public IActionResult GetBoss([FromRoute] int id)
        //{
        //    var s = "";
        //    var getEmpBoss = _context.EmpBoss.Find(id);
        //    if (getEmpBoss == null)
        //    {
        //        return NotFound();
        //    }
        //    var getEmployee = _context.Employees.Where(c => c.Id == getEmpBoss.Empid).FirstOrDefault();

        //    var getBoss1 = _context.Employees.Where(c => c.Id == getEmpBoss.Boss1).FirstOrDefault();
        //    var getBoss2 = _context.Employees.Where(c => c.Id == getEmpBoss.Boss2).FirstOrDefault();
        //    var getBoss3 = _context.Employees.Where(c => c.Id == getEmpBoss.Boss3).FirstOrDefault();
        //    if (getEmployee.Id != 0 || getBoss1.Id != 0 || getBoss2.Id != 0 || getBoss2.Id != 0)
        //    {
        //        var bosslistVm = new EmpBosslistVm();
        //        bosslistVm.Id = getEmpBoss.Id;
        //        bosslistVm.EmployeeName = getEmployee.Name;
        //        bosslistVm.Relation = getEmpBoss.Relation;
        //        if (getBoss1.Id != 0)
        //        {
        //            bosslistVm.Boss1Name = getBoss1.Name;

        //        }
        //        else if (getBoss2.Id != 0)
        //        {
        //            bosslistVm.Boss2Name = getBoss2.Name;
        //        }
        //        else if (getBoss2.Id != 0)
        //        {
        //            bosslistVm.Boss3Name = getBoss3.Name;
        //        }


        //        return Ok(bosslistVm);
        //    }
        //    else
        //    {
        //        return NotFound();
        //    }
        //}


        //[HttpGet("EmpBosses/{id}")]
        //public IActionResult GetBossById([FromRoute] int id)
        //{
        //    var getEmployee = _context.EmpBoss.Where(c => c.Boss1 == id || c.Boss2 == id || c.Boss3 == id).ToList();
        //    var listlistVm = new List<EmpBossDatalistVm>();
        //    foreach (var s in getEmployee)
        //    {
        //        var getEmpData = _context.Employees.Where(e => e.Id == s.Empid).FirstOrDefault();
        //        var getBoss = _context.Employees.Where(e => e.Id == id).FirstOrDefault();
        //        var x = new EmpBossDatalistVm();

        //        x.EmployeeName = getEmpData.Name;
        //        x.BossName = getBoss.Name;
        //        listlistVm.Add(x);
        //    }

        //    var getAllEmp = _context.EmpBoss.Where(e => e.Empid == getEmployee.Id).ToList();
        //    var getAllEmpBoss = _context.Employees.Where(e => e.Id == getEmployee.Id).ToList();
        //    var listlistVm = new List<EmpBosslistVm>();
        //    foreach (var em in getAllEmpBoss)
        //    {
        //        var bosslistVm = new EmpBosslistVm();
        //        bosslistVm.Id = em.Id;
        //        bosslistVm.EmployeeName = em.Name;
        //        bosslistVm.Relation = getEmployee.Relation;
        //        listlistVm.Add(bosslistVm);
        //    }
        //    return Ok(listlistVm);

        //}


        //[HttpGet("EmpBoss/{id}")]
        //public IActionResult GetAllEmBossById([FromRoute] int id)
        //{
        //    var getEmployee = _context.EmpBoss.Where(c => c.Boss1 == id || c.Boss2 == id || c.Boss3 == id).ToList();
        //    var listlistVm = new List<EmpBossDatalistVm>();
        //    foreach (var s in getEmployee)
        //    {
        //        var getEmpData = _context.Employees.Where(e => e.Id == s.Empid).FirstOrDefault();
        //        var item = _context.Transaction.Where(t => t.EmpCode == s.Empid && t.TransacrtionCode==3 ).FirstOrDefault();

        //        if(item!= null)
        //        {
        //            var day = DateTime.ParseExact(item.Date.Substring(0, 8), "yyyyMMdd", null);
        //            var x = new EmpBossDatalistVm
        //            {
        //                EmpId = getEmpData.Id,
        //                EmployeeName = getEmpData.Name,
        //                From = item.From,
        //                To = item.To,
        //                Status = _context.TransactionStatus.Where(t => t.Id == item.TransacrtionCode).Select(tt => tt.Name).FirstOrDefault(),
        //                StatusCode = item.TransacrtionCode,
        //                TranDate = item.Date.Substring(4, 4),
        //                Day = day.DayOfWeek.ToString(),
        //                Type = _context.Leaves.Where(l => l.Id == item.LeaveId).Select(ll => ll.Name).FirstOrDefault()
        //                    ,
        //                TypeCode = item.LeaveId
        //                    ,
        //                Id = item.Id
        //            };


        //            listlistVm.Add(x);
        //        }

        //    }


        //    return Ok(listlistVm);

        //}



        [HttpGet("EmpBoss/{id}")]
        public IActionResult GetAllEmBossById([FromRoute] int id)
        {
            var getEmployee = _context.EmpBoss.Where(c => c.Boss1 == id || c.Boss2 == id || c.Boss3 == id).ToList();
            var listlistVm = new List<EmpBossDatalistVm>();
            foreach (var s in getEmployee)
            {
                var item = _context.Transaction.Where(t => t.EmpCode == s.Empid && t.TransacrtionCode == 3).ToList();

                if (item.Count > 0)
                {
                    var getEmpData = _context.Employees.Where(e => e.Id == s.Empid).FirstOrDefault();

                    foreach (var it in item)
                    {
                        var day = DateTime.ParseExact(it.Date.Substring(0, 8), "yyyyMMdd", null);

                        var x = new EmpBossDatalistVm();

                        x.EmpId = getEmpData.Id;
                        x.EmployeeName = getEmpData.Name;
                        x.From = it.From;
                        x.To = it.To;
                        x.Status = _context.TransactionStatus.Where(t => t.Id == it.TransacrtionCode).Select(tt => tt.Name).FirstOrDefault();
                        x.StatusCode = it.TransacrtionCode;
                        x.TranDate = it.Date.Substring(4, 4);
                        x.Day = day.DayOfWeek.ToString();
                        x.Type = _context.Leaves.Where(l => l.Id == it.LeaveId).Select(ll => ll.Name).FirstOrDefault();                 
                        x.TypeCode = it.LeaveId;
                        x.Id = it.Id;

                    listlistVm.Add(x);
                }           
                }

            }
            return Ok(listlistVm);

        }

        [HttpGet("EmpBoss2/{id}")]
        public IActionResult GetAllEmBossById2([FromRoute] int id)
        {
            var getEmployee2 = _context.EmpBoss.Where(c => c.Boss1 == id || c.Boss2 == id || c.Boss3 == id).ToList();
            var listlistVm2 = new List<EmpBossDatalistVm>();

            if (getEmployee2.Count > 0)
            {
                foreach (var s in getEmployee2)
                {
                    var item = _context.EmpData.Where(t => t.EmpCode.ToString().Trim() == s.Empid.ToString().Trim()).ToList();

                    foreach (var Emp2 in item)
                    {
                        var x = new EmpBossDatalistVm();
                        x.EmpId =Int32.Parse( Emp2.EmpCode);
                        x.EmployeeName = Emp2.EmpName;

                        listlistVm2.Add(x);
                    }
                }
                
            }
            return Ok(listlistVm2);
            /*
            var getEmployee = _context.EmpBoss.Where(c => c.Boss1 == id || c.Boss2 == id || c.Boss3 == id).ToList();
            var listlistVm = new List<EmpBossDatalistVm>();
            foreach (var s in getEmployee)
            {
                var item = _context.Transaction.Where(t => t.EmpCode == s.Empid && t.TransacrtionCode == 3).ToList();

                if (item.Count > 0)
                {
                    var getEmpData = _context.Employees.Where(e => e.Id == s.Empid).FirstOrDefault();

                    foreach (var it in item)
                    {
                        var day = DateTime.ParseExact(it.Date.Substring(0, 8), "yyyyMMdd", null);

                        var x = new EmpBossDatalistVm();

                        x.EmpId = getEmpData.Id;
                        x.EmployeeName = getEmpData.Name;
                        x.From = it.From;
                        x.To = it.To;
                        x.Status = _context.TransactionStatus.Where(t => t.Id == it.TransacrtionCode).Select(tt => tt.Name).FirstOrDefault();
                        x.StatusCode = it.TransacrtionCode;
                        x.TranDate = it.Date.Substring(4, 4);
                        x.Day = day.DayOfWeek.ToString();
                        x.Type = _context.Leaves.Where(l => l.Id == it.LeaveId).Select(ll => ll.Name).FirstOrDefault();
                        x.TypeCode = it.LeaveId;
                        x.Id = it.Id;

                        listlistVm.Add(x);
                    }
                }

            }
            return Ok(listlistVm);
            */

        }

        #endregion

        #region Transaction
        [HttpPut("UpdateTran/{BossNo}/{id}")]
        public IActionResult PutTransactionStatus([FromRoute] int id, [FromBody] TransData tran , [FromRoute] int bossNo)
        {
            var item = _context.Transaction.Where(t => t.Id == id).FirstOrDefault();

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != item.Id)
            {
                return BadRequest();
            }
          
                item.TransacrtionCode = tran.StatusCode;
                item.Reason = tran.Reason;
                item.BossNo = bossNo;
                _context.Entry(item).State = EntityState.Modified;
                _context.SaveChanges();


            return NoContent();
        }


        #endregion

        #region Employee Status

        [HttpGet("status/{EmpId}")]
        public IActionResult GetEmpStatus([FromRoute] int EmpId)
        {
            var getEmpStatus = _context.EmpStatus.Where(a => a.EmpId == EmpId).FirstOrDefault();
            if(getEmpStatus!= null)
            {
                var statuslistVm = new EmpStatuslistVm();
                statuslistVm.Id = getEmpStatus.Id;
                statuslistVm.EmpId = EmpId;
                statuslistVm.Active = getEmpStatus.Active;
                statuslistVm.Audit = getEmpStatus.Audit;
                statuslistVm.Message = getEmpStatus.Message;
                return Ok(statuslistVm);
            }
            else
            {
                return NotFound("This Employee Code Not Found");
            }
           
        }

        #endregion


    }
}
