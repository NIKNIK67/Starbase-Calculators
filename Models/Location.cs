#nullable disable

using System.Text.Json.Serialization;

namespace WebPage.Models
{
    public class Location
    {
        public int Id { get; set; }
        [JsonPropertyName("name")]
        public string name { get; set; }
        [JsonPropertyName("imageUrl")]
        public string imageUrl { get; set; }
        [JsonPropertyName("oreLocations")]
        public List<OreLocation> OreLocations { get; set; } = new List<OreLocation>();
    }

}
