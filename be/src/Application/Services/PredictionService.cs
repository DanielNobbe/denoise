using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using Application.Constants;
using Application.Extensions;
using Application.Interfaces;
using Application.Models.Config;
using Application.Models.OutDto;
using Domain.Errors;
using Domain.Interfaces;
using Domain.Models;
using Microsoft.Extensions.Options;

namespace Application.Services;

public class PredictionService : IPredictionService
{
    private readonly ILogger<PredictionService> _logger;
    private readonly IHttpClientFactory _clientFactory;
    private readonly PredictionServiceOptions _options;
    private readonly JsonSerializerOptions _jsonSerializerOptions;

    public PredictionService(
        ILogger<PredictionService> logger,
        IHttpClientFactory clientFactory,
        IOptions<PredictionServiceOptions> options
    )
    {
        _logger = logger;
        _clientFactory = clientFactory;
        _options = options.Value;
        _jsonSerializerOptions = new JsonSerializerOptions()
        {
            DefaultIgnoreCondition = JsonIgnoreCondition.Never,
            WriteIndented = true,
        };
    }

    public async Task<IServiceReturn<string>> FetchPrediction(string imageEncoding)
    {
        var response = new ServiceReturn<string>();
        var body = PreparePredictionRequest(imageEncoding);
        var json = JsonSerializer.Serialize<PredictionOutDto>(body, _jsonSerializerOptions);
        var client = _clientFactory.CreateClient(Clients.DefaultName);
        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _options.BearerToken);
        var endpoint = new Uri(_options.Url);
        var content = new StringContent(json, Encoding.UTF8, "application/json");
        content.Headers.ContentType!.CharSet = string.Empty;
        var predictionResponse = await client.PostAsync(endpoint, content);
        if (!predictionResponse.IsSuccessStatusCode)
        {
            return response.WithError(
                errorCode: ErrorCode.ExternalCommunicationError,
                errorMessage:
                $"Got unexpected response code from the prediction model. Response code: '{predictionResponse.StatusCode}'",
                logger: _logger
            );
        }

        var encodedImageResponse = await predictionResponse.Content.ReadAsStringAsync();
        encodedImageResponse = encodedImageResponse.Replace("\"", "");

        return response.WithResult(encodedImageResponse);
    }

    public async Task<IServiceReturn<string>> CreateRandomNumber()
    {
        var response = new ServiceReturn<string>();
        return response.WithResult("Called dummy service successfully with random num of " + new Random().Next(0, 10));
    }

    public async Task<IServiceReturn<string>> GetHardcodedImage()
    {
        var response = new ServiceReturn<string>();
        return response.WithResult(HardcodedImageEncoding.ImageString);
    }

    private PredictionOutDto PreparePredictionRequest(string imageEncoding)
    {
        return new PredictionOutDto()
        {
            Inputs = "Hello world!",
            Parameters = new { },
            Image = imageEncoding,
            EnablePatching = false,
        };
    }
}