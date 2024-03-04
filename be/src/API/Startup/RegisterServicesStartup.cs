using Application.Interfaces;
using Application.Services;

namespace API.Startup;

public static class RegisterServicesStartup
{
    public static IServiceCollection RegisterServices(this IServiceCollection services)
    {
        services.AddScoped<IPredictionService, PredictionService>();
        return services;
    }
}