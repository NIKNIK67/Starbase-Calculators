#nullable disable

namespace WebPage.Models
{
    public class OreLocation
    {
        public string name { get; set; }
        public LocationType LocationType { get; set; }
        public List<OreLocationElement> Ores { get; set; }
    }

}
