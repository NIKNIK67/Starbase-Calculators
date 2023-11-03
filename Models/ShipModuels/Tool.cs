#nullable disable

using System.Text.Json.Serialization;
using WebPage.Models.Interfaces;

namespace WebPage.Models.ShipModuels
{
    public class Tool : ShipModule, IElectricityConsumer
    {
        [JsonPropertyName("electricityConsume")]
        public float ElectricityConsume { get; set; }
        [JsonPropertyName("electricityConsumePassive")]
        public float ElectricityConsumePassive { get; set; }
    }
}
