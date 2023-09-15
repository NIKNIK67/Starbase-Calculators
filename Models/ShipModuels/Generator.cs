﻿#nullable disable

using Project1.Models.Interfaces;

namespace Project1.Models.ShipModuels
{
    public class Generator : ShipModule, IHeatStorage, IHeatProducer, IHeatDispirator, IElecrticityProducer
    {
        public float HeatStore { get; set; }
        public float HeatProduction { get; set; }
        public float HeatDispiration { get; set; }
        public float ElectricityProduction { get; set; }
    }
}
