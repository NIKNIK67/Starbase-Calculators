#nullable disable

using WebPage.Models.Interfaces;

namespace WebPage.Models.ShipModuels
{
    public class Tool : ShipModule, IElectricityConsumer
    {
        public float ElectricityConsume { get; set; }
        public float ElectricityConsumePassive { get; set; }
    }
}
