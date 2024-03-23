using System.Text.Json.Serialization;

namespace Application.Models.InDto;

public class ImageEncodingInDto
{
    [property:JsonPropertyName("imageEncoding")]
    public string ImageEncoding { get; init; } = String.Empty;
}