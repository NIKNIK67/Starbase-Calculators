using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebPage.Migrations
{
    /// <inheritdoc />
    public partial class Base : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Batteries",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ElecrticityStorage = table.Column<float>(type: "real", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Batteries", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FuelChambers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HeatDispiration = table.Column<float>(type: "real", nullable: false),
                    HeatProduction = table.Column<float>(type: "real", nullable: false),
                    HeatStore = table.Column<float>(type: "real", nullable: false),
                    HeatTransferToHeatsink = table.Column<float>(type: "real", nullable: false),
                    HeatTransferToRadiator = table.Column<float>(type: "real", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FuelChambers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Generators",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HeatStore = table.Column<float>(type: "real", nullable: false),
                    HeatProduction = table.Column<float>(type: "real", nullable: false),
                    HeatDispiration = table.Column<float>(type: "real", nullable: false),
                    ElectricityProduction = table.Column<float>(type: "real", nullable: false),
                    HeatTransferToHeatsink = table.Column<float>(type: "real", nullable: false),
                    HeatTransferToRadiator = table.Column<float>(type: "real", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Generators", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Item",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    type = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Item", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Locations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    imageUrl = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Locations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MaterialNames",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MaterialNames", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PropelantTanks",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PropelantStore = table.Column<float>(type: "real", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PropelantTanks", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Radiators",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HeatStore = table.Column<float>(type: "real", nullable: false),
                    HeatDispiration = table.Column<float>(type: "real", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Radiators", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Thrusters",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ElectricityConsume = table.Column<float>(type: "real", nullable: false),
                    ElectricityConsumePassive = table.Column<float>(type: "real", nullable: false),
                    PropelantConsume = table.Column<float>(type: "real", nullable: false),
                    ThrustProduction = table.Column<float>(type: "real", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Thrusters", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tools",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ElectricityConsume = table.Column<float>(type: "real", nullable: false),
                    ElectricityConsumePassive = table.Column<float>(type: "real", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tools", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Weapons",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ElectricityConsume = table.Column<float>(type: "real", nullable: false),
                    ElectricityConsumePassive = table.Column<float>(type: "real", nullable: false),
                    HeatProduction = table.Column<float>(type: "real", nullable: false),
                    HeatStore = table.Column<float>(type: "real", nullable: false),
                    HeatDispiration = table.Column<float>(type: "real", nullable: false),
                    ElectricityConsumePerShot = table.Column<float>(type: "real", nullable: false),
                    HeatTransferToHeatsink = table.Column<float>(type: "real", nullable: false),
                    HeatTransferToRadiator = table.Column<float>(type: "real", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Weapons", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CompositionElement",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Key = table.Column<int>(type: "int", nullable: false),
                    Value = table.Column<int>(type: "int", nullable: false),
                    RootItemId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CompositionElement", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CompositionElement_Item_RootItemId",
                        column: x => x.RootItemId,
                        principalTable: "Item",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "OreLocation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RootLocationId = table.Column<int>(type: "int", nullable: true),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LocationType = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OreLocation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OreLocation_Locations_RootLocationId",
                        column: x => x.RootLocationId,
                        principalTable: "Locations",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "OreLocationElement",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Rarity = table.Column<int>(type: "int", nullable: false),
                    Material = table.Column<int>(type: "int", nullable: false),
                    RootOreLocationId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OreLocationElement", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OreLocationElement_OreLocation_RootOreLocationId",
                        column: x => x.RootOreLocationId,
                        principalTable: "OreLocation",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_CompositionElement_RootItemId",
                table: "CompositionElement",
                column: "RootItemId");

            migrationBuilder.CreateIndex(
                name: "IX_OreLocation_RootLocationId",
                table: "OreLocation",
                column: "RootLocationId");

            migrationBuilder.CreateIndex(
                name: "IX_OreLocationElement_RootOreLocationId",
                table: "OreLocationElement",
                column: "RootOreLocationId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Batteries");

            migrationBuilder.DropTable(
                name: "CompositionElement");

            migrationBuilder.DropTable(
                name: "FuelChambers");

            migrationBuilder.DropTable(
                name: "Generators");

            migrationBuilder.DropTable(
                name: "MaterialNames");

            migrationBuilder.DropTable(
                name: "OreLocationElement");

            migrationBuilder.DropTable(
                name: "PropelantTanks");

            migrationBuilder.DropTable(
                name: "Radiators");

            migrationBuilder.DropTable(
                name: "Thrusters");

            migrationBuilder.DropTable(
                name: "Tools");

            migrationBuilder.DropTable(
                name: "Weapons");

            migrationBuilder.DropTable(
                name: "Item");

            migrationBuilder.DropTable(
                name: "OreLocation");

            migrationBuilder.DropTable(
                name: "Locations");
        }
    }
}
