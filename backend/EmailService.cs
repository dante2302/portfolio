using MailKit.Net.Smtp;
using MimeKit;

public class EmailService()
{
    public async Task SendEmail(EmailInfo einfo)
    {
        string? sender = ConfigurationManager.Configuration["SmtpSettings:Sender"];
        string? password = ConfigurationManager.Configuration["SmtpSettings:Password"];
        string? server = ConfigurationManager.Configuration["SmtpSettings:Server"];
        string? receiver = ConfigurationManager.Configuration["SmtpSettings:Receiver"];

        if(sender is null || password is null || server is null || receiver is null)
            throw new InvalidOperationException("Invalid config");

        var emailMessage = new MimeMessage();
        emailMessage.From.Add(new MailboxAddress("Porfolio B", sender));
        emailMessage.To.Add(new MailboxAddress("D", receiver));
        emailMessage.Body = new TextPart("plain")
        {
            Text = $"{einfo.FirstName} {einfo.LastName}\n{einfo.Message}\nContact at: {einfo.Email}"
        };

        using var client = new SmtpClient();
        await client.ConnectAsync(server, 587);
        await client.AuthenticateAsync(sender, password);
        await client.SendAsync(emailMessage);
        await client.DisconnectAsync(true);
        return;
    }
}