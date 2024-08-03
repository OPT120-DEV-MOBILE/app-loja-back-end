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


  const empresas = [
    {
      nome: 'Empresa 1',
      tipoDocumento: 'CNPJ',
      numeroDocumento: '12.345.678/0001-90',
      cep: '12345-678',
      endereco: 'Rua 1, 123',
      cidade: 'Campo Mourão',
      estado: 'Paraná'
    },
    {
      nome: 'Empresa 2',
      tipoDocumento: 'CNPJ',
      numeroDocumento: '23.456.789/0001-01',
      cep: '23456-789',
      endereco: 'Rua 2, 234',
      cidade: 'Campo Mourão',
      estado: 'Paraná'
    },
    {
      nome: 'Empresa 3',
      tipoDocumento: 'CNPJ',
      numeroDocumento: '34.567.890/0001-12',
      cep: '34567-890',
      endereco: 'Rua 3, 345',
      cidade: 'Campo Mourão',
      estado: 'Paraná'
    }
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

  for (const empresa of empresas) {
    await prisma.empresa.create({
      data: empresa,
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
