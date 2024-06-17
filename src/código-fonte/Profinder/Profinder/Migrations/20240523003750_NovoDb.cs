using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Profinder.Migrations
{
    /// <inheritdoc />
    public partial class NovoDb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PrecoServico",
                table: "Usuarios");

            migrationBuilder.AddColumn<string>(
                name: "SobreMim",
                table: "Usuarios",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SobreMim",
                table: "Usuarios");

            migrationBuilder.AddColumn<float>(
                name: "PrecoServico",
                table: "Usuarios",
                type: "real",
                nullable: true);
        }
    }
}
