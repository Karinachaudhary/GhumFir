using GhumFir.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace GhumFir.Infrastructure.Data;

public static class DbInitializer
{
    public static async Task SeedAsync(GhumFirDbContext context)
    {
        // Automatically applies pending migrations / creates database
        await context.Database.MigrateAsync();

        // 1. Seed Destinations if empty
        if (!await context.Destinations.AnyAsync())
        {
            var destinations = new List<Destination>
            {
                new()
                {
                    Slug = "annapurna-circuit",
                    Title = "Annapurna Circuit Eco-Trek",
                    NepaliTitle = "अन्नपूर्ण पदयात्रा",
                    Region = "Annapurna",
                    ElevationMeters = 5416,
                    DurationDays = 12,
                    Difficulty = "Moderate",
                    GhumFirEcoScore = 96,
                    PriceNpr = 65000,
                    ImageUrl = "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
                    CultureTag = "Gurung & Tibetan Heritage",
                    CulturalTip = "Always spin prayer wheels clockwise with a peaceful mind.",
                    Description = "Cross the dramatic Thorong La Pass and experience the hospitality of Manang and Mustang villages.",
                    MapCoordX = 38,
                    MapCoordY = 44
                },
                new()
                {
                    Slug = "everest-base-camp",
                    Title = "Everest Footprint Trail",
                    NepaliTitle = "सगरमाथा आधार शिविर",
                    Region = "Khumbu",
                    ElevationMeters = 5364,
                    DurationDays = 14,
                    Difficulty = "Challenging",
                    GhumFirEcoScore = 92,
                    PriceNpr = 110000,
                    ImageUrl = "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=800",
                    CultureTag = "Sherpa Highland Culture",
                    CulturalTip = "Respect Tengboche Monastery by removing shoes before entering.",
                    Description = "Walk in the footsteps of legendary Sherpa mountaineers through Sagarmatha National Park.",
                    MapCoordX = 68,
                    MapCoordY = 48
                },
                new()
                {
                    Slug = "langtang-valley",
                    Title = "Langtang Sacred Valley Walk",
                    NepaliTitle = "लाङटाङ उपत्यका",
                    Region = "Langtang",
                    ElevationMeters = 4773,
                    DurationDays = 8,
                    Difficulty = "Moderate",
                    GhumFirEcoScore = 98,
                    PriceNpr = 45000,
                    ImageUrl = "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=800",
                    CultureTag = "Tamang Living Heritage",
                    CulturalTip = "Support local artisan cheese makers in Kyanjin Gompa.",
                    Description = "Explore the valley of glaciers and re-built Tamang villages with pristine rhododendron forests.",
                    MapCoordX = 52,
                    MapCoordY = 52
                }
            };

            await context.Destinations.AddRangeAsync(destinations);
            await context.SaveChangesAsync();
        }

        // 2. Seed Products if empty
        if (!await context.Products.AnyAsync())
        {
            var products = new List<Product>
            {
                new()
                {
                    Slug = "boots-trekking",
                    Name = "GhumFir Himalayan Waterproof Boots",
                    Category = "Footwear",
                    RentalRatePerDay = 450,
                    SalePrice = 14500,
                    ImageUrl = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600",
                    Description = "Vibram high-traction sole with waterproof Gore-Tex membrane. Essential for Annapurna & Everest passes."
                },
                new()
                {
                    Slug = "sleeping-bag-down",
                    Name = "Himalayan Down Sleeping Bag (-20°C)",
                    Category = "Camp Gear",
                    RentalRatePerDay = 500,
                    SalePrice = 18000,
                    ImageUrl = "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=600",
                    Description = "800-fill duck down insulation. Keeps you warm in sub-zero teahouse nights above 4,000m."
                },
                new()
                {
                    Slug = "poles-carbon",
                    Name = "Carbon Fiber Anti-Shock Poles",
                    Category = "Accessories",
                    RentalRatePerDay = 150,
                    SalePrice = 4500,
                    ImageUrl = "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=600",
                    Description = "Lightweight, foldable carbon fiber with ergonomic cork grips. Saves your knees on steep mountain descents."
                }
            };

            await context.Products.AddRangeAsync(products);
            await context.SaveChangesAsync();
        }
    }
}