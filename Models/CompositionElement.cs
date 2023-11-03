#nullable disable

using System.Text.Json.Serialization;

namespace WebPage.Models
{
    public class CompositionElement
    {
        public int Id { get; set; }
        [JsonPropertyName("material")]
        public Material Key { get; set; }
        [JsonPropertyName("amount")]
        public int Value { get; set; }
        public Item RootItem { get; set; }
    }

}
