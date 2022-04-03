﻿using System;
using System.Collections.Generic;

namespace Site4Check.Models
{
    public partial class Job1
    {
        public Job1()
        {
            JobParameter = new HashSet<JobParameter>();
            State = new HashSet<State>();
        }

        public long Id { get; set; }
        public long? StateId { get; set; }
        public string StateName { get; set; }
        public string InvocationData { get; set; }
        public string Arguments { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? ExpireAt { get; set; }

        public ICollection<JobParameter> JobParameter { get; set; }
        public ICollection<State> State { get; set; }
    }
}