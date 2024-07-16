using System.Net;
using System.Net.Mail;

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

        var client = new SmtpClient(server, 587)
        {
            EnableSsl = true,
            UseDefaultCredentials = false,
            Credentials = new NetworkCredential(sender, password),
        };

        await client.SendMailAsync(
            new MailMessage(
                from: sender,
                to: receiver,
                subject: $"{einfo.FirstName} {einfo.LastName}",
                body: $"{einfo.Message}\n Contact at: {einfo.Email}"
            ));
        return;
    }
}