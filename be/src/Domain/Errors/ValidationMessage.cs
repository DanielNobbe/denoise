namespace Domain.Errors;

public sealed record ValidationMessage
{
    public ErrorCode Code { get; init; }
    public string? Message { get; init; }
}