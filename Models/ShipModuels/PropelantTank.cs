#nullable disable

using WebPage.Models.Interfaces;

namespace WebPage.Models.ShipModuels
{
    public class PropelantTank : ShipModule, IPropelantStore
    {
        public float PropelantStore { get; set; }
    }
}
