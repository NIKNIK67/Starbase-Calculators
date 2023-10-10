using Microsoft.AspNetCore.Mvc;
using WebPage.DTOs.Get;
using WebPage.Models;
using WebPage.Models.ShipModuels;

namespace WebPage.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MainController : ControllerBase
    {

        [HttpGet]
        [Route("/GetCapitalItems")]
        public List<ItemOutputDTO> GetCapitalItems()
        {
            List<ItemOutputDTO> result = new List<ItemOutputDTO>();
            foreach (Item item in Items.CapitalItems)
            {
                result.Add(new ItemOutputDTO(item.Id, item.Name, item.Composition));
            }
            return result;
        }
        [HttpGet]
        [Route("/GetMaterialsNames")]
        public List<MaterialsNamesDTO> GetMaterialsNames()
        {
            List<MaterialsNamesDTO> result = new List<MaterialsNamesDTO>();
            foreach (KeyValuePair<int, string> pair in Items.MaterialsName)
            {
                result.Add(new MaterialsNamesDTO(pair.Key, pair.Value));
            }
            return result;
        }
        [HttpGet]
        [Route("/GetAlloyItems")]
        public List<ItemOutputDTO> GetAlloyItems()
        {
            List<ItemOutputDTO> result = new List<ItemOutputDTO>();
            foreach (Item item in Items.AlloyItems)
            {
                result.Add(new ItemOutputDTO(item.Id, item.Name, item.Composition));
            }
            return result;
        }
        [HttpGet]
        [Route("/GetThrusters")]
        public List<Thruster> GetThrusters()
        {
            return Items.Thrusters;
        }
        [HttpGet]
        [Route("/GetWeapons")]
        public List<Weapon> GetWeapons()
        {
            return Items.Weapons;
        }
        [HttpGet]
        [Route("/GetBatteries")]
        public List<Battery> GetBatteries()
        {
            return Items.Battery;
        }
        [HttpGet]
        [Route("/GetFuelChambers")]
        public List<FuelChamber> GetFuelChambers()
        {
            return Items.FuelChambers;
        }
        [HttpGet]
        [Route("/GetGenerators")]
        public List<Generator> GetGenerators()
        {
            return Items.Generators;
        }
        [HttpGet]
        [Route("/GetPropelantTanks")]
        public List<PropelantTank> GetPropelantTanks()
        {
            return Items.PropelantTanks;
        }
        [HttpGet]
        [Route("/GetRadiators")]
        public List<Radiator> GetRadiators()
        {
            return Items.Radiators;
        }
        [HttpGet]
        [Route("/GetTools")]
        public List<Tool> GetTools()
        {
            return Items.Tools;
        }
        [HttpGet]
        [Route("/GetOreLocations")]
        public List<Location> GetOreLocations()
        {
            return Items.Locations;
        }
    }
}