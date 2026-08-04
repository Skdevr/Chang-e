# WORKFLOW.md — Git, execução e critérios de entrega

## Processo obrigatório para toda tarefa

Antes de qualquer implementação:

1. leia `CLAUDE.md`;
2. leia `.claude/PROJECT.md`;
3. leia `.claude/ARCHITECTURE.md`;
4. leia `.claude/WORKFLOW.md`;
5. verifique a branch;
6. verifique o estado do Git;
7. inspecione os arquivos relevantes;
8. valide o estado atual;
9. determine o menor escopo necessário;
10. apresente um plano curto.

Não altere arquivos antes dessas verificações.

## Branch principal protegida

A `main` contém a versão estável da landing page publicada.

Não desenvolva diretamente nela.

Branch da etapa atual:

```text
feat/backend-foundation
```

Verifique:

```bash
git branch --show-current
git status
git remote -v
```

Se estiver na `main` e o diretório estiver limpo:

```bash
git fetch origin
git switch main
git pull --ff-only origin main
git switch -c feat/backend-foundation
```

Se a branch já existir localmente:

```bash
git switch feat/backend-foundation
```

Se existir apenas no remoto:

```bash
git fetch origin
git switch --track origin/feat/backend-foundation
```

Confirme novamente:

```bash
git branch --show-current
```

Resultado obrigatório:

```text
feat/backend-foundation
```

## Alterações locais existentes

Caso `git status` mostre alterações não produzidas pela tarefa atual:

- não descarte;
- não sobrescreva;
- não use stash automaticamente;
- não faça commit;
- não mude de branch à força;
- não continue silenciosamente.

Pare e informe:

- arquivos alterados;
- tipo das alterações;
- risco de conflito;
- decisão necessária do mantenedor.

## Comandos e ações proibidos

```bash
git push --force
git push -f
git reset --hard
git clean -fd
git clean -fdx
git checkout .
git restore .
git rebase main
git merge main
npm audit fix --force
```

Não faça automaticamente:

- commit;
- push;
- merge;
- rebase;
- pull request;
- publicação;
- deploy.

## Análise inicial

Inspecione:

```bash
git branch --show-current
git status
find . -maxdepth 3 -type f | sort
cat package.json
```

Leia:

- `README.md`;
- `package.json`;
- `vite.config.ts`;
- arquivos TypeScript relevantes;
- `.gitignore`;
- documentação e convenções existentes;
- os quatro arquivos de orientação.

Não exiba `.env` ou arquivos com possíveis segredos.

## Validação inicial da landing page

Antes de modificar:

```bash
npm install
npm run build
```

Caso as dependências já estejam instaladas e consistentes, evite mudanças desnecessárias no lockfile.

Não atualize dependências do frontend sem necessidade.

Registre o resultado inicial do build.

## Plano de implementação

Antes do código, crie ou atualize:

```text
docs/IMPLEMENTATION_PLAN.md
```

O plano deve conter:

- estado atual;
- arquivos preservados;
- escopo;
- decisões técnicas;
- estrutura proposta;
- dependências;
- riscos;
- impacto na landing page e Vercel;
- etapas;
- critérios de aceite;
- comandos de validação;
- próxima etapa recomendada.

O plano deve ser objetivo e não autoriza fases futuras.

## Escopo autorizado da etapa atual

- criar `backend/`;
- configurar Python 3.13;
- configurar FastAPI;
- configurar API v1;
- criar health check;
- configurar Pydantic Settings;
- configurar SQLAlchemy assíncrono;
- configurar PostgreSQL 17;
- configurar Alembic;
- criar Dockerfile;
- criar `compose.yaml`;
- criar `.env.example`;
- configurar pytest;
- configurar Ruff;
- configurar mypy;
- documentar execução;
- preservar integralmente a landing page.

Não implementar:

- usuários;
- autenticação;
- CRUD de obras;
- dashboard;
- uploads;
- leitor;
- Google Drive;
- IA;
- recomendações;
- pagamentos;
- recursos sociais.

## Endpoint obrigatório

```http
GET /api/v1/health
```

Resposta esperada:

