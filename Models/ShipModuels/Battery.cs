#nullable disable

using Project1.Models.Interfaces;

namespace Project1.Models.ShipModuels
{
    public class Battery : ShipModule, IElecrticityStorage
    {
        public float ElecrticityStorage { get; set; }
    }
}
