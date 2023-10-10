#nullable disable

using WebPage.Models.Interfaces;

namespace WebPage.Models.ShipModuels
{
    public class Weapon : ShipModule, IElectricityConsumer, IHeatProducer, IHeatStorage, IHeatDispirator, IWeapon, IHeatTransfer
    {
        public float ElectricityConsume { get; set; }
        public float ElectricityConsumePassive { get; set; }
        public float HeatProduction { get; set; }
        public float HeatStore { get; set; }
        public float HeatDispiration { get; set; }
        public float ElectricityConsumePerShot { get; set; }
        public float HeatTransferToHeatsink { get; set; }
        public float HeatTransferToRadiator { get; set; }
    }
}
