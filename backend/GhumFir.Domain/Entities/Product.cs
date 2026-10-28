using System;
using System.Collections.Generic;
using System.Text;

namespace GhumFir.Domain.Entities
{
    public class Product
    {
        public Guid Id { get; set; } = Guid.NewGuid();

        // Slug for gear routing
        public string Slug { get; set; } = string.Empty;

        public string Name { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty; // Footwear, Camp Gear, Clothing, etc.

        // Dual Commerce Pricing: Rent per Day vs. Outright Purchase
        public decimal RentalRatePerDay { get; set; }
        public decimal SalePrice { get; set; }

        public string ImageUrl { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;

        public bool IsAvailableForRent { get; set; } = true;
        public bool IsAvailableForSale { get; set; } = true;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
