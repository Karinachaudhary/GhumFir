using System;
using System.Collections.Generic;
using System.Text;
using GhumFir.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace GhumFir.Infrastructure.Data
{
    public class GhumFirDbContext : DbContext
    {
        public GhumFirDbContext(DbContextOptions<GhumFirDbContext> options) : base(options)
        {
        }
            //Tables in the database
            public DbSet<Destination> Destinations => Set<Destination>();
        public DbSet<Product> Products => Set<Product>();
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Precision configuration for currency
            modelBuilder.Entity<Destination>()
                .Property(d => d.PriceNpr)
                .HasPrecision(18, 2);
            modelBuilder.Entity<Product>()
                .Property(p => p.RentalRatePerDay)
                .HasPrecision(18, 2);
            modelBuilder.Entity<Product>()
                .Property(p => p.SalePrice)
                .HasPrecision(18, 2);
            // Ensure slug is unique for fast lookups
            modelBuilder.Entity<Destination>()
                .HasIndex(d => d.Slug)
                .IsUnique();
            modelBuilder.Entity<Product>()
                .HasIndex(p => p.Slug)
                .IsUnique();
        }
    
    }
}