```json
{
  "status": "ok",
  "service": "change-api"
}
```

Validar HTTP 200.

## Testes obrigatórios

O teste deve validar:

- HTTP 200;
- `status` igual a `ok`;
- `service` igual a `change-api`.

Evite dependência do PostgreSQL no teste do health check.

Execute no backend:

```bash
pytest
ruff check .
ruff format --check .
mypy .
```

Quando uma validação falhar:

1. analise;
2. corrija;
3. execute novamente;
4. registre o resultado real.

## Docker Compose

Valide:

```bash
docker compose config
```

Execute:

```bash
docker compose up --build
```

Verifique:

- API iniciada;
- PostgreSQL iniciado;
- health check do banco;
- conexão da aplicação;
- endpoint da API.

Teste:

```bash
curl -i http://localhost:8000/api/v1/health
```

Encerre:

```bash
docker compose down
```

Não deixe containers desnecessários em execução ao concluir.

## Validação final da landing page

Após as alterações:

```bash
npm run build
```

A tarefa não está concluída se o frontend estiver quebrado.

Não altere configurações da Vercel sem autorização.

## README

Atualize cuidadosamente o README existente, sem substituí-lo por completo.

Adicione instruções validadas para:

- pré-requisitos;
- landing page;
- build do frontend;
- ambiente;
- backend;
- Docker Compose;
- health check;
- testes;
- Ruff;
- mypy;
- encerramento dos containers.

## Revisão final do Git

Antes de concluir:

```bash
git branch --show-current
git status
git diff --stat
git diff
```

Verifique:

- branch correta;
- nenhum arquivo apagado;
- nenhum segredo;
- nenhuma alteração acidental no frontend;
- nenhum cache;
- nenhum ambiente virtual;
- nenhum arquivo temporário;
- nenhuma mudança na Vercel.

Não faça commit ou push.

## Critérios de conclusão

A entrega somente está concluída quando:

- a branch for `feat/backend-foundation`;
- a `main` não tiver sido modificada diretamente;
- nenhum arquivo existente tiver sido apagado;
- a landing page continuar compilando;
- o processo da Vercel estiver preservado;
- backend e PostgreSQL iniciarem;
- o banco estiver saudável;
- o health check responder HTTP 200;
- o Alembic estiver configurado;
- pytest, Ruff e mypy passarem;
- o Docker Compose estiver válido;
- nenhum segredo estiver versionado;
- a documentação estiver atualizada;
- o diff tiver sido revisado;
- nenhum commit ou push tiver sido executado.

## Relatório final

Apresente:

### Documentação consultada
- arquivos `.md` lidos.

### Branch e Git
- branch utilizada;
- estado inicial e final;
- confirmação de que não houve commit, push ou merge.

### Análise inicial
- estrutura encontrada;
- estado da landing page;
- resultado inicial do build.

### Arquivos preservados
- confirmação de que nenhum arquivo existente foi apagado;
- confirmação de que a landing page foi mantida.

### Arquivos criados e modificados
- caminho;
- finalidade ou justificativa.

### Dependências
- dependência;
- finalidade.

### Comandos e validações
Resultados reais de:

```text
npm run build
pytest
ruff check .
ruff format --check .
mypy .
docker compose config
docker compose up --build
GET /api/v1/health
```

### Docker e banco
- serviços;
- portas;
- health checks;
- conexão;
- volumes.

### Vercel
- arquivos relacionados alterados ou não;
- impacto esperado;
- confirmação de que a landing continua na raiz.

### Pendências
- falhas;
- limitações;
- itens não implementados.

### Próxima etapa
Recomende somente uma etapa incremental e não a implemente automaticamente.

## Condições para interromper

Pare antes de modificar quando encontrar:

- branch incorreta;
- alterações locais desconhecidas;
- conflito de Git;
- segredos versionados;
- necessidade de apagar arquivos;
- necessidade de mover a landing page;
- necessidade de alterar a Vercel;
- contradição entre documentos;
- tarefa fora do escopo;
- impedimento técnico que exija mudança arquitetural.

Explique o problema e aguarde decisão.
