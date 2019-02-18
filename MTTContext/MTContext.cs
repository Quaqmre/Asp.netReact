using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using JetBrains.Annotations;
using MainTrain.MTTContext;

namespace MainTrain.MTTContext
{
    public class MTContext : IdentityDbContext<MTUser>
    {
        public MTContext(DbContextOptions options) : base(options)
        {
        }
    }
}
