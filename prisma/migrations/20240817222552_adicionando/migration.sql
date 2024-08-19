/*
  Warnings:

  - You are about to alter the column `quantidade` on the `produto_venda` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_produto_venda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idVenda" INTEGER NOT NULL,
    "idProduto" INTEGER NOT NULL,
    "precoProduto" REAL NOT NULL,
    "quantidade" INTEGER NOT NULL,
    CONSTRAINT "produto_venda_idVenda_fkey" FOREIGN KEY ("idVenda") REFERENCES "venda" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "produto_venda_idProduto_fkey" FOREIGN KEY ("idProduto") REFERENCES "produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_produto_venda" ("id", "idProduto", "idVenda", "precoProduto", "quantidade") SELECT "id", "idProduto", "idVenda", "precoProduto", "quantidade" FROM "produto_venda";
DROP TABLE "produto_venda";
ALTER TABLE "new_produto_venda" RENAME TO "produto_venda";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
