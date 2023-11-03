using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebPage.Models;
using WebPage.Models.ShipModuels;
#nullable disable
namespace WebPage.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MainController : ControllerBase
    {
        private EFContext db;
        public MainController(EFContext eFContext)
        {
            this.db = eFContext;
        }
        [HttpGet]
        [Route("/GetCapitalItems")]
        public List<Item> GetCapitalItems()
        {
            return db.CapitalItems
                .Include(x => x.Composition)
                .Where(x => x.type == ItemTypes.CapitalItem)
                .ToList();
        }
        [HttpGet]
        [Route("/GetMaterialsNames")]
        public List<MaterialObject> GetMaterialsNames()
        {
            return db.MaterialNames.ToList();
        }
        [HttpGet]
        [Route("/GetAlloyItems")]
        public List<Item> GetAlloyItems()
        {
            return db.AlloyItems
                .Include(x => x.Composition)
                .Where(x => x.type == ItemTypes.AlloyItem)
                .ToList();
        }
        [HttpGet]
        [Route("/GetThrusters")]
        public List<Thruster> GetThrusters()
        {
            return db.Thrusters.ToList();
        }
        [HttpGet]
        [Route("/GetWeapons")]
        public List<Weapon> GetWeapons()
        {
            return db.Weapons.ToList();
        }
        [HttpGet]
        [Route("/GetBatteries")]
        public List<Battery> GetBatteries()
        {
            return db.Batteries.ToList();
        }
        [HttpGet]
        [Route("/GetFuelChambers")]
        public List<FuelChamber> GetFuelChambers()
        {
            return db.FuelChambers.ToList();
        }
        [HttpGet]
        [Route("/GetGenerators")]
        public List<Generator> GetGenerators()
        {
            return db.Generators.ToList();
        }
        [HttpGet]
        [Route("/GetPropelantTanks")]
        public List<PropelantTank> GetPropelantTanks()
        {
            return db.PropelantTanks.ToList();
        }
        [HttpGet]
        [Route("/GetRadiators")]
        public List<Radiator> GetRadiators()
        {
            return db.Radiators.ToList();
        }
        [HttpGet]
        [Route("/GetTools")]
        public List<Tool> GetTools()
        {
            return db.Tools.ToList();
        }
        [HttpGet]
        [Route("/GetOreLocations")]
        public List<Location> GetOreLocations()
        {
            return db.Locations.Include(x => x.OreLocations).ThenInclude(s => s.Ores).ToList();
        }
    }
}