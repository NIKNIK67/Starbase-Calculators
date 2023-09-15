using Microsoft.AspNetCore.Mvc;
using Project1.DTOs.Get;
using Project1.Models;

namespace Project1.Controllers
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
    }
}