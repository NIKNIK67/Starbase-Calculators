#nullable disable

using Project1.Models.Interfaces;

namespace Project1.Models.ShipModuels
{
    public class Weapon : ShipModule, IElectricityConsumer, IHeatProducer, IHeatStorage, IHeatDispirator
    {
        public float ElectricityConsume { get; set; }
        public float ElectricityConsumePassive { get; set; }
        public float HeatProduction { get; set; }
        public float HeatStore { get; set; }
        public float HeatDispiration { get; set; }
    }
}
