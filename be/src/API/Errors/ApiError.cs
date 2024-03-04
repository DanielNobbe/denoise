using Domain.Errors;

namespace API.Errors;

public sealed record ApiError
{
    public string? Message { get; set; }
    public List<ValidationMessage>? Errors { get; set; }
}