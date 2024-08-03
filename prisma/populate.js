const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt'); // Adicione esta linha
const prisma = new PrismaClient();

async function main() {
  // INSERT INTO roles (nome) VALUES ("ADMIN"), ("GERENTE"), ("FUNCIONARIO"), ("CLIENTE");
  // INSERT INTO usuario (nome, email, senha, roles, cpf) VALUES ("ADMIN 1", "admin@admin.com", "123456@", 1, "123.456.789-10");

  const roles = [
    { nome: 'ADMIN' },
    { nome: 'GERENTE' },
    { nome: 'FUNCIONARIO' },
    { nome: 'CLIENTE' },
  ];

  const senha = '123456@';
  const hashedSenha = await bcrypt.hash(senha, 8);

  const usuarios = [
    {
      nome: 'ADMIN 1',
      email: 'admin@admin.com',
      senha: hashedSenha,
      roles: 1,
      cpf: '123.456.789-10',
    },
  ];

  for (const role of roles) {
    await prisma.roles.create({
      data: role
    });
  }

  for (const usuario of usuarios) {
    await prisma.usuario.create({
      data: usuario,
    });
  }

}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
