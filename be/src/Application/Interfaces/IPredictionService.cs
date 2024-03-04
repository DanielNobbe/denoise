using Domain.Interfaces;

namespace Application.Interfaces;

public interface IPredictionService
{
    Task<IServiceReturn<string>> FetchPrediction();
}