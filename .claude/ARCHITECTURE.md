# ARCHITECTURE.md — Arquitetura e stack do Chang’e

## Estado atual

O repositório já contém uma landing page funcional na raiz.

Tecnologias existentes:

- React;
- TypeScript;
- Vite;
- npm.

A landing page está publicada em:

https://chang-e-eight.vercel.app/

Sua estrutura e processo de deploy devem continuar funcionando.

## Organização atual

A landing page permanece na raiz.

O backend deve ser criado em:

```text
backend/
```

Os documentos do Claude ficam em:

```text
.claude/
```

Estrutura de referência:

```text
Chang-e/
├── .claude/
│   ├── PROJECT.md
│   ├── ARCHITECTURE.md
│   └── WORKFLOW.md
├── public/
├── src/
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── db/
│   │   └── main.py
│   ├── migrations/
│   ├── tests/
│   ├── alembic.ini
│   ├── pyproject.toml
│   ├── Dockerfile
│   └── .env.example
├── docs/
│   └── IMPLEMENTATION_PLAN.md
├── CLAUDE.md
├── compose.yaml
├── .gitignore
├── README.md
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

A estrutura é uma referência. Não crie diretórios ou camadas vazias sem uso concreto.

## Restrições estruturais

Nesta fase:

- não mover o frontend para `frontend/`;
- não criar npm workspaces;
- não adicionar Turborepo ou Nx;
- não transformar o projeto em monorepositório complexo;
- não alterar a raiz utilizada pela Vercel;
- não containerizar o frontend sem necessidade;
- não substituir o processo atual de build;
- não adicionar microsserviços;
- não adicionar Kubernetes.

Uma reorganização futura exige decisão explícita.

## Stack do backend

- Python 3.13;
- FastAPI;
- SQLAlchemy 2 assíncrono;
- asyncpg;
- PostgreSQL 17;
- Alembic;
- Pydantic;
- pydantic-settings;
- pytest;
- pytest-asyncio quando necessário;
- HTTPX para testes de API;
- Ruff;
- mypy;
- Docker;
- Docker Compose.

Cada dependência deve possuir finalidade concreta e documentada.

## Frontend

Não atualizar dependências sem necessidade.

Não alterar estrutura, design, rotas, scripts, Vite, Vercel ou lockfile, salvo autorização ou necessidade indispensável para a tarefa.

O frontend deve continuar funcionando com:

```bash
npm install
npm run dev
npm run build
```

## Princípios arquiteturais

O backend deve seguir:

- separação de responsabilidades;
- configuração centralizada;
- tipagem;
- operações assíncronas corretas;
- migrations desde o início;
- código testável;
- dependências explícitas;
- erros coerentes;
- segurança por padrão;
- simplicidade.

Evitar:

- abstrações genéricas prematuras;
- repositories sem necessidade concreta;
- interfaces com uma única implementação;
- herança complexa;
- padrões enterprise prematuros;
- regras de negócio diretamente em rotas;
- estado global mutável;
- credenciais no código;
- dependência direta de fornecedores de IA.

## Estrutura inicial do backend

```text
backend/
├── app/
│   ├── api/
│   │   └── routes/
│   │       └── health.py
│   ├── core/
│   │   └── config.py
│   ├── db/
│   │   ├── base.py
│   │   └── session.py
│   └── main.py
├── migrations/
├── tests/
│   └── test_health.py
├── alembic.ini
├── pyproject.toml
├── Dockerfile
└── .env.example
```

Adapte conforme a necessidade real.

Não crie inicialmente `repositories/`, `services/`, `models/`, `schemas/`, `workers/` ou `events/` se ainda não houver código que justifique essas camadas.

## Configuração

Use `pydantic-settings` para configurações, como:

- nome do serviço;
- ambiente;
- prefixo da API;
- URL do banco;
- CORS;
- parâmetros não sensíveis.

Não versionar `.env`.

Versionar somente:

```text
backend/.env.example
```

Nunca exponha segredos em logs, documentação ou relatórios.

## Banco de dados

Banco:

```text
PostgreSQL 17
```

Driver assíncrono:

```text
asyncpg
```

Exemplo conceitual:

```env
DATABASE_URL=postgresql+asyncpg://change:local_password@db:5432/change
```

Use apenas valores locais no `.env.example`.

O SQLAlchemy deve utilizar a API assíncrona corretamente. O Alembic deve ser configurado desde a fundação.

## API

Prefixo:

```text
/api/v1
```

Endpoint obrigatório:

```http
GET /api/v1/health
```

Resposta:

```json
{
  "status": "ok",
  "service": "change-api"
}
```

Status esperado:

```text
200 OK
```

O health check deve ser simples e determinístico.

Não incluir credenciais, versões internas, stack trace ou detalhes sensíveis.

## Docker

Utilizar preferencialmente:

```text
compose.yaml
```

Serviços iniciais:

- `api`;
- `db`.

O banco deve usar PostgreSQL 17 e possuir health check.

Não adicionar inicialmente:

- Redis;
- RabbitMQ;
- Kafka;
- Elasticsearch;
- Celery;
- frontend;
- proxy reverso;
- observabilidade complexa.

## Segurança

A fundação deve contemplar:

- segredos fora do Git;
- `.env.example`;
- CORS configurável;
- validação das configurações;
- logs sem credenciais;
- tratamento coerente de erros;
- execução sem privilégios excessivos quando viável.

Quando a autenticação for implementada:

- hash seguro de senha;
- tokens com expiração;
- autorização por proprietário;
- isolamento por usuário;
- validação de entrada;
- proteção de rotas privadas.

Autenticação não faz parte da primeira fundação.

## Qualidade

Ferramentas obrigatórias:

```text
pytest
ruff check
ruff format --check
mypy
```

O código deve:

- possuir type hints;
- evitar `Any` desnecessário;
- evitar imports não utilizados;
- seguir o `pyproject.toml`;
- manter testes rápidos;
- evitar dependência do banco em testes que não precisam dele.

## Decisões futuras em aberto

Não presumir decisões sobre:

- hospedagem do backend;
- PostgreSQL gerenciado;
- autenticação social;
- armazenamento de arquivos;
- CDN;
- filas ou cache;
- observabilidade;
- integração com IA;
- aplicativo móvel;
- monetização;
- versão self-hosted.
