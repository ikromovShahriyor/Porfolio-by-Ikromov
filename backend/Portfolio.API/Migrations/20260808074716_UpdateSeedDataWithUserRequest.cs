using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Portfolio.API.Migrations
{
    /// <inheritdoc />
    public partial class UpdateSeedDataWithUserRequest : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.UpdateData(
                table: "PersonalInfos",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Bio", "ProfileImageUrl", "Title" },
                values: new object[] { "Men — 15 yoshli yosh dasturchiman. Hozirda ITLIVE ACADEMY'da dasturlash bo'yicha tahsil olyapman. Asosiy yo'nalishim — .NET Back-end Development. C#, .NET 10, ASP.NET Core, Entity Framework Core, REST API, PostgreSQL va boshqa zamonaviy backend texnologiyalarini o'rganib, amaliy loyihalar yaratib kelmoqdaman. Maqsadim — professional .NET Back-end Developer bo'lish, murakkab va real muammolarni hal qiladigan zamonaviy dasturiy tizimlar yaratish.", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", ".NET Back-end Developer" });

            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Description", "TechStack", "Title" },
                values: new object[] { "Foydalanuvchilarga onlayn testlarni ishlash, natijalarni ko'rish va test jarayonini boshqarish imkonini beruvchi zamonaviy web-platforma. Imkoniyatlari: Ro'yxatdan o'tish va login, JWT autentifikatsiya, testlar, savollar va variantlarni boshqarish, test ishlash, natijalarni avtomatik hisoblash va saqlash, admin panel, testlarni tahrirlash va o'chirish, PostgreSQL bilan ishlash.", new List<string> { "C#", "ASP.NET Core", "Entity Framework Core", "PostgreSQL", "REST API", "JWT Authentication" }, "TestPlatform — Onlayn Test Tizimi" });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 1,
                column: "Name",
                value: "C#");

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Name", "Percentage" },
                values: new object[] { ".NET 10", 93 });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Category", "IconName", "Name", "Percentage" },
                values: new object[] { "Backend", "Globe", "ASP.NET Core", 90 });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Category", "IconName", "Name", "Percentage" },
                values: new object[] { "Backend", "Cpu", "Entity Framework Core", 90 });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Category", "IconName", "Name", "Percentage" },
                values: new object[] { "Backend", "Terminal", "REST API", 88 });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 6,
                columns: new[] { "Category", "IconName", "Name", "Percentage" },
                values: new object[] { "Database", "Database", "PostgreSQL", 85 });

            migrationBuilder.InsertData(
                table: "Skills",
                columns: new[] { "Id", "Category", "IconName", "Name", "Percentage" },
                values: new object[,]
                {
                    { 7, "Database", "Database", "MySQL & SQLite", 80 },
                    { 8, "DevOps", "GitBranch", "Git & GitHub", 85 },
                    { 9, "Backend", "Key", "JWT Authentication", 85 },
                    { 10, "Backend", "Settings", "Swagger / OpenAPI", 90 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.UpdateData(
                table: "PersonalInfos",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Bio", "ProfileImageUrl", "Title" },
                values: new object[] { "Assalomu alaykum! Men zamonaviy, tezkor va interaktiv veb-ilovalarni yaratuvchi tajribali .NET va Full-Stack dasturchiman. Orqa fon (Backend) tizimlarida .NET Core hamda ma'lumotlar bazasida PostgreSQL/MSSQL bilan ishlayman. Frontendda esa React va interaktiv 3D grafika (Three.js) yordamida foydalanuvchilarni hayratda qoldiradigan interfeyslarni loyihalashtiraman.", "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80", ".NET & Full-Stack Developer" });

            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Description", "TechStack", "Title" },
                values: new object[] { "O'quvchilar bilimini baholash va testlarni onlayn topshirish uchun yaratilgan mukammal tizim. .NET Core Web API, PostgreSQL va React texnologiyalari orqali ishlab chiqilgan.", new List<string> { ".NET Core 10", "React", "PostgreSQL", "Entity Framework" }, "Test Platform & LMS" });

            migrationBuilder.InsertData(
                table: "Projects",
                columns: new[] { "Id", "Description", "GithubUrl", "ImageUrl", "LiveUrl", "Order", "TechStack", "Title" },
                values: new object[,]
                {
                    { 2, "RabbitMQ yordamida navbatlar boshqaruvi va Redis kesh tizimiga asoslangan, yuqori yuklamalarga chidamli elektron do'kon orqa fon (backend) tizimi.", "https://github.com", "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&q=80", "https://example.com", 2, new List<string> { ".NET Microservices", "RabbitMQ", "Redis", "PostgreSQL" }, "E-Commerce Microservices" },
                    { 3, "Three.js va React Three Fiber asosida mahsulotlarni 3D model shaklida ko'rish va ularning rang hamda dizaynini real vaqtda o'zgartirish imkonini beruvchi ilova.", "https://github.com", "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80", "https://example.com", 3, new List<string> { "React", "Three.js", "Vite", "Vanilla CSS" }, "3D Interactive Showroom" }
                });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 1,
                column: "Name",
                value: "C# / .NET 10");

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Name", "Percentage" },
                values: new object[] { "ASP.NET Core / EF Core", 92 });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Category", "IconName", "Name", "Percentage" },
                values: new object[] { "Database", "Database", "PostgreSQL / MSSQL", 88 });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Category", "IconName", "Name", "Percentage" },
                values: new object[] { "Frontend", "Globe", "React.js / Vite", 82 });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Category", "IconName", "Name", "Percentage" },
                values: new object[] { "Frontend", "Sparkles", "Three.js / WebGL", 75 });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 6,
                columns: new[] { "Category", "IconName", "Name", "Percentage" },
                values: new object[] { "DevOps", "Settings", "Docker / CI-CD", 80 });
        }
    }
}
