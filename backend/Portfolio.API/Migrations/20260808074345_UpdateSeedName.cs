using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Portfolio.API.Migrations
{
    /// <inheritdoc />
    public partial class UpdateSeedName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "PersonalInfos",
                keyColumn: "Id",
                keyValue: 1,
                column: "Name",
                value: "Ikromov Shahriyor");

            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 1,
                column: "TechStack",
                value: new List<string> { ".NET Core 10", "React", "PostgreSQL", "Entity Framework" });

            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 2,
                column: "TechStack",
                value: new List<string> { ".NET Microservices", "RabbitMQ", "Redis", "PostgreSQL" });

            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 3,
                column: "TechStack",
                value: new List<string> { "React", "Three.js", "Vite", "Vanilla CSS" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "PersonalInfos",
                keyColumn: "Id",
                keyValue: 1,
                column: "Name",
                value: "Ikromov");

            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 1,
                column: "TechStack",
                value: new List<string> { ".NET Core 10", "React", "PostgreSQL", "Entity Framework" });

            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 2,
                column: "TechStack",
                value: new List<string> { ".NET Microservices", "RabbitMQ", "Redis", "PostgreSQL" });

            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 3,
                column: "TechStack",
                value: new List<string> { "React", "Three.js", "Vite", "Vanilla CSS" });
        }
    }
}
