# Desafio de Estudantes

Este repositório contém um desafio voltado para estudantes que desejam aprimorar suas habilidades em programação e lógica. O objetivo é resolver problemas propostos utilizando as melhores práticas de desenvolvimento seguindo a Arquitetura Limpa.

## Tecnologias Utilizadas
- TypeScript
- Bun
- Elysia.js
- Prisma
- PostgreSQL
- Jest
- Docker

## Estrutura de Pastas
```
desafio-de-estudantes/
├── src/
│   ├── domain/
│   │   ├── entities/
│   │   │   ├── Aluno.ts
│   │   │   ├── Desafio.ts
│   │   │   ├── Resolucao.ts
│   │   │   ├── Teste.ts
│   │   │   └── StatusResolucao.ts
│   │   └── repositories/
│   │       ├── AlunoRepository.ts
│   │       ├── DesafioRepository.ts
│   │       └── ResolucaoRepository.ts
│   ├── usecases/
│   │   ├── corrigirResolucao/
│   │   │   ├── CorrigirResolucaoUseCase.ts
│   │   │   └── CorrigirResolucaoDTO.ts
│   │   ├── submeterResolucao/
│   │   │   ├── SubmeterResolucaoUseCase.ts
│   │   │   └── SubmeterResolucaoDTO.ts
│   │   └── cadastrarDesafio/
│   │       ├── CadastrarDesafioUseCase.ts
│   │       └── CadastrarDesafioDTO.ts
│   ├── adapters/
│   │   ├── controllers/
│   │   │   ├── AlunoController.ts
│   │   │   ├── DesafioController.ts
│   │   │   └── ResolucaoController.ts
│   │   ├── gateways/
│   │   │   ├── AlunoService.ts
│   │   │   ├── DesafioService.ts
│   │   │   └── ResolucaoService.ts
│   │   └── mappers/
│   │       ├── AlunoMapper.ts
│   │       ├── DesafioMapper.ts
│   │       └── ResolucaoMapper.ts
│   ├── infrastructure/
│   │   ├── db/
│   │   │   ├── prisma/
│   │   │   │   └── schema.prisma
│   │   │   └── Knex.ts
│   │   ├── sandbox/
│   │   │   ├── SandboxService.ts
│   │   │   └── SandboxExecutor.ts
│   │   └── services/
│   │       └── EmailService.ts
│   ├── main/
│   │   ├── app.ts
│   │   ├── routes.ts
│   │   └── server.ts
├── .env.example
├── .gitignore
├── bun.lockb
├── package.json
├── README.md
└── docker-compose.yml
```

## Requisitos
Antes de iniciar, certifique-se de ter instalado:
- [Bun](https://bun.sh/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

## Instalação
1. Clone o repositório:
   ```sh
   git clone https://github.com/augustocamati/desafio-de-estudantes.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd desafio-de-estudantes
   ```
3. Instale as dependências:
   ```sh
   bun install
   ```

## Configuração
Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:
```env
PORT=3000
DATABASE_URL=postgresql://usuario:senha@localhost:5432/desafios
```

## Execução
Para iniciar o servidor em modo de desenvolvimento:
```sh
bun run dev
```
Ou para execução em produção:
```sh
bun start
```

## Como Participar
1. Faça um fork do repositório
2. Resolva os desafios propostos
3. Commit suas mudanças (`git commit -m 'Resolução do desafio X'`)
4. Faça um push para sua branch (`git push origin sua-branch`)
5. Abra um Pull Request para revisão

## Licença
Este projeto está sob a licença [MIT](LICENSE).

