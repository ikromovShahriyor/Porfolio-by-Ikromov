using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Portfolio.API.Migrations
{
    /// <inheritdoc />
    public partial class UpdateTelegramSeed : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "PersonalInfos",
                keyColumn: "Id",
                keyValue: 1,
                column: "TelegramUrl",
                value: "https://t.me/Ikrommov");

            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 1,
                column: "TechStack",
                value: new List<string> { "C#", "ASP.NET Core", "Entity Framework Core", "PostgreSQL", "REST API", "JWT Authentication" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "PersonalInfos",
                keyColumn: "Id",
                keyValue: 1,
                column: "TelegramUrl",
                value: "https://t.me");

            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 1,
                column: "TechStack",
                value: new List<string> { "C#", "ASP.NET Core", "Entity Framework Core", "PostgreSQL", "REST API", "JWT Authentication" });
        }
    }
}
