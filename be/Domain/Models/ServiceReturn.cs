using Domain.Errors;
using Domain.Interfaces;

namespace Domain.Models;

public class ServiceReturn<T> : IServiceReturn<T>
{
    private List<ValidationMessage> _errors;
    private T? _result;

    public ServiceReturn()
    {
        _result = default(T);
        _errors = new List<ValidationMessage>();
    }

    public bool HasErrors => _errors.Any();
    public List<ValidationMessage> Errors => _errors;

    public T? Result
    {
        get => _result;
        set => _result = value;
    }

    public ServiceReturn<T> WithResult(T result)
    {
        _result = result;
        return this;
    }

    public static IServiceReturn<T> FromResult(T result)
    {
        return new ServiceReturn<T>().WithResult(result);
    }
}