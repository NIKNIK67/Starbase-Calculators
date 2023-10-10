#nullable disable

using WebPage.Models.Interfaces;

namespace WebPage.Models.ShipModuels
{
    public class Thruster : ShipModule, IElectricityConsumer, IPropelantConsumer, IThrustProducer
    {
        public float ElectricityConsume { get; set; }
        public float ElectricityConsumePassive { get; set; }
        public float PropelantConsume { get; set; }
        public float ThrustProduction { get; set; }
    }
}
