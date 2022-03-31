using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class UserFirebaseToken
    {
        public int Id { get; set; }
        public string UserToken { get; set; }
        public int? DeviceType { get; set; }
        public int? Language { get; set; }
        public int? EmpId { get; set; }
    }
}
