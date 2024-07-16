using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSingleton<EmailService, EmailService>();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.MapPost("/send", 
async 
(
    [FromServices] EmailService emailService,
    [FromBody] EmailInfo emailInfo
) =>
{
    try{
        await emailService.SendEmail(emailInfo);
        return Results.Ok();
    }
    catch(Exception ex)
    {
        return Results.Problem(ex.Message);
    }
});

app.Run();
