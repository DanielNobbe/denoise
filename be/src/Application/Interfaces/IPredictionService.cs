using Domain.Interfaces;

namespace Application.Interfaces;

public interface IPredictionService
{
    Task<IServiceReturn<string>> FetchPrediction();
    Task<IServiceReturn<string>> CreateRandomNumber();
    Task<IServiceReturn<string>> GetHardcodedImage();
}