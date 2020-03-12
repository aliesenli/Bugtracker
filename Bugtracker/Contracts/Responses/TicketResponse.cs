﻿using Bugtracker.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bugtracker.Contracts.Responses
{
    public class TicketResponse
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string UserId { get; set; }

        public string CreatedAt { get; set; }

        public string UpdatedAt { get; set; }

        public Priority Priority { get; set; }
    }
}
