using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class CompUrl
    {
        public int Id { get; set; }
        public string CompCode { get; set; }
        public string CompName { get; set; }
        public string Url { get; set; }
        public string CompLogo { get; set; }
        public string Password { get; set; }
    }
}
