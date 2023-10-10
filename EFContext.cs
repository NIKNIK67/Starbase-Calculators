using Microsoft.EntityFrameworkCore;

namespace WebPage
{
    public class EFContext : DbContext
    {
        public DbSet<Player> Players { get; set; } = null!;
        public DbSet<Team> Teams { get; set; } = null!;
        public EFContext()
        {
            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql("no string", new MySqlServerVersion(new Version()));
            optionsBuilder.LogTo(message => System.Diagnostics.Debug.WriteLine(message), Microsoft.Extensions.Logging.LogLevel.Error);
        }
        protected override void OnModelCreating(ModelBuilder model)
        {

            base.OnModelCreating(model);

        }
    }
}
