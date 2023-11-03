#nullable disable

namespace WebPage.Middleware
{
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