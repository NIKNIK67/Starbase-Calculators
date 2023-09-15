﻿using Project1.Models.ShipModuels;
#nullable disable

namespace Project1.Models
{

    public class Items
    {
        public static List<Item> CapitalItems = new List<Item>()
        {
            new Item(){
                Id=101,
                Name="Exorium procesing unit",
                Composition = new Dictionary<Material, int>
                {
                    { Material.LukiumOre,35449},
                    { Material.CharodiumOre,15062},
                    { Material.AegisiumOre,13280},
                    { Material.YmriumOre,11297},
                    { Material.KutoniumOre,6638},
                    { Material.BastiumOre,5432},
                    { Material.AliumAlloy,3657},
                    { Material.AjatiteOre,1662},
                    { Material.CoraziumOre,1416},
                    { Material.BaltiumAlloy,1330},
                    { Material.ArkaniumOre,1062},
                }
            },
            new Item(){
                Id=102,
                Name="Exorium Tank Module",
                Composition = new Dictionary<Material, int>
                {
                    {Material.LukiumOre,18811},
                    {Material.AegisiumOre,19985},
                    {Material.KutoniumOre,29982},
                    {Material.AliumAlloy,3657},
                    {Material.AjatiteOre,1662},
                    {Material.BaltiumAlloy,1330},
                }
            },
            new Item(){
                Id=103,
                Name="Fast Travel Core Module",
                Composition= new Dictionary<Material, int>
                {
                    {Material.LukiumOre, 8270},
                    {Material.CharodiumOre, 16926},
                    {Material.AegisiumOre, 6529},
                    {Material.KutoniumOre, 23943},
                    {Material.BastiumOre, 11455},
                    {Material.AjatiteOre, 11872},
                    {Material.CoraziumOre, 9223},
                    {Material.ArkaniumOre, 13528},
                    {Material.VokariumOre, 10871},
                    {Material.KarniteCrystal, 11144},
                    {Material.ExoriumOre, 2733},
                    {Material.Ice, 1093},
                }
            },
            new Item(){
                Id=104,
                Name="Fast Travel Propellant Tank",
                Composition= new Dictionary<Material, int>()
                {
                    {Material.LukiumOre,18079 },
                    {Material.AegisiumOre,16710 },
                    {Material.YmriumOre,8109 },
                    {Material.KutoniumOre,12316 },
                    {Material.BastiumOre,11567 },
                    {Material.AliumAlloy,3657 },
                    {Material.AjatiteOre,1662 },
                    {Material.BaltiumAlloy,1330 },
                    {Material.ArkaniumOre,351 },
                    {Material.VokariumOre,2352 },
                }
            },
            new Item()
            {
                Id=105,
                Name="Generator Module",
                Composition = new Dictionary<Material, int>()
                {
                    {Material.LukiumOre,21209},
                    {Material.CharodiumOre,29051},
                    {Material.YmriumOre,11947},
                    {Material.KutoniumOre,49661},
                    {Material.AliumAlloy,3657},
                    {Material.AjatiteOre,1662},
                    {Material.CoraziumOre,598},
                    {Material.BaltiumAlloy,1330},
                    {Material.ArkaniumOre,822},
                    {Material.VokariumOre,1720},
                    {Material.ValkiteOre,11947},
                }
            },
            new Item()
            {
                Id=106,
                Name="Reconstruction Machine",
                Composition = new Dictionary<Material, int>()
                {
                    {Material.CharodiumOre,2971 },
                    {Material.AegisiumOre,11884 },
                    {Material.KutoniumOre,7922 },
                    {Material.BastiumOre,816 },
                    {Material.ArkaniumOre,22778 },
                    {Material.VokariumOre,16836 },
                    {Material.ExoriumOre,9903 },
                }
            },
            new Item()
            {
                Id=107,
                Name="Shield Generator",
                Composition = new Dictionary<Material, int>()
                {
                    {Material.LukiumOre,67672 },
                    {Material.AegisiumOre,45193 },
                    {Material.KutoniumOre,35156 },
                    {Material.ArkaniumOre,17887 },
                    {Material.VokariumOre,3587 },
                    {Material.KarniteCrystal,28807 },
                    {Material.XhaliumOre,5535 },
                    {Material.SurtriteCrystal,1977 },
                }
            },
            new Item()
            {
                Id=108,
                Name="Shield Generator",
                Composition = new Dictionary<Material, int>()
                {
                    {Material.LukiumOre,67672 },
                    {Material.AegisiumOre,45193 },
                    {Material.KutoniumOre,35156 },
                    {Material.ArkaniumOre,17887 },
                    {Material.VokariumOre,3587 },
                    {Material.KarniteCrystal,28807 },
                    {Material.XhaliumOre,5535 },
                    {Material.SurtriteCrystal,1977 },
                }
            },
            new Item()
            {
                Id=109,
                Name="Supply Conduit Straight",
                Composition = new Dictionary<Material, int>()
                {
                    {Material.CharodiumOre,213 },
                    {Material.AegisiumOre,213 },
                    {Material.VokariumOre,427 },

                }
            },
            new Item()
            {
                Id=110,
                Name="Supply Conduit Nexus",
                Composition = new Dictionary<Material, int>()
                {
                    {Material.BastiumOre,161 },
                    {Material.AjatiteOre,138 },
                    {Material.CoraziumOre,161 },

                }
            },
            new Item()
            {
                Id=111,
                Name="Thruster Module Frame",
                Composition = new Dictionary<Material, int>()
                {
                    {Material.CharodiumOre,23987 },
                    {Material.AegisiumOre,25114 },
                    {Material.YmriumOre,17105 },
                    {Material.AliumAlloy,31182 },
                    {Material.AjatiteOre,1662 },
                    {Material.CoraziumOre,2064 },
                    {Material.BaltiumAlloy,1330 },
                    {Material.ArkaniumOre,23934 },
                    {Material.VokariumOre,18612 },

                }
            },
            new Item()
            {
                Id=112,
                Name="Thruster Module Nozzle Ring",
                Composition = new Dictionary<Material, int>()
                {
                    {Material.LukiumOre,7729 },
                    {Material.CharodiumOre,4637 },
                    {Material.YmriumOre,6956 },
                    {Material.AliumAlloy,3864 },
                    {Material.CoraziumOre,1932 },
                    {Material.ArkaniumOre,9661 },
                    {Material.VokariumOre,3864 },

                }
            },
            new Item()
            {
                Id=113,
                Name="Thruster Module Nozzle End",
                Composition = new Dictionary<Material, int>()
                {
                    {Material.AegisiumOre,4510 },
                    {Material.YmriumOre,5261 },
                    {Material.AliumAlloy,5261 },

                }
            },
            new Item()
            {
                Id=114,
                Name="Thruster Module Nozzle Support",
                Composition = new Dictionary<Material, int>()
                {
                    {Material.AjatiteOre,1662 },
                    {Material.BaltiumAlloy,1330 },
                    {Material.AliumAlloy,5261 },

                }
            },
            new Item()
            {
                Id=115,
                Name="Exorium Filler tool",
                Composition = new Dictionary<Material, int>()
                {
                    {Material.AegisiumOre,532 },
                    {Material.BastiumOre,533 },
                    {Material.VokariumOre,152 },
                    {Material.ExoriumOre,20266 },
                    {Material.Ice,20266 },

                }
            },
            new Item()
            {
                Id=116,
                Name="Karnite Filler tool",
                Composition = new Dictionary<Material, int>()
                {
                    {Material.AegisiumOre,532 },
                    {Material.CharodiumOre,152 },
                    {Material.BastiumOre,381 },
                    {Material.VokariumOre,152 },
                    {Material.KarniteCrystal,60800 },
                    {Material.Ice,20266 },

                }
            },
        };
        public static List<Item> AlloyItems = new List<Item>()
        {
            new Item()
            {
                Id=117,
                Name="Alium Alloy",
                Composition = new Dictionary<Material, int>
                {
                    { Material.ValkiteOre,1036},
                    { Material.AegisiumOre,1036},
                    { Material.NhurgiteCrystal,518},
                }
            },
            new Item()
            {
                Id=118,
                Name="Baltium Alloy",
                Composition = new Dictionary<Material, int>
                {
                    { Material.ValkiteOre,1036},
                    { Material.BastiumOre,1036},
                    { Material.NhurgiteCrystal,518},
                }
            },
            new Item()
            {
                Id=119,
                Name="Bastonium Alloy",
                Composition = new Dictionary<Material, int>
                {
                    { Material.KutoniumOre,1296},
                    { Material.BastiumOre,1296},
                    { Material.KarniteCrystal,864},
                }
            },
            new Item()
            {
                Id=120,
                Name="Corium Alloy",
                Composition = new Dictionary<Material, int>
                {
                    { Material.YmriumOre,1296},
                    { Material.CoraziumOre,1296},
                    { Material.HaderiteCrystal,864},
                }
            },
            new Item()
            {
                Id=121,
                Name="Exutium Alloy",
                Composition = new Dictionary<Material, int>
                {
                    { Material.ExoriumOre,1296},
                    { Material.KutoniumOre,1296},
                    { Material.HaderiteCrystal,864},
                }
            },
            new Item()
            {
                Id=122,
                Name="Glass",
                Composition = new Dictionary<Material, int>
                {
                    { Material.AegisiumOre,1036},
                    { Material.AjatiteOre,1036},
                    { Material.SurtriteCrystal,518},
                }
            },
            new Item()
            {
                Id=123,
                Name="Tallium Alloy",
                Composition = new Dictionary<Material, int>
                {
                    { Material.LukiumOre,1296},
                    { Material.TargiumOre,1296},
                    { Material.HaderiteCrystal,864},
                }
            },
        };
        public static readonly Dictionary<int, string> MaterialsName = new Dictionary<int, string>()
        {
           {(int)Material.AegisiumOre,"Aegisium Ore"},
           {(int)Material.AjatiteOre,"Ajatite Ore"},
           {(int)Material.AliumAlloy,"Alium Alloy"},
           {(int)Material.ArkaniumOre,"Arkanium Ore"},
           {(int)Material.BaltiumAlloy,"Baltium Alloy"},
           {(int)Material.BastiumOre,"Bastium Ore"},
           {(int)Material.BastoniumAlloy,"Bastonium Alloy"},
           {(int)Material.CharodiumOre,"Charodium Ore"},
           {(int)Material.CoraziumOre,"Corazium Ore"},
           {(int)Material.CoriumAlloy,"Corium Alloy"},
           {(int)Material.DaltiumOre,"Daltium Ore"},
           {(int)Material.ExoriumOre,"Exorium Ore"},
           {(int)Material.ExutiumAlloy,"Exutium Alloy"},
           {(int)Material.Glass,"Glass"},
           {(int)Material.HaderiteCrystal,"Haderite Crystal"},
           {(int)Material.Ice,"Ice"},
           {(int)Material.IlmatriumOre,"Ilmatrium Ore"},
           {(int)Material.KarniteCrystal,"Karnite Crystal"},
           {(int)Material.KutoniumOre,"Kutonium Ore"},
           {(int)Material.LukiumOre,"Lukium Ore"},
           {(int)Material.MerkeriumOre,"Merkerium Ore"},
           {(int)Material.NafliteOre,"Naflite Ore"},
           {(int)Material.NhurgiteCrystal,"Nhurgite Crystal"},
           {(int)Material.OninumOre,"Oninum Ore"},
           {(int)Material.SurtriteCrystal,"Surtrite Crystal"},
           {(int)Material.Talkite,"Talkite"},
           {(int)Material.TalliumAlloy,"Tallium Alloy"},
           {(int)Material.TargiumOre,"Targium Ore"},
           {(int)Material.TengiumOre,"Tengium Ore"},
           {(int)Material.UkoniumOre,"Ukonium Ore"},
           {(int)Material.ValkiteOre,"Valkite Ore"},
           {(int)Material.VokariumOre,"Vokarium Ore"},
           {(int)Material.XhaliumOre,"Xhalium Ore"},
           {(int)Material.YmriumOre,"Ymrium Ore"},
        };
        public static List<Thruster> Thrusters = new List<Thruster>()
        {
            new Thruster()
            {

            },
        };
        public static List<Battery> Battery = new List<Battery>();
        public static List<FuelChamber> FuelChambers = new List<FuelChamber>();
        public static List<Generator> Generators = new List<Generator>();
        public static List<PropelantTank> PropelantTanks = new List<PropelantTank>();
        public static List<Radiator> Radiators = new List<Radiator>();
        public static List<Tool> Tools = new List<Tool>();
        public static List<Weapon> Weapons = new List<Weapon>();

    }
    public class ShipModule
    {
        public virtual string Name { get; set; }
    }
}