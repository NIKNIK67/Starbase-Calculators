#nullable disable

using System.Text.Json.Serialization;
using WebPage.Models.Interfaces;

namespace WebPage.Models.ShipModuels
{
    public class Radiator : ShipModule, IHeatStorage, IHeatDispirator
    {
        [JsonPropertyName("heatStore")]
        public float HeatStore { get; set; }
        [JsonPropertyName("heatDispiration")]
        public float HeatDispiration { get; set; }
    }
}
