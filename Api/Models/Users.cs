using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class Users
    {
        public Users()
        {
            NotificationData = new HashSet<NotificationData>();
        }

        public int Id { get; set; }
        public string UserName { get; set; }
        public string FullUserName { get; set; }
        public string Password { get; set; }
        public int? Departid { get; set; }
        public int? Pertype { get; set; }
        public int? DateType { get; set; }
        public int? Empid { get; set; }
        public bool? Isdpboss { get; set; }
        public bool? Isboss { get; set; }

        public ICollection<NotificationData> NotificationData { get; set; }
    }
}
