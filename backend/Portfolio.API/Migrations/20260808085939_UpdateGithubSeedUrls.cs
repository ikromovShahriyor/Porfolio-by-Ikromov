using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Portfolio.API.Migrations
{
    /// <inheritdoc />
    public partial class UpdateGithubSeedUrls : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "PersonalInfos",
                keyColumn: "Id",
                keyValue: 1,
                column: "GitHubUrl",
                value: "https://github.com/ikromovShahriyor");

            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "GithubUrl", "TechStack" },
                values: new object[] { "https://github.com/ikromovShahriyor/Porfolio-by-Ikromov", new List<string> { "C#", "ASP.NET Core", "Entity Framework Core", "PostgreSQL", "REST API", "JWT Authentication" } });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "PersonalInfos",
                keyColumn: "Id",
                keyValue: 1,
                column: "GitHubUrl",
                value: "https://github.com");

            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "GithubUrl", "TechStack" },
                values: new object[] { "https://github.com", new List<string> { "C#", "ASP.NET Core", "Entity Framework Core", "PostgreSQL", "REST API", "JWT Authentication" } });
        }
    }
}
