#nullable disable

using System.Text.Json.Serialization;

namespace WebPage.Models
{
    public class OreLocation
    {
        public int Id { get; set; }
        public Location RootLocation { get; set; } = new Location();
        [JsonPropertyName("name")]
        public string name { get; set; }
        [JsonPropertyName("locationType")]
        public LocationType LocationType { get; set; }
        [JsonPropertyName("ores")]
        public List<OreLocationElement> Ores { get; set; } = new List<OreLocationElement>();
    }

}
