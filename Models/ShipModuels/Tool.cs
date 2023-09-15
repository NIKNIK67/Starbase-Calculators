#nullable disable

using Project1.Models.Interfaces;

namespace Project1.Models.ShipModuels
{
    public class Tool : ShipModule, IElectricityConsumer
    {
        public float ElectricityConsume { get; set; }
        public float ElectricityConsumePassive { get; set; }
    }
}
