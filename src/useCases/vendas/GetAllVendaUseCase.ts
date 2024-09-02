import { SearchVendasDTO } from "../../interface/VendasDTO";
import { prisma } from "../../prisma/client";

export class GetAllVendaUseCase {
    async execute({ venda }: SearchVendasDTO): Promise<Object> {
        if (!venda || venda === "undefined") {
            console.log('Buscando todas as vendas');
            const vendas = await prisma.venda.findMany({
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
            return vendas;
        }

        const id = Number(venda);

        if (id) {
            console.log('Procurando vendas com ID de funcionário ou cliente: ', id);

            let vendas = await prisma.venda.findMany({
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

            if (vendas.length > 0) {
                return vendas;
            }

            vendas = await prisma.venda.findMany({
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

            if (vendas.length > 0) {
                return vendas;
            }
        }

        const nome = String(venda);

        console.log('Procurando vendas com nome do funcionário: ', nome);
        const vendasFuncionarios = await prisma.venda.findMany({
            where: {
                Funcionario: {
                    nome: {
                        contains: nome
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

        console.log('Procurando vendas com nome do cliente: ', nome);
        const vendasClientes = await prisma.venda.findMany({
            where: {
                Cliente: {
                    nome: {
                        contains: nome
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

        const vendas = [...vendasFuncionarios];
        vendasClientes.forEach(vendaCliente => {
            if (!vendas.some(vendaFuncionario => vendaFuncionario.id === vendaCliente.id)) {
                vendas.push(vendaCliente);
            }
        });

        return vendas;
    }
}
