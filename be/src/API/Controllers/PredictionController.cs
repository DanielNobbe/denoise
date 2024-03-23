using API.Errors;
using Application.Interfaces;
using Application.Models.InDto;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("prediction")]
public class PredictionController : ControllerBase
{
    private readonly ILogger<PredictionController> _logger;
    private readonly IPredictionService _predictionService;

    public PredictionController(
        ILogger<PredictionController> logger,
        IPredictionService predictionService
    )
    {
        _logger = logger;
        _predictionService = predictionService;
    }

    [HttpPost]
    public async Task<ActionResult<string>> FetchPredictionForImage([FromBody] ImageEncodingInDto imageEncodingInDto)
    {
        var predictionResponse = await _predictionService.FetchPrediction(imageEncodingInDto.ImageEncoding);
        // var predictionResponse = await _predictionService.GetHardcodedImage();
        if (predictionResponse.HasErrors)
        {
            return UnprocessableEntity(new ApiError()
            {
                Message = "Get on prediction failed",
                Errors = predictionResponse.Errors
            });
        }
        return Ok(predictionResponse.Result);
    }
}