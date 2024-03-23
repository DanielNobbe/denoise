using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("health")]
public class HealthController : ControllerBase
{
    private readonly ILogger<PredictionController> _logger;

    public HealthController(
        ILogger<PredictionController> logger
    )
    {
        _logger = logger;
    }

    [HttpGet]
    public async Task<ActionResult<string>> Get()
    {
        return Ok("Backend is healthy");
    }
}