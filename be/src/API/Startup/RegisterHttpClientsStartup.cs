using Application.Constants;

namespace API.Startup;

public static class RegisterHttpClientsStartup
{
    public static IServiceCollection RegisterHttpClients(this IServiceCollection services, WebApplicationBuilder builder)
    {
        services
            .AddHttpClient(Clients.DefaultName)
            .ConfigurePrimaryHttpMessageHandler(() => new HttpClientHandler() { UseDefaultCredentials = true });
        services
            .AddHttpClient(Clients.BearerToken)
            .ConfigurePrimaryHttpMessageHandler(() => new HttpClientHandler());
        return services;
    }
}