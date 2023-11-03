#nullable disable

using System.Text.Json.Serialization;
using WebPage.Models.Interfaces;

namespace WebPage.Models.ShipModuels
{
    public class Thruster : ShipModule, IElectricityConsumer, IPropelantConsumer, IThrustProducer
    {
        [JsonPropertyName("electricityConsume")]
        public float ElectricityConsume { get; set; }
        [JsonPropertyName("electricityConsumePassive")]
        public float ElectricityConsumePassive { get; set; }
        [JsonPropertyName("propelantConsume")]
        public float PropelantConsume { get; set; }
        [JsonPropertyName("thrustProduction")]
        public float ThrustProduction { get; set; }
    }
}
