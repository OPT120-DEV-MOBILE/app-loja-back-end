/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `precoProduto` to the `produto_venda` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_produto_venda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idVenda" INTEGER NOT NULL,
    "idProduto" INTEGER NOT NULL,
    "precoProduto" REAL NOT NULL,
    "quantidade" REAL NOT NULL,
    CONSTRAINT "produto_venda_idVenda_fkey" FOREIGN KEY ("idVenda") REFERENCES "venda" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "produto_venda_idProduto_fkey" FOREIGN KEY ("idProduto") REFERENCES "produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_produto_venda" ("id", "idProduto", "idVenda", "quantidade") SELECT "id", "idProduto", "idVenda", "quantidade" FROM "produto_venda";
DROP TABLE "produto_venda";
ALTER TABLE "new_produto_venda" RENAME TO "produto_venda";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "usuario_cpf_key" ON "usuario"("cpf");
