using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Nodes;
using Portfolio.API.Data;
using Portfolio.API.Models;

namespace Portfolio.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly ILogger<ContactController> _logger;
    private readonly IConfiguration _configuration;

    public ContactController(AppDbContext context, ILogger<ContactController> logger, IConfiguration configuration)
    {
        _context = context;
        _logger = logger;
        _configuration = configuration;
    }

    [HttpPost]
    public async Task<IActionResult> SubmitMessage([FromBody] ContactMessage message)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        try
        {
            message.CreatedAt = DateTime.UtcNow;
            _context.ContactMessages.Add(message);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Yangi aloqa xabari qabul qilindi: {Name} ({Phone})", 
                message.Name, message.Phone);

            // Telegram orqali xabar yuborish
            await SendTelegramNotification(message);

            return Ok(new { Success = true, Message = "Xabaringiz muvaffaqiyatli saqlandi va Telegram botga yuborildi!" });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Xabarni saqlashda xatolik yuz berdi.");
            return StatusCode(500, new { Success = false, Message = "Serverda xatolik yuz berdi. Iltimos keyinroq qayta urinib ko'ring." });
        }
    }

    private async Task SendTelegramNotification(ContactMessage message)
    {
        try
        {
            string botToken = _configuration["Telegram:BotToken"] ?? "8994680030:AAFRdayJTYtIGGwRJZIXj3BUgea2OyY7pJs";
            string chatId = _configuration["Telegram:ChatId"] ?? "";

            using var httpClient = new HttpClient();

            // Chat ID topilmasa yoki o'rnatilmagan bo'lsa, getUpdates orqali oxirgi yozgan odamning ID-sini olishga urinish
            if (string.IsNullOrEmpty(chatId) || chatId == "YOUR_CHAT_ID")
            {
                var updatesResponse = await httpClient.GetStringAsync($"https://api.telegram.org/bot{botToken}/getUpdates");
                var jsonNode = JsonNode.Parse(updatesResponse);
                var results = jsonNode?["result"]?.AsArray();
                
                if (results != null && results.Count > 0)
                {
                    // Oxirgi yangilanishdan chat ID-ni olish
                    var lastUpdate = results[results.Count - 1];
                    var chat = lastUpdate?["message"]?["chat"];
                    if (chat != null)
                    {
                        chatId = chat["id"]?.ToString() ?? "";
                    }
                }
            }

            if (!string.IsNullOrEmpty(chatId) && chatId != "YOUR_CHAT_ID")
            {
                string text = $"🔔 *Yangi Portfolio Xabari!*\n\n" +
                              $"👤 *Ism, Familiya:* {message.Name}\n" +
                              $"📞 *Telefon:* {message.Phone}\n" +
                              $"✉️ *Email:* {message.Email ?? "Ko'rsatilmagan"}\n\n" +
                              $"📝 *Xabar:* {message.Message}";

                var content = new FormUrlEncodedContent(new[]
                {
                    new KeyValuePair<string, string>("chat_id", chatId),
                    new KeyValuePair<string, string>("text", text),
                    new KeyValuePair<string, string>("parse_mode", "Markdown")
                });

                var response = await httpClient.PostAsync($"https://api.telegram.org/bot{botToken}/sendMessage", content);
                if (!response.IsSuccessStatusCode)
                {
                    _logger.LogWarning("Telegram xabar yuborishda xatolik: {StatusCode}", response.StatusCode);
                }
            }
            else
            {
                _logger.LogWarning("Telegram Chat ID topilmadi. Iltimos botga /start deb yozing.");
            }
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Telegramga xabar yuborishda xatolik.");
        }
    }
}
