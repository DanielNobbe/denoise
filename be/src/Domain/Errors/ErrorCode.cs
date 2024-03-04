namespace Domain.Errors;

public enum ErrorCode
{
    ConfigurationError,
    ExternalCommunicationError,
    InternalError,
    InternalPersistenceError,
    InvalidInputParameter,
    InvalidOperation,
    NotFound,
    NotSupported,
    UniqueConstraintViolation,
}