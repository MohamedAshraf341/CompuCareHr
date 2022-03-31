using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class Menus
    {
        public int MenuId { get; set; }
        public int? ParentId { get; set; }
        public string FormName { get; set; }
        public string Caption { get; set; }
    }
}
