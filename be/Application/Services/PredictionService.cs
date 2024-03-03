using Application.Interfaces;
using Domain.Interfaces;
using Domain.Models;

namespace Application.Services;

public class PredictionService : IPredictionService
{
    public async Task<IServiceReturn<string>> FetchPrediction()
    {
        var response = new ServiceReturn<string>();
        return response.WithResult("Called prediction service successfully");
    }
}