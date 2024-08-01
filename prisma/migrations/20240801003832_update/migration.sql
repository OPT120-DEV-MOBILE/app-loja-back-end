-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idEmpresa" INTEGER,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "roles" INTEGER NOT NULL,
    "cpf" TEXT NOT NULL,
    "quantidadeDeCompras" INTEGER,
    CONSTRAINT "usuario_roles_fkey" FOREIGN KEY ("roles") REFERENCES "roles" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "usuario_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "empresa" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_usuario" ("cpf", "email", "id", "idEmpresa", "nome", "quantidadeDeCompras", "roles", "senha") SELECT "cpf", "email", "id", "idEmpresa", "nome", "quantidadeDeCompras", "roles", "senha" FROM "usuario";
DROP TABLE "usuario";
ALTER TABLE "new_usuario" RENAME TO "usuario";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
