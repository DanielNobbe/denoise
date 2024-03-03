namespace Application.Models.Config;

public sealed record PredictionServiceOptions
{
    public const string SectionName = "PredictionService";
    public string Url { get; set; } = null!;
}