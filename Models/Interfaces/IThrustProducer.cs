#nullable disable


namespace Project1.Models.Interfaces
{
    public interface IThrustProducer
    {
        public abstract float ThrustProduction { get; set; }
    }
    public interface IWeapon
    {
        public abstract float ElectricityConsumePerShot { get; set; }
    }
}
