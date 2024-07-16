public static class ConfigurationManager
{
    private static readonly IConfiguration _configuration = new ConfigurationBuilder()
    .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
    .AddJsonFile("appsettings.json")
    .AddEnvironmentVariables()
    .Build();

    public static IConfiguration Configuration { get => _configuration; }
}