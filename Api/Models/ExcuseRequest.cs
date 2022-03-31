using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class ExcuseRequest
    {
        public int Id { get; set; }
        public int? EmployeeId { get; set; }
        public int? RequestStatus { get; set; }
        public DateTime? Date { get; set; }
        public TimeSpan? ExFrom { get; set; }
        public TimeSpan? ExTo { get; set; }
        public DateTime? Startdate { get; set; }
        public DateTime? EndDate { get; set; }
        public int? ManagerId { get; set; }
        public int? GmanagerId { get; set; }
        public bool? ManagerApprove { get; set; }
        public bool? GmanagerApprove { get; set; }
        public string RejectReson { get; set; }
    }
}
