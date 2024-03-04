using Application.Models.Config;

namespace API.Startup;

public static class RegisterOptionsStartup
{
    public static IServiceCollection RegisterOptions(this IServiceCollection services, ConfigurationManager config)
    {
        services
            .AddOptions<PredictionServiceOptions>()
            .Bind(config.GetSection(PredictionServiceOptions.SectionName))
            .ValidateDataAnnotations()
            .ValidateOnStart();
        return services;
    }
}