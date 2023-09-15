#nullable disable

using Project1.Models.Interfaces;

namespace Project1.Models.ShipModuels
{
    public class Radiator : ShipModule, IHeatStorage, IHeatDispirator
    {
        public float HeatStore { get; set; }
        public float HeatDispiration { get; set; }
    }
}
