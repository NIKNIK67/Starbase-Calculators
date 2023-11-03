#nullable disable

using System.Text.Json.Serialization;

namespace WebPage.Models
{
    public class ShipModule
    {
        public virtual int Id { get; set; }
        [JsonPropertyName("name")]
        public virtual string Name { get; set; }
    }
}
