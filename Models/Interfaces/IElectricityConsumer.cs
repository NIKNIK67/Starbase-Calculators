#nullable disable


namespace Project1.Models.Interfaces
{
    public interface IElectricityConsumer
    {
        public abstract float ElectricityConsume { get; set; }
        public abstract float ElectricityConsumePassive { get; set; }
    }
}
