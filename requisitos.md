### Estrutura para Aplicação em TypeScript seguindo a Arquitetura Limpa

**Arquitetura Limpa (Clean Architecture)** organiza o código em camadas independentes, separando regras de negócios (domínio) das implementações externas. A estrutura geral pode ser composta das seguintes camadas:

1. **Entidades (Entities)**: Regras de negócios essenciais, puras e independentes.
2. **Casos de Uso (Use Cases)**: Contêm a lógica de aplicação específica.
3. **Adaptadores (Adapters)**: Adaptam a interação do mundo externo com a aplicação.
4. **Interface do Usuário (UI)**: Rota de entrada do sistema (ex.: HTTP, CLI).
5. **Infraestrutura (Infrastructure)**: Implementações externas (DB, APIs, etc.).

---

### 1. **Requisitos**
**Funcionais**:
1. Alunos devem poder submeter a resolução de desafios.
2. A aplicação deve processar e corrigir os desafios submetidos.
3. A correção deve retornar:
   - Nota final.
   - Feedback textual.
4. Professores podem cadastrar desafios com suas descrições, testes e soluções esperadas.

**Não Funcionais**:
1. A aplicação deve ser escalável e modular.
2. Feedback da correção deve ser gerado em menos de 2 segundos.
3. Persistência deve ser feita em um banco de dados relacional (ex.: PostgreSQL).

---

### 2. **Entidades do Domínio**
```plaintext
Aluno
- id: string
- nome: string
- email: string

Desafio
- id: string
- titulo: string
- descricao: string
- testes: Teste[]

Resolucao
- id: string
- alunoId: string
- desafioId: string
- codigo: string
- status: StatusResolucao
- nota: number
- feedback: string

Teste
- id: string
- entrada: string
- saidaEsperada: string

StatusResolucao (enum)
- PENDENTE
- CORRIGIDO
```

---

### 3. **Casos de Uso**
#### Submeter Resolução de Desafio
- **Entrada**:
  - ID do desafio.
  - ID do aluno.
  - Código submetido.
- **Processamento**:
  1. Validar existência do aluno e do desafio.
  2. Executar código contra os testes do desafio.
  3. Gerar nota e feedback.
  4. Salvar resultado no banco.
- **Saída**:
  - Nota.
  - Feedback.

#### Corrigir Resolução
- **Entrada**:
  - Resolução submetida.
- **Processamento**:
  1. Executar o código submetido usando os testes do desafio.
  2. Comparar saídas.
  3. Calcular nota baseada no número de acertos.
  4. Gerar feedback.
- **Saída**:
  - Nota.
  - Feedback.

#### Cadastrar Desafio
- **Entrada**:
  - Título.
  - Descrição.
  - Testes.
- **Processamento**:
  1. Validar os testes (ex.: entradas/saídas são válidas?).
  2. Persistir desafio no banco.
- **Saída**:
  - Confirmação de cadastro.

---

### 4. **Camadas e Dependências**
#### Domínio (Entidades)
- Independente de qualquer outra camada.

#### Casos de Uso
- Depende apenas da camada **Domínio**.

#### Adaptadores
- Depende dos **Casos de Uso** para implementar os gateways (ex.: serviços de alunos, desafios, resoluções).

#### Infraestrutura
- Contém implementações concretas de persistência, execução de código (ex.: usando sandbox).

#### UI
- Camada responsável por expor endpoints ou interface gráfica para interação.

---

### 5. **Estrutura de Pastas**
```
src/
├── domain/
│   ├── entities/
│   │   ├── Aluno.ts
│   │   ├── Desafio.ts
│   │   ├── Resolucao.ts
│   │   ├── Teste.ts
│   │   └── StatusResolucao.ts
│   └── repositories/
│       ├── AlunoRepository.ts
│       ├── DesafioRepository.ts
│       └── ResolucaoRepository.ts
├── usecases/
│   ├── corrigirResolucao/
│   │   ├── CorrigirResolucaoUseCase.ts
│   │   └── CorrigirResolucaoDTO.ts
│   ├── submeterResolucao/
│   │   ├── SubmeterResolucaoUseCase.ts
│   │   └── SubmeterResolucaoDTO.ts
│   └── cadastrarDesafio/
│       ├── CadastrarDesafioUseCase.ts
│       └── CadastrarDesafioDTO.ts
├── adapters/
│   ├── controllers/
│   │   ├── AlunoController.ts
│   │   ├── DesafioController.ts
│   │   └── ResolucaoController.ts
│   ├── gateways/
│   │   ├── AlunoService.ts
│   │   ├── DesafioService.ts
│   │   └── ResolucaoService.ts
│   └── mappers/
│       ├── AlunoMapper.ts
│       ├── DesafioMapper.ts
│       └── ResolucaoMapper.ts
├── infrastructure/
│   ├── db/
│   │   ├── prisma/
│   │   │   └── schema.prisma
│   │   └── Knex.ts
│   ├── sandbox/
│   │   ├── SandboxService.ts
│   │   └── SandboxExecutor.ts
│   └── services/
│       └── EmailService.ts
└── main/
    ├── app.ts
    ├── routes.ts
    └── server.ts
```

---

### 6. **Fluxo de Dados**
1. **Aluno envia resolução** pela API.
2. **Controlador (Controller)** recebe a requisição e chama o caso de uso adequado.
3. O **Caso de Uso** processa a lógica utilizando repositórios e entidades.
4. Resultados são retornados para o adaptador, que prepara a resposta.
5. Resposta é enviada ao cliente.

---

### 7. **Tecnologias Sugeridas**
- **TypeScript**: Linguagem principal.
- **Prisma/Knex**: ORM/Query Builder para persistência.
- **Express**: Framework para API HTTP.
- **Jest**: Testes unitários e de integração.
- **Docker**: Contêineres para isolar execução de código.

Precisa de algum detalhe específico ou ajuste?