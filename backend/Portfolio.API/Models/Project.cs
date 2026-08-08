using System.ComponentModel.DataAnnotations;

namespace Portfolio.API.Models;

public class Project
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(200)]
    public string Title { get; set; } = string.Empty;

    [Required]
    public string Description { get; set; } = string.Empty;

    public List<string> TechStack { get; set; } = new();

    public string? ImageUrl { get; set; }

    public string? GithubUrl { get; set; }

    public string? LiveUrl { get; set; }

    public int Order { get; set; }
}
