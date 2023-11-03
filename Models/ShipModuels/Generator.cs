#nullable disable

using System.Text.Json.Serialization;
using WebPage.Models.Interfaces;

namespace WebPage.Models.ShipModuels
{
    public class Generator : ShipModule, IHeatStorage, IHeatProducer, IHeatDispirator, IElecrticityProducer, IHeatTransfer
    {
        [JsonPropertyName("heatStore")]
        public float HeatStore { get; set; }
        [JsonPropertyName("heatProduction")]
        public float HeatProduction { get; set; }
        [JsonPropertyName("heatDispiration")]
        public float HeatDispiration { get; set; }
        [JsonPropertyName("electricityProduction")]
        public float ElectricityProduction { get; set; }
        [JsonPropertyName("heatTransferToHeatsink")]
        public float HeatTransferToHeatsink { get; set; }
        [JsonPropertyName("heatTransferToRadiator")]
        public float HeatTransferToRadiator { get; set; }
    }
}
