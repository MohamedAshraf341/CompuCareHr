using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class EmployeeProfile
    {
        public EmployeeProfile()
        {
            Company = new HashSet<Company>();
            DepartmentNew = new HashSet<DepartmentNew>();
            Division = new HashSet<Division>();
            Job = new HashSet<Job>();
            Level = new HashSet<Level>();
            Section = new HashSet<Section>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public DateTime? Birthday { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }

        public ICollection<Company> Company { get; set; }
        public ICollection<DepartmentNew> DepartmentNew { get; set; }
        public ICollection<Division> Division { get; set; }
        public ICollection<Job> Job { get; set; }
        public ICollection<Level> Level { get; set; }
        public ICollection<Section> Section { get; set; }
    }
}
