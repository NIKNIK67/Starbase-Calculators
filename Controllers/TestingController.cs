using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using WebPage.Models;
using WebPage.Models.ShipModuels;
#nullable disable
namespace WebPage.Controllers
{
#if DEBUG
    [Route("[controller]")]
    public class TestingController : ControllerBase
    {
        private EFContext db;
        public TestingController(EFContext eFContext)
        {
            this.db = eFContext;
        }
        /// <summary>
        /// Fills EFContext Db with data from DefaultItems/*.json
        /// </summary>
        /// <returns>0 if all is fine</returns>
        [HttpGet]
        [Route("/init")]
        public string InitDBData()
        {
            try
            {
                db.CapitalItems.AddRange(JsonSerializer.Deserialize<List<Item>>(System.IO.File.ReadAllText(@"DefaultItems\getCapitalItems.json")).Select(x =>
                {
                    x.Id = 0;
                    x.type = ItemTypes.CapitalItem;
                    return x;
                }));
                db.AlloyItems.AddRange(JsonSerializer.Deserialize<List<Item>>(System.IO.File.ReadAllText(@"DefaultItems\getAlloyItems.json")).Select(x =>
                {
                    x.Id = 0;
                    x.type = ItemTypes.AlloyItem;
                    return x;
                }));
                db.Thrusters.AddRange(JsonSerializer.Deserialize<List<Thruster>>(System.IO.File.ReadAllText(@"DefaultItems\getThrusters.json")));
                db.Weapons.AddRange(JsonSerializer.Deserialize<List<Weapon>>(System.IO.File.ReadAllText(@"DefaultItems\getWeapons.json")));
                db.Batteries.AddRange(JsonSerializer.Deserialize<List<Battery>>(System.IO.File.ReadAllText(@"DefaultItems\getBatteries.json")));
                db.FuelChambers.AddRange(JsonSerializer.Deserialize<List<FuelChamber>>(System.IO.File.ReadAllText(@"DefaultItems\getFuelChambers.json")));
                db.Generators.AddRange(JsonSerializer.Deserialize<List<Generator>>(System.IO.File.ReadAllText(@"DefaultItems\getGenerators.json")));
                db.PropelantTanks.AddRange(JsonSerializer.Deserialize<List<PropelantTank>>(System.IO.File.ReadAllText(@"DefaultItems\getPropelantTanks.json")));
                db.Radiators.AddRange(JsonSerializer.Deserialize<List<Radiator>>(System.IO.File.ReadAllText(@"DefaultItems\getRadiators.json")));
                db.Tools.AddRange(JsonSerializer.Deserialize<List<Tool>>(System.IO.File.ReadAllText(@"DefaultItems\getTools.json")));
                db.Locations.AddRange(JsonSerializer.Deserialize<List<Location>>(System.IO.File.ReadAllText(@"DefaultItems\getOreLocations.json")));
                db.MaterialNames.AddRange(JsonSerializer.Deserialize<List<MaterialObject>>(System.IO.File.ReadAllText(@"DefaultItems\getMaterialsNames.json")).Select(x =>
                {
                    x.Id = 0;
                    return x;
                }));
                db.SaveChanges();
                return "0";
            }
            catch
            {
                return "1";
            }
        }

    }
#endif
}