﻿#nullable disable

using WebPage.Models.Interfaces;

namespace WebPage.Models.ShipModuels
{
    public class Generator : ShipModule, IHeatStorage, IHeatProducer, IHeatDispirator, IElecrticityProducer, IHeatTransfer
    {
        public float HeatStore { get; set; }
        public float HeatProduction { get; set; }
        public float HeatDispiration { get; set; }
        public float ElectricityProduction { get; set; }
        public float HeatTransferToHeatsink { get; set; }
        public float HeatTransferToRadiator { get; set; }
    }
}
