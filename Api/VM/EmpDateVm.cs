using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.VM
{
    public class EmpDateVm
    {
        public int Id { get; set; }
        public string EmpCode { get; set; }
        public string EmpName { get; set; }
        public string FullCode { get; set; }
        public int? Comp { get; set; }
        public int? Div { get; set; }
        public int? Dep { get; set; }
        public int? Sec { get; set; }
        public int? Job { get; set; }
        public int? Cost { get; set; }
        public int? Level { get; set; }
        public int? Gender { get; set; }
        public int? MaritalStatus { get; set; }
        public string Add { get; set; }
        public string Insurance { get; set; }
        public string CardId { get; set; }
        public string Hiring { get; set; }
        public string Birth { get; set; }
        public bool? Is5 { get; set; }
        public bool? Is5work { get; set; }
        public bool? Bus { get; set; }
        public bool? Isover { get; set; }
        public bool? Isshift { get; set; }
        public bool? Stop { get; set; }
        public string BusWay { get; set; }
        public bool? Ishour { get; set; }
        public bool? Fz { get; set; }
        public int? ShiftType { get; set; }
        public IFormFile Image { get; set; }
        public string Password { get; set; }
        public int? Military { get; set; }
        public int? Religion { get; set; }
        public string Note { get; set; }
        public string Quli { get; set; }
        public string Tel { get; set; }
        public decimal? Hourv { get; set; }

        public decimal? B_ent { get; set; }
        public decimal? B_tab { get; set; }
        public decimal? B_tam { get; set; }
        public decimal? B_malbs { get; set; }
        public decimal? b_food { get; set; }
        public decimal? Elwa { get; set; }
        public decimal? Nafa { get; set; }
        public decimal? Medical { get; set; }
        public decimal? Basic { get; set; }
        public decimal? Variable { get; set; }

        public decimal? Basic1 { get; set; }
        public decimal? Variable1 { get; set; }
    }
}