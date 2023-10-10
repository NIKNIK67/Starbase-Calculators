using WebPage.Models;

namespace WebPage.DTOs.Get
{
    public class ItemOutputDTO
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public List<Composition> Compositions { get; set; }
        public ItemOutputDTO(int id, string name, Dictionary<Material, int> compositions)
        {
            this.Id = id;
            this.Name = name;
            this.Compositions = new List<Composition>();
            foreach (var composition in compositions)
                this.Compositions.Add(new Composition(composition.Key, composition.Value));
        }
    }
}
