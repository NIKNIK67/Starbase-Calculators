using Microsoft.EntityFrameworkCore;
using WebPage.Models;
using WebPage.Models.ShipModuels;
#nullable disable
namespace WebPage
{
    public class EFContext : DbContext
    {
#if DEBUG
        public static string ConnectionString { get; set; } = @"Data Source=PC-1\SQLEXPRESS;Initial Catalog=TestPriceDB;Persist Security Info=False;Encrypt=false;TrustServerCertificate=False;Integrated Security=True";
#elif RELEASE
        public static string ConnectionString { get; set; } = @"";
#endif
        public DbSet<Item> CapitalItems { get; set; }
        public DbSet<Item> AlloyItems { get; set; }
        public DbSet<Thruster> Thrusters { get; set; }
        public DbSet<FuelChamber> FuelChambers { get; set; }
        public DbSet<Generator> Generators { get; set; }
        public DbSet<PropelantTank> PropelantTanks { get; set; }
        public DbSet<Radiator> Radiators { get; set; }
        public DbSet<Tool> Tools { get; set; }
        public DbSet<Weapon> Weapons { get; set; }
        public DbSet<Battery> Batteries { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<MaterialObject> MaterialNames { get; set; }
        public EFContext()
        {
            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(ConnectionString);
            optionsBuilder.LogTo(message => System.Diagnostics.Debug.WriteLine(message), LogLevel.Error);
        }
        protected override void OnModelCreating(ModelBuilder model)
        {
            model.Entity<MaterialObject>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Name);
            });
            model.Entity<Item>(entity =>
            {
                entity.Property(x => x.type);
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Name);
                entity.HasMany(x => x.Composition).WithOne(x => x.RootItem);

            });
            model.Entity<CompositionElement>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Value);
                entity.Property(x => x.Key);
                entity.HasOne(x => x.RootItem).WithMany(s => s.Composition);
            });
            model.Entity<Thruster>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Name);
                entity.Property(x => x.ThrustProduction);
                entity.Property(x => x.PropelantConsume);
                entity.Property(x => x.ElectricityConsume);
                entity.Property(x => x.ElectricityConsumePassive);
            });
            model.Entity<Battery>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Name);
                entity.Property(x => x.ElecrticityStorage);
            });
            model.Entity<FuelChamber>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Name);
                entity.Property(x => x.HeatProduction);
                entity.Property(x => x.HeatDispiration);
                entity.Property(x => x.HeatStore);
                entity.Property(x => x.HeatTransferToHeatsink);
                entity.Property(x => x.HeatTransferToRadiator);
            });
            model.Entity<Generator>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Name);
                entity.Property(x => x.ElectricityProduction);
                entity.Property(x => x.HeatDispiration);
                entity.Property(x => x.HeatTransferToHeatsink);
                entity.Property(x => x.HeatTransferToRadiator);
                entity.Property(x => x.HeatStore);
                entity.Property(x => x.HeatProduction);
            });
            model.Entity<PropelantTank>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Name);
                entity.Property(x => x.PropelantStore);
            });
            model.Entity<Radiator>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Name);
                entity.Property(x => x.HeatStore);
                entity.Property(x => x.HeatDispiration);
            });
            model.Entity<Tool>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Name);
                entity.Property(x => x.ElectricityConsume);
                entity.Property(x => x.ElectricityConsumePassive);
            });
            model.Entity<Weapon>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Name);
                entity.Property(x => x.ElectricityConsume);
                entity.Property(x => x.ElectricityConsumePassive);
                entity.Property(x => x.ElectricityConsumePerShot);
                entity.Property(x => x.HeatProduction);
                entity.Property(x => x.HeatDispiration);
                entity.Property(x => x.HeatStore);
            });
            model.Entity<Location>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.name);
                entity.Property(x => x.imageUrl);
                entity.HasMany(x => x.OreLocations).WithOne(s => s.RootLocation);

            });
            model.Entity<OreLocation>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.name);
                entity.Property(x => x.LocationType);
                entity.HasOne(x => x.RootLocation).WithMany(s => s.OreLocations);
                entity.HasMany(x => x.Ores).WithOne(s => s.RootOreLocation);
            });
            model.Entity<OreLocationElement>(entity =>
            {
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Rarity);
                entity.Property(x => x.Material);
            });
            base.OnModelCreating(model);

        }
    }
}
