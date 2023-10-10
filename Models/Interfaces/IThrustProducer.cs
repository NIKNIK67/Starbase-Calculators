#nullable disable


namespace WebPage.Models.Interfaces
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
