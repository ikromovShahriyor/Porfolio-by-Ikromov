using Microsoft.EntityFrameworkCore;
using Portfolio.API.Models;

namespace Portfolio.API.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<PersonalInfo> PersonalInfos => Set<PersonalInfo>();
    public DbSet<Project> Projects => Set<Project>();
    public DbSet<Skill> Skills => Set<Skill>();
    public DbSet<ContactMessage> ContactMessages => Set<ContactMessage>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Seed PersonalInfo
        modelBuilder.Entity<PersonalInfo>().HasData(new PersonalInfo
        {
            Id = 1,
            Name = "Ikromov Shahriyor",
            Title = ".NET Back-end Developer",
            Bio = "Men — 15 yoshli yosh dasturchiman. Hozirda ITLIVE ACADEMY'da dasturlash bo'yicha tahsil olyapman. Asosiy yo'nalishim — .NET Back-end Development. C#, .NET 10, ASP.NET Core, Entity Framework Core, REST API, PostgreSQL va boshqa zamonaviy backend texnologiyalarini o'rganib, amaliy loyihalar yaratib kelmoqdaman. Maqsadim — professional .NET Back-end Developer bo'lish, murakkab va real muammolarni hal qiladigan zamonaviy dasturiy tizimlar yaratish.",
            ProfileImageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
            ResumeUrl = "#",
            GitHubUrl = "https://github.com",
            LinkedInUrl = "https://linkedin.com",
            TelegramUrl = "https://t.me/Ikrommov"
        });

        // Seed Skills
        modelBuilder.Entity<Skill>().HasData(
            new Skill { Id = 1, Name = "C#", Percentage = 95, Category = "Backend", IconName = "Terminal" },
            new Skill { Id = 2, Name = ".NET 10", Percentage = 93, Category = "Backend", IconName = "Cpu" },
            new Skill { Id = 3, Name = "ASP.NET Core", Percentage = 90, Category = "Backend", IconName = "Globe" },
            new Skill { Id = 4, Name = "Entity Framework Core", Percentage = 90, Category = "Backend", IconName = "Cpu" },
            new Skill { Id = 5, Name = "REST API", Percentage = 88, Category = "Backend", IconName = "Terminal" },
            new Skill { Id = 6, Name = "PostgreSQL", Percentage = 85, Category = "Database", IconName = "Database" },
            new Skill { Id = 7, Name = "MySQL & SQLite", Percentage = 80, Category = "Database", IconName = "Database" },
            new Skill { Id = 8, Name = "Git & GitHub", Percentage = 85, Category = "DevOps", IconName = "GitBranch" },
            new Skill { Id = 9, Name = "JWT Authentication", Percentage = 85, Category = "Backend", IconName = "Key" },
            new Skill { Id = 10, Name = "Swagger / OpenAPI", Percentage = 90, Category = "Backend", IconName = "Settings" }
        );

        // Seed Projects
        modelBuilder.Entity<Project>().HasData(
            new Project
            {
                Id = 1,
                Title = "TestPlatform — Onlayn Test Tizimi",
                Description = "Foydalanuvchilarga onlayn testlarni ishlash, natijalarni ko'rish va test jarayonini boshqarish imkonini beruvchi zamonaviy web-platforma. Imkoniyatlari: Ro'yxatdan o'tish va login, JWT autentifikatsiya, testlar, savollar va variantlarni boshqarish, test ishlash, natijalarni avtomatik hisoblash va saqlash, admin panel, testlarni tahrirlash va o'chirish, PostgreSQL bilan ishlash.",
                TechStack = new List<string> { "C#", "ASP.NET Core", "Entity Framework Core", "PostgreSQL", "REST API", "JWT Authentication" },
                ImageUrl = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
                GithubUrl = "https://github.com",
                LiveUrl = "https://example.com",
                Order = 1
            }
        );
    }
}
