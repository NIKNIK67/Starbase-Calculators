#nullable disable

using System.Text.Json.Serialization;
using WebPage.Models.Interfaces;

namespace WebPage.Models.ShipModuels
{
    public class FuelChamber : ShipModule, IHeatDispirator, IHeatProducer, IHeatStorage, IHeatTransfer
    {
        [JsonPropertyName("heatDispiration")]
        public float HeatDispiration { get; set; }
        [JsonPropertyName("heatProduction")]
        public float HeatProduction { get; set; }
        [JsonPropertyName("heatStore")]
        public float HeatStore { get; set; }
        [JsonPropertyName("heatTransferToHeatsink")]
        public float HeatTransferToHeatsink { get; set; }
        [JsonPropertyName("heatTransferToRadiator")]
        public float HeatTransferToRadiator { get; set; }
    }
}
