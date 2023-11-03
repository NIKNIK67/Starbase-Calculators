#nullable disable

using System.Text.Json.Serialization;
using WebPage.Models.Interfaces;

namespace WebPage.Models.ShipModuels
{
    public class Battery : ShipModule, IElecrticityStorage
    {
        [JsonPropertyName("elecrticityStorage")]
        public float ElecrticityStorage { get; set; }
    }
}
