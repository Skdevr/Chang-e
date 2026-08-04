# IMPLEMENTATION_PLAN.md — Fundação do backend

Etapa: fundação executável do backend do Chang'e.
Branch: `feat/backend-foundation`.

Este documento descreve somente a etapa atual. Ele não autoriza fases futuras.

## Estado atual

O repositório continha apenas a landing page na raiz, publicada em
<https://chang-e-eight.vercel.app/>.

| Item | Estado encontrado |
|---|---|
| Stack da raiz | React 19, TypeScript 5, Vite 6, Tailwind 4, npm |
| Backend | inexistente |
| `docs/` | inexistente |
| `compose.yaml` | inexistente |
| Git | branch `feat/backend-foundation`, árvore limpa |
| Build inicial da landing page | `npm ci` + `npm run build` executados com sucesso |

## Arquivos preservados

Nenhum arquivo existente foi apagado, movido ou reorganizado.

Permanecem intocados:

```text
public/
src/
.gitignore
index.html
package.json
package-lock.json
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

O frontend continua na raiz. A raiz utilizada pela Vercel não muda. Nenhum npm workspace foi criado.

Único arquivo pré-existente alterado: `README.md`, com edição pontual restrita à seção
"Executando o Projeto", conforme exigido por `.claude/WORKFLOW.md`. O restante do arquivo foi
mantido.

## Escopo

Autorizado e implementado nesta etapa:

- diretório `backend/`;
- Python 3.13;
- FastAPI com prefixo `/api/v1`;
- health check `GET /api/v1/health`;
- configuração via `pydantic-settings`;
- SQLAlchemy 2 assíncrono com `asyncpg`;
- Alembic configurado desde a fundação;
- `Dockerfile` e `compose.yaml` com `api` e `db`;
- `backend/.env.example`;
- pytest, Ruff e mypy;
- documentação de execução.

Fora de escopo, não implementado: usuários, autenticação, CRUD de obras, dashboard, uploads, leitor,
integrações externas, IA, recomendações, pagamentos e recursos sociais.

## Decisões técnicas

| Decisão | Justificativa |
|---|---|
| `backend/` na raiz, frontend inalterado | `ARCHITECTURE.md` proíbe mover o frontend ou criar monorepositório complexo nesta fase |
| `DATABASE_URL` obrigatório, sem valor padrão no código | evita credenciais versionadas; o valor local vive em `.env.example` e no `compose.yaml` |
| `get_settings()` com `lru_cache` | configuração centralizada, sem estado global mutável |
| Engine criada no import de `db/session.py` | `create_async_engine` não abre conexão, então o teste do health check não depende do PostgreSQL |
| `Base` declarativa sem modelos | a camada existe para o Alembic; modelos entram quando houver domínio real |
| `migrations/versions/` vazio | não há tabelas nesta etapa; gerar migration vazia seria ruído |
| Alembic assíncrono lendo a URL de `Settings` | evita duplicar a URL no `alembic.ini` |
| `backend/.gitignore` separado | o `.gitignore` da raiz é protegido; os artefatos Python vivem sob `backend/` |
| Sem `repositories/`, `services/`, `models/`, `schemas/` | `ARCHITECTURE.md` proíbe camadas sem uso concreto |
| Sem Redis, filas, proxy ou observabilidade | fora do escopo da fundação |

## Estrutura criada

```text
backend/
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── api/
│   │   ├── __init__.py
│   │   ├── router.py
│   │   └── routes/
│   │       ├── __init__.py
│   │       └── health.py
│   ├── core/
│   │   ├── __init__.py
│   │   └── config.py
│   └── db/
│       ├── __init__.py
│       ├── base.py
│       └── session.py
├── migrations/
│   ├── env.py
│   ├── script.py.mako
│   └── versions/
├── tests/
│   ├── __init__.py
│   ├── conftest.py
│   └── test_health.py
├── alembic.ini
├── pyproject.toml
├── Dockerfile
├── .env.example
└── .gitignore
compose.yaml
docs/IMPLEMENTATION_PLAN.md
```

## Dependências

Runtime:

| Dependência | Finalidade |
|---|---|
| `fastapi` | framework HTTP da API |
| `uvicorn[standard]` | servidor ASGI de execução |
| `sqlalchemy[asyncio]` | ORM e camada de sessão assíncrona |
| `asyncpg` | driver assíncrono do PostgreSQL |
| `alembic` | versionamento do schema |
| `pydantic` | validação e modelos de resposta |
| `pydantic-settings` | configuração validada a partir do ambiente |

Desenvolvimento:

| Dependência | Finalidade |
|---|---|
| `pytest` | execução dos testes |
| `pytest-asyncio` | suporte a testes assíncronos |
| `httpx` | cliente HTTP para testar a API em memória |
| `ruff` | lint e formatação |
| `mypy` | verificação estática de tipos |

## Riscos

| Risco | Mitigação |
|---|---|
| Quebrar a landing page | nenhum arquivo do frontend alterado; build validado antes e depois |
| Alterar o deploy da Vercel | raiz, `package.json`, `vite.config.ts` e lockfile intocados |
| Versionar segredos | somente `.env.example` com valores locais; `.env` ignorado |
| Versionar venv ou cache | cobertos por `backend/.gitignore` |
| Complexidade prematura | nenhuma camada criada sem uso concreto |

## Impacto na landing page e na Vercel

Nenhum. O backend vive isolado em `backend/`, o `compose.yaml` não containeriza o frontend e nenhuma
configuração de build da raiz foi tocada. `npm run build` foi executado antes e depois das
alterações.

## Etapas

1. confirmar branch e estado do Git;
2. validar o build inicial da landing page;
3. criar este plano;
4. criar `backend/` com configuração de projeto e qualidade;
5. implementar configuração, banco, health check e aplicação;
6. configurar Alembic;
7. escrever os testes;
8. criar `Dockerfile` e `compose.yaml`;
9. atualizar a seção de execução do `README.md`;
10. executar as validações;
11. revisar o diff;
12. apresentar o relatório final.

## Critérios de aceite

- `GET /api/v1/health` responde HTTP 200;
- corpo igual a `{"status": "ok", "service": "change-api"}`;
- o teste do health check não depende do PostgreSQL;
- `pytest`, `ruff check`, `ruff format --check` e `mypy` passam;
- Alembic configurado e capaz de carregar a configuração;
- `docker compose config` válido;
- `npm run build` continua funcionando;
- nenhum arquivo existente apagado;
- nenhum segredo versionado;
- nenhum commit ou push executado.

## Comandos de validação

Frontend, na raiz:

```bash
npm ci
npm run build
```

Backend, em `backend/`:

```bash
pytest
ruff check .
ruff format --check .
mypy .
alembic heads
```

Docker, na raiz:

```bash
docker compose config
docker compose up --build
curl -i http://localhost:8000/api/v1/health
docker compose down
```

## Limitação conhecida do ambiente de execução

O ambiente onde esta etapa foi implementada não possui daemon Docker. Portanto
`docker compose up --build`, o `curl` contra o container e o health check do PostgreSQL em execução
não puderam ser verificados aqui e permanecem pendentes de validação pelo mantenedor.

O health check foi validado por dois caminhos reais e independentes do Docker: `pytest` com HTTPX
sobre a aplicação ASGI, e Uvicorn local com `curl`.

## Próxima etapa recomendada

Modelagem da entidade de obra com a primeira migration real do Alembic, validada contra o PostgreSQL
do `compose.yaml`.

Essa etapa depende de aprovação explícita e não deve ser iniciada automaticamente.
