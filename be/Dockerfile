# Start with the ASP.NET Core SDK image for building
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /app

# Copy the project files and restore dependencies
COPY . ./
RUN dotnet restore "src/API/API.csproj"

# Build the application
RUN dotnet build "src/API/API.csproj" -c Release -o /app/build

# Publish the application
FROM build AS publish
RUN dotnet publish "src/API/API.csproj" -c Release -o /app/publish

# Create the runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .

# Set the ASP.NET Core environment variable
ENV ASPNETCORE_ENVIRONMENT=Production

# Expose port 80 for HTTP
EXPOSE 80

# Start the application
ENTRYPOINT ["dotnet", "API.dll"]