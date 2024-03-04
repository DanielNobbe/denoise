using Domain.Errors;

namespace Domain.Interfaces;

public interface IServiceReturn<out T>
{
    public bool HasErrors { get; }
    public List<ValidationMessage> Errors { get; }
    public T? Result { get; }
}