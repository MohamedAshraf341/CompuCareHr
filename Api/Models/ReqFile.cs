using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class ReqFile
    {
        public int Id { get; set; }
        public string FileVname { get; set; }
        public string FileSname { get; set; }
        public int? Reqid { get; set; }
    }
}
