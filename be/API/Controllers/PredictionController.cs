using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("prediction")]
public class PredictionController : ControllerBase
{
    private readonly ILogger<PredictionController> _logger;

    public PredictionController(ILogger<PredictionController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public async Task<ActionResult<string>> Get()
    {
        
        return Ok("Successfully reached the endpoint");
    }
}