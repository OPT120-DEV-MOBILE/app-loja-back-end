-- CreateTable
CREATE TABLE "roles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "empresa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "tipoDocumento" TEXT NOT NULL,
    "numeroDocumento" TEXT NOT NULL,
    "cep" TEXT,
    "endereco" TEXT,
    "cidade" TEXT,
    "estado" TEXT
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idEmpresa" INTEGER,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "roles" INTEGER NOT NULL,
    "cpf" TEXT NOT NULL,
    "quantidadeDeCompras" INTEGER DEFAULT 0,
    CONSTRAINT "usuario_roles_fkey" FOREIGN KEY ("roles") REFERENCES "roles" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "usuario_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "empresa" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "dataDeFabricacao" DATETIME,
    "dataDeValidade" DATETIME
);

-- CreateTable
CREATE TABLE "venda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idUsuario" INTEGER NOT NULL,
    "idCliente" INTEGER NOT NULL,
    "precoTotal" REAL NOT NULL,
    "parcelas" INTEGER,
    "precoParcelado" REAL,
    "codigoDesconto" TEXT,
    CONSTRAINT "venda_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "venda_idCliente_fkey" FOREIGN KEY ("idCliente") REFERENCES "usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "produto_venda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idVenda" INTEGER NOT NULL,
    "idProduto" INTEGER NOT NULL,
    "quantidade" REAL NOT NULL,
    CONSTRAINT "produto_venda_idVenda_fkey" FOREIGN KEY ("idVenda") REFERENCES "venda" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "produto_venda_idProduto_fkey" FOREIGN KEY ("idProduto") REFERENCES "produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_nome_key" ON "roles"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "empresa_numeroDocumento_key" ON "empresa"("numeroDocumento");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");
