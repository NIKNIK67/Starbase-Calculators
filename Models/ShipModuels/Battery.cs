#nullable disable

using WebPage.Models.Interfaces;

namespace WebPage.Models.ShipModuels
{
    public class Battery : ShipModule, IElecrticityStorage
    {
        public float ElecrticityStorage { get; set; }
    }
}
