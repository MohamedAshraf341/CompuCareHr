using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Site4Check.VM;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AttRepotController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public AttRepotController(IConfiguration configuration)
        {
            _configuration = configuration;

        }
        #region AttReport

        [HttpGet("{userid}/{reportid}")]
        public IActionResult GetAttReport(int? userid,DateTime? fdate, DateTime? tdate, 
            string femp , string temp , int? reportid,string filter,string filter2,string filter3)
        {
            var response = new List<AttReportVm>();

            try
            {

                var _connectionStrings = _configuration.GetConnectionString("SiteContext");
                string strQuery = "[dbo].[AttRepot]";
                SqlCommand command = new SqlCommand(strQuery);
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.AddWithValue("@Femp",femp );
                command.Parameters.AddWithValue("@Temp", temp);
                command.Parameters.AddWithValue("@Fdate", fdate);
                command.Parameters.AddWithValue("@Tdate", tdate);
                command.Parameters.AddWithValue("@userid", userid);
                command.Parameters.AddWithValue("@Reportid", reportid);
                command.Parameters.AddWithValue("@filter", filter);
                command.Parameters.AddWithValue("@filter2",filter2 );
                command.Parameters.AddWithValue("@filter3", filter3 );

                // command.Parameters.Add("@dev", SqlDbType.char).Value="1";
                SqlConnection connection = new SqlConnection(_connectionStrings);
                command.Connection = connection;
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                AttReportVm dto;
                List<AttReportVm> financialReport = new List<AttReportVm>();

                while (reader.Read())
                {
                    dto = new AttReportVm();

                    if (!string.IsNullOrEmpty(reader["Empcode"].ToString()))
                    {
                        dto.Empcode = reader["Empcode"].ToString();
                    }
                    if (!string.IsNullOrEmpty(reader["empname"].ToString()))
                    {
                        dto.empname = reader["empname"].ToString();
                    }
                    if (!string.IsNullOrEmpty(reader["vacation"].ToString()))
                    {
                        dto.vacation = reader["vacation"].ToString();
                    }
                    if (!string.IsNullOrEmpty(reader["absent"].ToString()))
                    {
                        dto.absent = int.Parse(reader["absent"].ToString());
                    }
                    if (!string.IsNullOrEmpty(reader["Day"].ToString()))
                    {
                        dto.Day = int.Parse(reader["Day"].ToString());
                    }
                    if (!string.IsNullOrEmpty(reader["earlyout"].ToString()))
                    {
                        dto.earlyout = int.Parse(reader["earlyout"].ToString());
                    }
                    if (!string.IsNullOrEmpty(reader["worktime"].ToString()))
                    {
                        dto.worktime = int.Parse(reader["worktime"].ToString());
                    }
                    if (!string.IsNullOrEmpty(reader["overtime"].ToString()))
                    {
                        dto.overtime = int.Parse(reader["overtime"].ToString());
                    }
                    if (!string.IsNullOrEmpty(reader["latein"].ToString()))
                    {
                        dto.latein = int.Parse(reader["latein"].ToString());
                    }
                    if (!string.IsNullOrEmpty(reader["note"].ToString()))
                    {
                        dto.note = reader["note"].ToString();
                    }
                    if (!string.IsNullOrEmpty(reader["permision"].ToString()))
                    {
                        dto.permision = reader["permision"].ToString();
                    }
                    if (!string.IsNullOrEmpty(reader["Vac1"].ToString()))
                    {
                        dto.Vac1 = reader["Vac1"].ToString();
                    }
                    if (!string.IsNullOrEmpty(reader["Vac2"].ToString()))
                    {
                        dto.Vac2 = reader["Vac2"].ToString();
                    }   
                    if (!string.IsNullOrEmpty(reader["Vac3"].ToString()))
                    {
                        dto.Vac3 = reader["Vac3"].ToString();
                    }
                    if (!string.IsNullOrEmpty(reader["VacName"].ToString()))
                    {
                        dto.VacName = reader["VacName"].ToString();
                    }
                    if (!string.IsNullOrEmpty(reader["Value"].ToString()))
                    {
                        dto.Value = reader["Value"].ToString();
                    }

                    if (!string.IsNullOrEmpty(reader["Date"].ToString()))
                    {
                        dto.Date = Convert.ToDateTime(reader["Date"].ToString());
                    }

                    if (!string.IsNullOrEmpty(reader["timein"].ToString()))
                    {
                        dto.timein = Convert.ToDateTime(reader["timein"].ToString());
                    }
                    if (!string.IsNullOrEmpty(reader["timeout"].ToString()))
                    {
                        dto.timeout = Convert.ToDateTime(reader["timeout"].ToString());
                    }
                    if (!string.IsNullOrEmpty(reader["FromDate"].ToString()))
                    {
                        dto.FromDate = Convert.ToDateTime(reader["FromDate"].ToString());
                    }
                    if (!string.IsNullOrEmpty(reader["ToDate"].ToString()))
                    {
                        dto.ToDate = Convert.ToDateTime(reader["ToDate"].ToString());
                    }

                    // reader return object ...in this case can't can't read array of bit 
                    // so convert object to array of byte then convert array to base64 

                    financialReport.Add(dto);
                }

                if (financialReport.Count != 0)
                {
                    response = financialReport;

                }
            }
            catch (Exception ex)
            {

            }

            return Ok(response);

        }
        #endregion

        #region SelectDate 

        [HttpGet("{select}")]
        public IActionResult GetSelectData(int select)
        {
            var response = new List<SpAttVm>();

            try
            {
                var _connectionStrings = _configuration.GetConnectionString("SiteContext");
                string strQuery = "[dbo].[SELECTDATA]";
                SqlCommand command = new SqlCommand(strQuery);
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.AddWithValue("@SELECT", select);
                // command.Parameters.Add("@dev", SqlDbType.char).Value="1";
                SqlConnection connection = new SqlConnection(_connectionStrings);
                command.Connection = connection;
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                SpAttVm dto;
                List<SpAttVm> financialReport = new List<SpAttVm>();

                while (reader.Read())
                {
                    dto = new SpAttVm();

                    if (!string.IsNullOrEmpty(reader["Id"].ToString()))
                    {
                        dto.Id = int.Parse(reader["Id"].ToString());
                    }
                    if (!string.IsNullOrEmpty(reader["Arname"].ToString()))
                    {
                        dto.Arname = reader["Arname"].ToString();
                    }
                    if (!string.IsNullOrEmpty(reader["Enname"].ToString()))
                    {
                        dto.Enname = reader["Enname"].ToString();
                    }
                   
                    financialReport.Add(dto);
                }

                if (financialReport.Count != 0)
                {
                    response = financialReport;

                }
            }
            catch (Exception ex)
            {
               var x= ex.Message;
            }

            return Ok(response);

        }



        #endregion
    }
}
