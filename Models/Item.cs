#nullable disable

namespace WebPage.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Dictionary<Material, int> Composition = new Dictionary<Material, int>();
    }

}
