#nullable disable

using System.Text.Json.Serialization;
using WebPage.Models.Interfaces;

namespace WebPage.Models.ShipModuels
{
    public class PropelantTank : ShipModule, IPropelantStore
    {
        [JsonPropertyName("propelantStore")]
        public float PropelantStore { get; set; }
    }
}
