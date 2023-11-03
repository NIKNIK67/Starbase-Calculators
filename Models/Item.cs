#nullable disable

using System.Text.Json.Serialization;

namespace WebPage.Models
{
    public class Item
    {
        public ItemTypes type { get; set; }
        [JsonPropertyName("id")]
        public int Id { get; set; }
        [JsonPropertyName("name")]
        public string Name { get; set; }
        [JsonPropertyName("compositions")]
        public List<CompositionElement> Composition { get; set; } = new List<CompositionElement>();
    }
}
