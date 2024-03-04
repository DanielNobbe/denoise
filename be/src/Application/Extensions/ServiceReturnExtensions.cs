using Domain.Errors;
using Domain.Interfaces;

namespace Application.Extensions;

public static class ServiceReturnExtensions
{
    public static IServiceReturn<T> WithError<T>(this IServiceReturn<T> serviceReturn, ErrorCode errorCode, string errorMessage, ILogger? logger = null)
    {
        logger?.LogError(errorMessage);
        serviceReturn.Errors.Add(new ValidationMessage()
        {
            Code = errorCode,
            Message = errorMessage,
        });
        return serviceReturn;
    }
    
    public static IServiceReturn<T> WithErrors<T>(this IServiceReturn<T> serviceReturn, IEnumerable<ValidationMessage> errors, ILogger? logger = null)
    {
        foreach (var error in errors)
        {
            logger?.LogError(error.Message);
            serviceReturn.Errors.Add(error);
        }
        return serviceReturn;
    }
}