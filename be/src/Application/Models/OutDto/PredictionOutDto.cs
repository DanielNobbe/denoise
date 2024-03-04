using System.Text.Json.Serialization;

namespace Application.Models.OutDto;

public sealed record PredictionOutDto
{
    [property:JsonPropertyName("inputs")]
    public string Inputs { get; init; } = String.Empty;
    [property:JsonPropertyName("parameters")]
    public object Parameters { get; init; } = new { };
    [property:JsonPropertyName("image")]
    public string Image { get; init; } = String.Empty;
    [property:JsonPropertyName("enable_patching")]
    public bool EnablePatching { get; init; } = false;
}