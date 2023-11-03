#nullable disable

namespace WebPage.Models.Interfaces
{
    public interface IHeatTransfer
    {
        public abstract float HeatTransferToHeatsink { get; set; }
        public abstract float HeatTransferToRadiator { get; set; }
    }
}
