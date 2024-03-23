using Domain.Interfaces;

namespace Application.Interfaces;

public interface IPredictionService
{
    Task<IServiceReturn<string>> FetchPrediction(string imageEncoding);
    Task<IServiceReturn<string>> CreateRandomNumber();
    Task<IServiceReturn<string>> GetHardcodedImage();
}