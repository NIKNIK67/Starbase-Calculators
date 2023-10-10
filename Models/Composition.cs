namespace WebPage.Models
{
    public class Composition
    {
        public Composition(Material material, int amount)
        {
            Material = material;
            Amount = amount;
        }
        public Material Material { get; set; }
        public int Amount { get; set; }
    }
}
