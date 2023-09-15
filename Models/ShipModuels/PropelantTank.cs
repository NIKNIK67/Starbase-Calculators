#nullable disable

using Project1.Models.Interfaces;

namespace Project1.Models.ShipModuels
{
    public class PropelantTank : ShipModule, IPropelantStore
    {
        public float PropelantStore { get; set; }
    }
}
