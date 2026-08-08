using System.ComponentModel.DataAnnotations;

namespace Portfolio.API.Models;

public class Skill
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string Name { get; set; } = string.Empty;

    [Range(0, 100)]
    public int Percentage { get; set; }

    [Required]
    [MaxLength(50)]
    public string Category { get; set; } = string.Empty; // e.g., Frontend, Backend, Database, DevOps

    [MaxLength(50)]
    public string IconName { get; set; } = string.Empty; // e.g., Cpu, Terminal, Database, Globe
}
