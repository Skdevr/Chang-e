# CLAUDE.md — Instruções obrigatórias do projeto Chang’e

Este arquivo é a fonte principal de instruções para qualquer sessão do Claude Code neste repositório.

## Leitura obrigatória

Antes de analisar uma tarefa, propor um plano, alterar arquivos ou executar comandos que modifiquem o projeto, leia integralmente, nesta ordem:

1. `CLAUDE.md`
2. `.claude/PROJECT.md`
3. `.claude/ARCHITECTURE.md`
4. `.claude/WORKFLOW.md`

Repita essa leitura:

- ao iniciar uma nova sessão;
- antes de cada nova tarefa;
- quando qualquer um desses arquivos for alterado;
- antes de propor mudanças de arquitetura, escopo ou processo.

Não presuma que instruções de sessões anteriores continuam válidas.

## Regra de bloqueio

Não prossiga quando:

- algum documento obrigatório não existir ou estiver inacessível;
- houver contradição relevante entre os documentos;
- a branch ativa for `main`;
- existirem alterações locais desconhecidas;
- a tarefa exigir apagar ou mover arquivos existentes;
- houver risco de comprometer a landing page publicada;
- a solicitação estiver fora do escopo documentado.

Nessas situações:

1. não altere o repositório;
2. não descarte mudanças;
3. explique o impedimento;
4. aguarde orientação do mantenedor.

## Ordem de precedência

Em caso de conflito:

1. instrução explícita mais recente do mantenedor;
2. `CLAUDE.md`;
3. `.claude/WORKFLOW.md`;
4. `.claude/ARCHITECTURE.md`;
5. `.claude/PROJECT.md`;
6. documentação geral do repositório;
7. convenções inferidas do código.

## Preservação do projeto existente

O repositório já contém uma landing page React, TypeScript e Vite publicada em:

https://chang-e-eight.vercel.app/

Ela deve ser preservada.

Não apague, substitua, mova ou reorganize arquivos existentes sem autorização explícita.

Arquivos e diretórios especialmente protegidos:

```text
public/
src/
.gitignore
README.md
index.html
package.json
package-lock.json
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

Não sobrescreva esses arquivos integralmente. Alterações pontuais somente são permitidas quando indispensáveis, justificadas e validadas.

## Git

Nunca trabalhe diretamente na branch `main`.

A branch inicial desta etapa é:

```text
feat/backend-foundation
```

Antes de qualquer modificação:

```bash
git branch --show-current
git status
```

Se estiver na `main`, interrompa a implementação e siga `.claude/WORKFLOW.md`.

Não faça commit, push, merge, rebase, deploy ou criação de pull request sem solicitação explícita.

### Comandos proibidos

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

Não descarte alterações existentes.

## Processo padrão

Para cada tarefa:

1. leia os quatro arquivos de orientação;
2. verifique Git e branch;
3. inspecione o estado atual;
4. identifique o menor escopo necessário;
5. apresente um plano curto;
6. implemente em etapas pequenas;
7. execute validações reais;
8. revise o diff;
9. apresente um relatório objetivo.

Não implemente recursos futuros antecipadamente.

Não declare que algo funciona sem executar a validação correspondente.

## Atualização da documentação

Quando uma decisão permanente for aprovada, atualize:

- produto e escopo: `.claude/PROJECT.md`;
- arquitetura e stack: `.claude/ARCHITECTURE.md`;
- Git, execução e entrega: `.claude/WORKFLOW.md`;
- regras gerais do agente: `CLAUDE.md`.

Não altere decisões estruturais silenciosamente.

## Início obrigatório de cada tarefa

Antes de modificar o projeto, informe de forma curta:

- documentos consultados;
- branch atual;
- estado do Git;
- escopo entendido;
- arquivos provavelmente afetados;
- validações planejadas.

Depois apresente o plano antes de alterações relevantes.
