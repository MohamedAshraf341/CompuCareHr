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
    [Route("api/{lang}/account")]
    [ApiController]
    public class EmployeeAccountController : ControllerBase
    {

        private readonly HR_DirectionContext _context;

        public EmployeeAccountController(HR_DirectionContext context)
        {
            _context = context;
        }

        #region Employee Account Statement

        [HttpGet("GetStatement/{id}")]
        public IActionResult GetAccountStatement([FromRoute] int id)
        {

            var getAllState = _context.AccountStatement.Where(a => a.EmpId == id).OrderBy(e => e.Date).ToList();
            if (getAllState.Count > 0)
            {
                var ListlistVm = new List<AccountStatementlistVm>();
                foreach (var getState in getAllState)
                {
                    var statelistVm = new AccountStatementlistVm();
                    statelistVm.Id = getState.Id;
                    statelistVm.Value = getState.Value;
                    statelistVm.ValueInfo = getState.ValueInfo;
                    statelistVm.Sign = getState.Sign;
                    statelistVm.AccountCode = getState.AccountCode;
                    statelistVm.Date = getState.Date;
                    statelistVm.Note = getState.Note;
                    statelistVm.EmpId = id;
                    statelistVm.RegisterDate = getState.RegisterDate;
                    ListlistVm.Add(statelistVm);
                }
                return Ok(ListlistVm);
            }
            else
            {
                return NotFound();
            }
        }

        #endregion



        #region Employee Account 


        [HttpPost("newAcc")]
        public IActionResult PostNewEmployeeAccount([FromBody] EmpAccount newAccount)
        {
            // var getEmpId = _context.Employees.Where(e => e.Id == newAccount.EmpId).FirstOrDefault();
            //if (getEmpId != null)
            //{
                //getEmpId.EmpAccount.Add(newAccount);
                _context.EmpAccount.Add(newAccount);
                _context.SaveChanges();
                return Ok("Added Successfully");
            //}
            //else
            //{
            //    return NotFound("Employee Id Not Found");
            //}

        }



        [HttpGet("GetAllAcc")]
        public IActionResult GetAllEmployeeAccount()
        {
            var getAllAccount = _context.EmpAccount.OrderBy(e => e.EmpId).ToList();
            var ListlistVm = new List<EmpAccountlistVm>();
            foreach (var getAcc in getAllAccount)
            {
                var AcclistVm = new EmpAccountlistVm();
                AcclistVm.Id = getAcc.Id;
                AcclistVm.AccountCode = getAcc.AccountCode;
                AcclistVm.AccountName = getAcc.AccountName;
                AcclistVm.EmpId = getAcc.EmpId;
                ListlistVm.Add(AcclistVm);
            }
            return Ok(ListlistVm);
        }



        [HttpGet("GetEmpAcc/{id}")]
        public IActionResult GetEmployeeAccountById([FromRoute] int id)
        {
            var getAllAccount = _context.EmpAccount.Where(a => a.EmpId == id).OrderBy(e => e.EmpId).ToList();
            if (getAllAccount.Count > 0)
            {
                var ListlistVm = new List<EmpAccountlistVm>();
                foreach (var getAcc in getAllAccount)
                {
                    var AcclistVm = new EmpAccountlistVm();
                    AcclistVm.Id = getAcc.Id;
                    AcclistVm.AccountCode = getAcc.AccountCode;
                    AcclistVm.AccountName = getAcc.AccountName;
                    AcclistVm.EmpId = getAcc.EmpId;
                    ListlistVm.Add(AcclistVm);
                }
                return Ok(ListlistVm);
            }
            else
            {
                return NotFound();
            }
        }


        #endregion



        #region Employee Cost 

        [HttpPost("newCost")]
        public IActionResult PostNewEmployeeCost([FromBody] EmpCost newCost)
        {
            //var getEmpId = _context.Employees.Where(e => e.Id == newCost.EmpId).FirstOrDefault();
            //if (getEmpId != null)
            //{
            //    getEmpId.EmpCost.Add(newCost);
                _context.EmpCost.Add(newCost);
                _context.SaveChanges();
                return Ok("Added Successfully");
            //}
            //else
            //{
            //    return NotFound("Employee Id Not Found");
            //}

        }



        [HttpGet("GetAllCost")]
        public IActionResult GetAllEmployeeCost()
        {
            var getAllCost = _context.EmpCost.OrderBy(e => e.EmpId).ToList();
          
                var ListlistVm = new List<EmpCostlistVm>();
                foreach (var getCost in getAllCost)
                {
                    var costlistVm = new EmpCostlistVm();
                    costlistVm.Id = getCost.Id;
                    costlistVm.CostCode = getCost.CostCode;
                    costlistVm.CostName = getCost.CostName;
                    costlistVm.EmpId = getCost.EmpId;
                    ListlistVm.Add(costlistVm);
                }
                return Ok(ListlistVm);
            }
        



        [HttpGet("GetEmpCost/{id}")]
        public IActionResult GetEmployeeCostById([FromRoute] int id)
        {
            var getAllCost = _context.EmpCost.Where(a => a.EmpId == id).OrderBy(e => e.EmpId).ToList();
            if (getAllCost.Count > 0)
            {
                var ListlistVm = new List<EmpCostlistVm>();
                foreach (var getCost in getAllCost)
                {
                    var costlistVm = new EmpCostlistVm();
                    costlistVm.Id = getCost.Id;
                    costlistVm.CostCode = getCost.CostCode;
                    costlistVm.CostName = getCost.CostName;
                    costlistVm.EmpId = getCost.EmpId;
                    ListlistVm.Add(costlistVm);
                }
                return Ok(ListlistVm);
            }
            else
            {
                return NotFound();
            }
        }

        #endregion



        #region Employee Account Transaction


        [HttpPost("newAccTrans")]
        public IActionResult PostNewEmployeeAccountTrans([FromBody] EmpAccTransaction newAccTrans)
        {
          //  var getEmpId = _context.Employees.Where(e => e.Id == newAccTrans.EmpId).FirstOrDefault();
            var getEmpCostId = _context.EmpCost.Where(e => e.Id == newAccTrans.EmpCostId).FirstOrDefault();
            var getEmpAccId = _context.EmpAccount.Where(e => e.Id == newAccTrans.EmpAccountId).FirstOrDefault();
            if (getEmpCostId!=null || getEmpAccId!=null)
            {
               // getEmpId.EmpAccTransaction.Add(newAccTrans);
                getEmpCostId.EmpAccTransaction.Add(newAccTrans);
                getEmpAccId.EmpAccTransaction.Add(newAccTrans);
                _context.EmpAccTransaction.Add(newAccTrans);
                _context.SaveChanges();
                return Ok("Added Successfully");
            }
            else
            {
                return NotFound("Employee Id Not Found");
            }

        }



        [HttpGet("GetAllAccTrans")]
        public IActionResult GetAllEmployeeAccTrans()
        {
            var getAllAccTran = _context.EmpAccTransaction.OrderBy(e => e.Date).ToList();
                var ListlistVm = new List<EmpAccTranslistVm>();
                foreach (var getState in getAllAccTran)
                {
                    var statelistVm = new EmpAccTranslistVm();
                    statelistVm.Id = getState.Id;
                    statelistVm.Value = getState.Value;
                    statelistVm.EmpAccountId = getState.EmpAccountId;
                    statelistVm.EmpCostId = getState.EmpCostId;
                    statelistVm.Kind = getState.Kind;
                    statelistVm.Date = getState.Date;
                    statelistVm.Note = getState.Note;
                    statelistVm.EmpId = getState.Id;
                    statelistVm.RegisterDate = getState.RegisterDate;
                    ListlistVm.Add(statelistVm);
                }
                return Ok(ListlistVm);
            
        }



        [HttpGet("GetAccTrans/{id}")]
        public IActionResult GetAccountTrans([FromRoute] int id)
        {

            var getAllAccTran = _context.EmpAccTransaction.Where(a => a.EmpId == id).OrderBy(e => e.Date).ToList();
            if (getAllAccTran.Count > 0)
            {
                var ListlistVm = new List<EmpAccTranslistVm>();
                foreach (var getState in getAllAccTran)
                {
                    var statelistVm = new EmpAccTranslistVm();
                    statelistVm.Id = getState.Id;
                    statelistVm.Value = getState.Value;
                    statelistVm.EmpAccountId = getState.EmpAccountId;
                    statelistVm.EmpCostId = getState.EmpCostId;
                    statelistVm.Kind = getState.Kind;
                    statelistVm.Date = getState.Date;
                    statelistVm.Note = getState.Note;
                    statelistVm.EmpId = id;
                    statelistVm.RegisterDate = getState.RegisterDate;
                    ListlistVm.Add(statelistVm);
                }
                return Ok(ListlistVm);
            }
            else
            {
                return NotFound();
            }
        }



        #endregion



    }
}