using System;
using System.Collections.Generic;
using System.Text;

namespace GhumFir.Domain.Entities
{
    public class Destination
    {
        public Guid Id { get; set; } = Guid.NewGuid(); //Globally Unique Identifier

        //Slug-URL friendly name of the destination
        public string Slug { get; set; } = string.Empty;

        public string Title { get; set; } = string.Empty;
        public string NepaliTitle { get; set; } = string.Empty;
        public string Region { get; set; } = string.Empty;
        public int ElevationMeters { get; set; }
        public int DurationDays { get; set; }
        public string Difficulty { get; set; } = "Moderate"; //Easy,Moderate, Hard
        public int GhumFirEcoScore { get; set; } //(0-100) Eco Score based on the environmental impact of the destination
        public decimal PriceNpr { get; set; } //Price in Nepalese Rupees
        public string ImageUrl { get; set; } = string.Empty;
        public string CultureTag { get; set; } = string.Empty;
        public string CulturalTip { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public double MapCoordX { get; set; } //Latitude
        public double MapCoordY { get; set; } //Longitude
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}