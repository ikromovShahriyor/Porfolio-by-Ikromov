using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Portfolio.API.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ContactMessages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Email = table.Column<string>(type: "character varying(150)", maxLength: 150, nullable: false),
                    Subject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Message = table.Column<string>(type: "character varying(2000)", maxLength: 2000, nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactMessages", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PersonalInfos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Title = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Bio = table.Column<string>(type: "text", nullable: false),
                    ProfileImageUrl = table.Column<string>(type: "text", nullable: true),
                    ResumeUrl = table.Column<string>(type: "text", nullable: true),
                    GitHubUrl = table.Column<string>(type: "text", nullable: true),
                    LinkedInUrl = table.Column<string>(type: "text", nullable: true),
                    TelegramUrl = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PersonalInfos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Projects",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Title = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false),
                    TechStack = table.Column<List<string>>(type: "text[]", nullable: false),
                    ImageUrl = table.Column<string>(type: "text", nullable: true),
                    GithubUrl = table.Column<string>(type: "text", nullable: true),
                    LiveUrl = table.Column<string>(type: "text", nullable: true),
                    Order = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projects", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Skills",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Percentage = table.Column<int>(type: "integer", nullable: false),
                    Category = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    IconName = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Skills", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "PersonalInfos",
                columns: new[] { "Id", "Bio", "GitHubUrl", "LinkedInUrl", "Name", "ProfileImageUrl", "ResumeUrl", "TelegramUrl", "Title" },
                values: new object[] { 1, "Assalomu alaykum! Men zamonaviy, tezkor va interaktiv veb-ilovalarni yaratuvchi tajribali .NET va Full-Stack dasturchiman. Orqa fon (Backend) tizimlarida .NET Core hamda ma'lumotlar bazasida PostgreSQL/MSSQL bilan ishlayman. Frontendda esa React va interaktiv 3D grafika (Three.js) yordamida foydalanuvchilarni hayratda qoldiradigan interfeyslarni loyihalashtiraman.", "https://github.com", "https://linkedin.com", "Ikromov", "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80", "#", "https://t.me", ".NET & Full-Stack Developer" });

            migrationBuilder.InsertData(
                table: "Projects",
                columns: new[] { "Id", "Description", "GithubUrl", "ImageUrl", "LiveUrl", "Order", "TechStack", "Title" },
                values: new object[,]
                {
                    { 1, "O'quvchilar bilimini baholash va testlarni onlayn topshirish uchun yaratilgan mukammal tizim. .NET Core Web API, PostgreSQL va React texnologiyalari orqali ishlab chiqilgan.", "https://github.com", "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80", "https://example.com", 1, new List<string> { ".NET Core 10", "React", "PostgreSQL", "Entity Framework" }, "Test Platform & LMS" },
                    { 2, "RabbitMQ yordamida navbatlar boshqaruvi va Redis kesh tizimiga asoslangan, yuqori yuklamalarga chidamli elektron do'kon orqa fon (backend) tizimi.", "https://github.com", "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&q=80", "https://example.com", 2, new List<string> { ".NET Microservices", "RabbitMQ", "Redis", "PostgreSQL" }, "E-Commerce Microservices" },
                    { 3, "Three.js va React Three Fiber asosida mahsulotlarni 3D model shaklida ko'rish va ularning rang hamda dizaynini real vaqtda o'zgartirish imkonini beruvchi ilova.", "https://github.com", "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80", "https://example.com", 3, new List<string> { "React", "Three.js", "Vite", "Vanilla CSS" }, "3D Interactive Showroom" }
                });

            migrationBuilder.InsertData(
                table: "Skills",
                columns: new[] { "Id", "Category", "IconName", "Name", "Percentage" },
                values: new object[,]
                {
                    { 1, "Backend", "Terminal", "C# / .NET 10", 95 },
                    { 2, "Backend", "Cpu", "ASP.NET Core / EF Core", 92 },
                    { 3, "Database", "Database", "PostgreSQL / MSSQL", 88 },
                    { 4, "Frontend", "Globe", "React.js / Vite", 82 },
                    { 5, "Frontend", "Sparkles", "Three.js / WebGL", 75 },
                    { 6, "DevOps", "Settings", "Docker / CI-CD", 80 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ContactMessages");

            migrationBuilder.DropTable(
                name: "PersonalInfos");

            migrationBuilder.DropTable(
                name: "Projects");

            migrationBuilder.DropTable(
                name: "Skills");
        }
    }
}
