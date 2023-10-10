#nullable disable

namespace WebPage.Models
{
    public class Location
    {
        public string name { get; set; }
        public string imageUrl { get; set; }
        public List<OreLocation> OreLocations { get; set; }
    }

}
