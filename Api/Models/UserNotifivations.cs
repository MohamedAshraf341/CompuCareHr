using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class UserNotifivations
    {
        public int Id { get; set; }
        public int? EmpId { get; set; }
        public int? MsgId { get; set; }

        public NotificationMessage Msg { get; set; }
    }
}
