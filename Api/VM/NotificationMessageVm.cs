using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Site4Check.listVm
{
    public class NotificationMessagelistVm
    {
        public string title { get; set; }
        public string body { get; set; }
        public DateTime? NotifyTime { get; set; }

    }
    public class NotifyTokenlistVm
    {
        public List<string> registration_ids { get; set; }
        public NotificationMessagelistVm data { get; set; }
        public string priority { get; set; }
        //public NotificationMessagelistVm notification
        //{ get; set; }
    }

    public class NotifylistVm
    {
        public string registration_id { get; set; }
        public NotificationMessagelistVm data { get; set; }
        public string priority { get; set; }
        //public NotificationMessagelistVm notification
        //{ get; set; }
    }
}
