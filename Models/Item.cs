﻿#nullable disable

namespace Project1.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Dictionary<Material, int> Composition = new Dictionary<Material, int>();
    }

}