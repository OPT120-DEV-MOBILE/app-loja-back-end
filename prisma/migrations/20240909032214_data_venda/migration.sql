/*
  Warnings:

  - Added the required column `dataVenda` to the `venda` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_venda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idUsuario" INTEGER NOT NULL,
    "idCliente" INTEGER NOT NULL,
    "precoTotal" REAL NOT NULL,
    "parcelas" INTEGER,
    "precoParcelado" REAL,
    "codigoDesconto" TEXT,
    "dataVenda" DATETIME NOT NULL,
    CONSTRAINT "venda_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "venda_idCliente_fkey" FOREIGN KEY ("idCliente") REFERENCES "usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_venda" ("codigoDesconto", "id", "idCliente", "idUsuario", "parcelas", "precoParcelado", "precoTotal") SELECT "codigoDesconto", "id", "idCliente", "idUsuario", "parcelas", "precoParcelado", "precoTotal" FROM "venda";
DROP TABLE "venda";
ALTER TABLE "new_venda" RENAME TO "venda";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
