#nullable disable

using System.Text.Json.Serialization;

namespace WebPage.Models
{
    public class MaterialObject
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }
        [JsonPropertyName("name")]
        public string Name { get; set; }
        public MaterialObject(int id, string name)
        {
            Id = id;
            Name = name;
        }
        /// <summary>
        /// Do not use without need, use DB instead
        /// </summary>
        public static List<MaterialObject> BaseMaterialsNames = new List<MaterialObject>()
        {
           new MaterialObject((int)Material.AegisiumOre,"Aegisium Ore"),
           new MaterialObject((int)Material.AjatiteOre,"Ajatite Ore"),
           new MaterialObject((int)Material.AliumAlloy,"Alium Alloy"),
           new MaterialObject((int)Material.ArkaniumOre,"Arkanium Ore"),
           new MaterialObject((int)Material.BaltiumAlloy,"Baltium Alloy"),
           new MaterialObject((int)Material.BastiumOre,"Bastium Ore"),
           new MaterialObject((int)Material.BastoniumAlloy,"Bastonium Alloy"),
           new MaterialObject((int)Material.CharodiumOre,"Charodium Ore"),
           new MaterialObject((int)Material.CoraziumOre,"Corazium Ore"),
           new MaterialObject((int)Material.CoriumAlloy,"Corium Alloy"),
           new MaterialObject((int)Material.DaltiumOre,"Daltium Ore"),
           new MaterialObject((int)Material.ExoriumOre,"Exorium Ore"),
           new MaterialObject((int)Material.ExutiumAlloy,"Exutium Alloy"),
           new MaterialObject((int)Material.Glass,"Glass"),
           new MaterialObject((int)Material.HaderiteCrystal,"Haderite Crystal"),
           new MaterialObject((int)Material.Ice,"Ice"),
           new MaterialObject((int)Material.IlmatriumOre,"Ilmatrium Ore"),
           new MaterialObject((int)Material.KarniteCrystal,"Karnite Crystal"),
           new MaterialObject((int)Material.KutoniumOre,"Kutonium Ore"),
           new MaterialObject((int)Material.LukiumOre,"Lukium Ore"),
           new MaterialObject((int)Material.MerkeriumOre,"Merkerium Ore"),
           new MaterialObject((int)Material.NafliteOre,"Naflite Ore"),
           new MaterialObject((int)Material.NhurgiteCrystal,"Nhurgite Crystal"),
           new MaterialObject((int)Material.OninumOre,"Oninum Ore"),
           new MaterialObject((int)Material.SurtriteCrystal,"Surtrite Crystal"),
           new MaterialObject((int)Material.Talkite,"Talkite"),
           new MaterialObject((int)Material.TalliumAlloy,"Tallium Alloy"),
           new MaterialObject((int)Material.TargiumOre,"Targium Ore"),
           new MaterialObject((int)Material.TengiumOre,"Tengium Ore"),
           new MaterialObject((int)Material.UkoniumOre,"Ukonium Ore"),
           new MaterialObject((int)Material.ValkiteOre,"Valkite Ore"),
           new MaterialObject((int)Material.VokariumOre,"Vokarium Ore"),
           new MaterialObject((int)Material.XhaliumOre,"Xhalium Ore"),
           new MaterialObject((int)Material.YmriumOre,"Ymrium Ore"),
        };
    }
}
