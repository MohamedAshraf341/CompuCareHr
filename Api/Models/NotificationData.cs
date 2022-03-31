using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class NotificationData
    {
        public int Id { get; set; }
        public int? Empid { get; set; }
        public string Note { get; set; }
        public bool? Isread { get; set; }
        public bool? Isdelivery { get; set; }
        public DateTime? Createdate { get; set; }
        public int? Userid { get; set; }

        public Users User { get; set; }
    }
}
