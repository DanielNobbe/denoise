using API.Startup;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddHttpContextAccessor();

// Register options
builder.Services.RegisterOptions(builder.Configuration);

// Register clients
builder.Services.RegisterHttpClients(builder);

// Register services
builder.Services.RegisterServices();

var UiCorsPolicy = "_UiOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: UiCorsPolicy, policy =>
    {
        policy.WithOrigins(
            "http://localhost:3000",
            "https://localhost:3000",
            "https://denoise.netlify.app"
        ).AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(UiCorsPolicy);
if (!app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}

app.UseAuthorization();

app.MapControllers();

app.Run();