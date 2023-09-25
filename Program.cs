

namespace Project1
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllersWithViews();
            builder.Services.AddSwaggerGen();
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
#if debug
            if (!app.Environment.IsDevelopment())
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
#endif
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
    public class RequestLogger
    {
        private readonly RequestDelegate next;
        private readonly ILogger<RequestLogger> logger;

        public RequestLogger(RequestDelegate next, ILogger<RequestLogger> logger)
        {
            this.next = next;
            this.logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            logger.Log(LogLevel.Information, $"Request path:{context.Request.Path} \tRequest ip address {context.Request.HttpContext.Connection.RemoteIpAddress?.MapToIPv4().ToString()}:{context.Request.HttpContext.Connection.RemotePort}");
            await next.Invoke(context);
        }
    }
}