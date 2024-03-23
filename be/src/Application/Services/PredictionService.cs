using System.Drawing;
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
        var threeChannelsImageEncoding = RemoveAlphaChannel(imageEncoding);
        var body = PreparePredictionRequest(threeChannelsImageEncoding);
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
                errorMessage: $"Got unexpected response code from the prediction model. Response code: '{predictionResponse.StatusCode}'",
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

    private string RemoveAlphaChannel(string base64ImageData)
    {
        byte[] imageDataBytes = Convert.FromBase64String(base64ImageData);
        using (MemoryStream ms = new MemoryStream(imageDataBytes))
        {
            using (Bitmap bitmap = new Bitmap(ms))
            {
                // Check if the image has an alpha channel (4 channels)
                if (bitmap.PixelFormat == System.Drawing.Imaging.PixelFormat.Format32bppArgb)
                {
                    // Create a new bitmap without an alpha channel (3 channels)
                    Bitmap newBitmap = new Bitmap(bitmap.Width, bitmap.Height, System.Drawing.Imaging.PixelFormat.Format24bppRgb);

                    // Draw the original image onto the new bitmap, discarding the alpha channel
                    using (Graphics g = Graphics.FromImage(newBitmap))
                    {
                        g.DrawImage(bitmap, 0, 0, bitmap.Width, bitmap.Height);
                    }

                    // Save the new bitmap to a memory stream
                    using (MemoryStream newMs = new MemoryStream())
                    {
                        newBitmap.Save(newMs, System.Drawing.Imaging.ImageFormat.Png);
                        return Convert.ToBase64String(newMs.ToArray());
                    }
                }
            }
        }
        return base64ImageData;
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