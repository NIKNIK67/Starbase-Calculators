#nullable disable
using WebPage.Middleware;

namespace WebPage
{
    public class Program
    {
        public static void Main(string[] args)
        {
#if RELEASE
            EFContext.ConnectionString = args[0];
#endif
            var builder = WebApplication.CreateBuilder();
            builder.Services.AddControllersWithViews().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
                options.JsonSerializerOptions.MaxDepth = 64;
            });
            builder.Services.AddSwaggerGen();
            builder.Services.AddDbContext<EFContext>();
            builder.Services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                    builder
                        .AllowAnyOrigin()
                        .AllowAnyHeader()
                        .AllowAnyMethod());
            }
            );
            var app = builder.Build();
            app.UseMiddleware<RequestLogger>();
            if (!app.Environment.IsDevelopment())
            {
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();
            app.UseCors();
            app.UseSwagger().UseSwaggerUI();
            app.MapControllerRoute(
                name: "default",
                pattern: "{controller}/{action=Index}/{id?}");
            app.MapFallbackToFile("index.html");
            app.Run();
        }
    }
}