import { SearchVendasDTO } from "../../interface/VendasDTO";
import { prisma } from "../../prisma/client";

export class GetAllVendaUseCase{
    async execute({ venda }: SearchVendasDTO): Promise<Object>{


      let id = Number(venda);


      console.log('\n\nProcurando vendas com id de funcionario: ', id);

      if(id){
        
        const vendas = await prisma.venda.findMany({
          where: {
            idUsuario: id
          },
          include: {
            Funcionario: {
              select: {
                id: true,
                nome: true,
                email: true,
              }
            },
            Cliente: {
              select: {
                id: true,
                nome: true,
                email: true,
              }
            }
          }
        });
        
        if(vendas.length !== 0)
          return vendas;
      }


      console.log('\n\nProcurando vendas com id de cliente: ', id);

      if(id){
        
        const vendas = await prisma.venda.findMany({
          where: {
            idCliente: id
          },
          include: {
            Funcionario: {
              select: {
                id: true,
                nome: true,
                email: true,
              }
            },
            Cliente: {
              select: {
                id: true,
                nome: true,
                email: true,
              }
            }
          }
        });
        
        if(vendas.length !== 0)
          return vendas;
      }


      console.log('\n\nProcurando vendas com nome do funcionario: ', venda);

     const vendasFuncionarios = await prisma.venda.findMany({
        where: {
          Funcionario: {
            nome:{
              contains: String(venda)
            }
          }
        },
        include: {
          Funcionario: {
            select: {
              id: true,
              nome: true,
              email: true,
            }
          },
          Cliente: {
            select: {
              id: true,
              nome: true,
              email: true,
            }
          }
        }
      });


      console.log('\n\nProcurando vendas com nome do cliente: ', venda);

     const vendasClientes = await prisma.venda.findMany({
        where: {
          Cliente: {
            nome:{
              contains: String(venda)
            }
          }
        },
        include: {
          Funcionario: {
            select: {
              id: true,
              nome: true,
              email: true,
            }
          },
          Cliente: {
            select: {
              id: true,
              nome: true,
              email: true,
            }
          }
        }
      });


      let vendas = vendasFuncionarios;


      vendasClientes.forEach(venda => {
        let existe = false;
        
        vendas.forEach(venda2 => {
          if(venda.id === venda2.id){
            existe = true
          }
        });

        if(!existe)
          vendas.push(venda);
      });

      return vendas;
    }
}