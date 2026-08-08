using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Portfolio.API.Data;
using Portfolio.API.Models;

namespace Portfolio.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PortfolioController : ControllerBase
{
    private readonly AppDbContext _context;

    public PortfolioController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetPortfolioData()
    {
        var personalInfo = await _context.PersonalInfos.FirstOrDefaultAsync();
        var projects = await _context.Projects.OrderBy(p => p.Order).ToListAsync();
        var skills = await _context.Skills.ToListAsync();

        if (personalInfo == null)
        {
            return NotFound("Personal info not found.");
        }

        return Ok(new
        {
            PersonalInfo = personalInfo,
            Projects = projects,
            Skills = skills
        });
    }

    [HttpGet("about")]
    public async Task<ActionResult<PersonalInfo>> GetAbout()
    {
        var about = await _context.PersonalInfos.FirstOrDefaultAsync();
        if (about == null)
        {
            return NotFound();
        }
        return Ok(about);
    }

    [HttpGet("projects")]
    public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
    {
        return await _context.Projects.OrderBy(p => p.Order).ToListAsync();
    }

    [HttpGet("skills")]
    public async Task<ActionResult<IEnumerable<Skill>>> GetSkills()
    {
        return await _context.Skills.ToListAsync();
    }
}
