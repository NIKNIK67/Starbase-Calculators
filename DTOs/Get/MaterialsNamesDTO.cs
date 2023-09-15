namespace Project1.DTOs.Get
{
    public class MaterialsNamesDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public MaterialsNamesDTO(int id, string name)
        {
            this.Name = name;
            this.Id = id;
        }
    }
}
