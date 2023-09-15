#nullable disable

using Project1.Models.Interfaces;

namespace Project1.Models.ShipModuels
{
    public class FuelChamber : ShipModule, IHeatDispirator, IHeatProducer, IHeatStorage
    {
        public float HeatDispiration { get; set; }
        public float HeatProduction { get; set; }
        public float HeatStore { get; set; }
    }
}
