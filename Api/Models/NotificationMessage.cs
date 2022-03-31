using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class NotificationMessage
    {
        public NotificationMessage()
        {
            UserNotifivations = new HashSet<UserNotifivations>();
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public int? Type { get; set; }

        public ICollection<UserNotifivations> UserNotifivations { get; set; }
    }
}
