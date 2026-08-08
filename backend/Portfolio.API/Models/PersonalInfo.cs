using System.ComponentModel.DataAnnotations;

namespace Portfolio.API.Models;

public class PersonalInfo
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string Name { get; set; } = string.Empty;

    [Required]
    [MaxLength(100)]
    public string Title { get; set; } = string.Empty;

    [Required]
    public string Bio { get; set; } = string.Empty;

    public string? ProfileImageUrl { get; set; }

    public string? ResumeUrl { get; set; }

    public string? GitHubUrl { get; set; }

    public string? LinkedInUrl { get; set; }

    public string? TelegramUrl { get; set; }
}
