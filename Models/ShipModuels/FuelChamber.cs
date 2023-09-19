#nullable disable

using Project1.Models.Interfaces;

namespace Project1.Models.ShipModuels
{
    public class FuelChamber : ShipModule, IHeatDispirator, IHeatProducer, IHeatStorage, IHeatTransfer
    {
        public float HeatDispiration { get; set; }
        public float HeatProduction { get; set; }
        public float HeatStore { get; set; }
        public float HeatTransferToHeatsink { get; set; }
        public float HeatTransferToRadiator { get; set; }
    }
}
