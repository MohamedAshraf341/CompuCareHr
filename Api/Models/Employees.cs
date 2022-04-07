using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class Employees
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string CardNo { get; set; }
        public string Mobile { get; set; }
        public int? Departid { get; set; }
        public int? Shiftsid { get; set; }
        public string Dmobashra { get; set; }
        public string Wazifa { get; set; }
        public string Mrtba { get; set; }
        public DateTime? DateMobashra { get; set; }
        public double? Salary { get; set; }
        public double? BadalNaql { get; set; }
        public double? Deduction { get; set; }
        public string StartHdate { get; set; }
        public DateTime? StartDate { get; set; }
        public string EndHdate { get; set; }
        public DateTime? EndDate { get; set; }
        public int? Naid { get; set; }
        public int? Mosyertypeid { get; set; }
        public double? BadalMa3esha { get; set; }
        public double? Badalother { get; set; }
        public double? Tamenat { get; set; }
        public string AccountNo { get; set; }
        public int? Bankid { get; set; }
        public double? StartP { get; set; }
        public double? Monthly { get; set; }
        public double? Yearly { get; set; }
        public string StartHdateP { get; set; }
        public DateTime? StartDateP { get; set; }
        public double? Badaldifferent { get; set; }
        public bool? OutDate { get; set; }
        public bool? Active { get; set; }
        public bool? Audit { get; set; }
        public string Message { get; set; }
        public string Image { get; set; }
        public bool? ImageRequired { get; set; }
        public ICollection<Transaction> Transaction { get; set; }

    }
}
