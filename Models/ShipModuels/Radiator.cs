#nullable disable

using WebPage.Models.Interfaces;

namespace WebPage.Models.ShipModuels
{
    public class Radiator : ShipModule, IHeatStorage, IHeatDispirator
    {
        public float HeatStore { get; set; }
        public float HeatDispiration { get; set; }
    }
}
