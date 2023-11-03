#nullable disable

using System.Text.Json.Serialization;
using WebPage.Models.Interfaces;

namespace WebPage.Models.ShipModuels
{
    public class Weapon : ShipModule, IElectricityConsumer, IHeatProducer, IHeatStorage, IHeatDispirator, IWeapon, IHeatTransfer
    {
        [JsonPropertyName("electricityConsume")]
        public float ElectricityConsume { get; set; }
        [JsonPropertyName("electricityConsumePassive")]
        public float ElectricityConsumePassive { get; set; }
        [JsonPropertyName("heatProduction")]
        public float HeatProduction { get; set; }
        [JsonPropertyName("heatStore")]
        public float HeatStore { get; set; }
        [JsonPropertyName("heatDispiration")]
        public float HeatDispiration { get; set; }
        [JsonPropertyName("electricityConsumePerShot")]
        public float ElectricityConsumePerShot { get; set; }
        [JsonPropertyName("heatTransferToHeatsink")]
        public float HeatTransferToHeatsink { get; set; }
        [JsonPropertyName("heatTransferToRadiator")]
        public float HeatTransferToRadiator { get; set; }
    }
}
