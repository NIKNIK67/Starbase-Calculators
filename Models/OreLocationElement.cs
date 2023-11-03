#nullable disable

using System.Text.Json.Serialization;

namespace WebPage.Models
{
    public class OreLocationElement
    {
        public int Id { get; set; }
        [JsonPropertyName("rarity")]
        public OreRarity Rarity { get; set; }
        [JsonPropertyName("material")]
        public Material Material { get; set; }
        public OreLocation RootOreLocation { get; set; } = new OreLocation();
    }

}
