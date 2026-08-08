using Microsoft.AspNetCore.Mvc;
using Portfolio.API.Data;
using Portfolio.API.Models;

namespace Portfolio.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly ILogger<ContactController> _logger;

    public ContactController(AppDbContext context, ILogger<ContactController> logger)
    {
        _context = context;
        _logger = logger;
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

            _logger.LogInformation("Yangi aloqa xabari qabul qilindi: {Name} ({Email}) - Mavzu: {Subject}", 
                message.Name, message.Email, message.Subject);

            // Bu yerda kelajakda Telegram Bot yoki Email integratsiyasini ulash juda oson bo'ladi.
            // Masalan: await _telegramService.SendMessageAsync(message);

            return Ok(new { Success = true, Message = "Xabaringiz muvaffaqiyatli saqlandi! Tez orada aloqaga chiqamiz." });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Xabarni saqlashda xatolik yuz berdi.");
            return StatusCode(500, new { Success = false, Message = "Serverda xatolik yuz berdi. Iltimos keyinroq qayta urinib ko'ring." });
        }
    }
}
