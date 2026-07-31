# 🌙 Chang'e (嫦娥)

<div align="center">

# Construído para durar. Projetado para evoluir.

### Uma plataforma open source para gerenciamento de mídias asiáticas, desenvolvida como um laboratório permanente de Engenharia de Software e Inteligência Artificial.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-orange)
![License](https://img.shields.io/badge/license-AGPL%20v3-blue.svg)
![Python](https://img.shields.io/badge/Python-3.13-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Latest-009688)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-336791)

</div>

---

# 📖 Sobre o Projeto

O **Chang'e** é uma plataforma open source criada para centralizar o gerenciamento de mídias asiáticas em uma única aplicação.

Seu objetivo é oferecer uma experiência moderna para organizar bibliotecas pessoais, acompanhar o progresso de leitura e consumo de conteúdo, além de evoluir continuamente para novas formas de interação com a coleção do usuário.

O projeto suporta diferentes tipos de mídia, como:

- 📚 Mangás
- 🇰🇷 Manhwas
- 🇨🇳 Manhuas
- 📖 Light Novels
- 🌐 Web Novels
- 📱 Webtoons
- 📺 Animes

Mais do que um software de gerenciamento, o Chang'e também é um projeto de longo prazo criado para aplicar, validar e evoluir conceitos de Engenharia de Software em um produto real.

---

# 🌙 Filosofia

O Chang'e nasceu com uma ideia simples:

> **Construir um software que possa evoluir continuamente durante muitos anos.**

Cada decisão tomada dentro do projeto possui um propósito.

Novas funcionalidades devem resolver problemas reais.

Novas tecnologias devem possuir uma justificativa técnica.

A evolução acontece de forma incremental, priorizando simplicidade, organização e facilidade de manutenção.

O objetivo nunca foi desenvolver apenas mais um gerenciador de mídia.

O objetivo é construir uma plataforma sólida, escalável e preparada para crescer continuamente.

---

# 🎯 Objetivos

O Chang'e possui dois pilares complementares.

## 📚 Plataforma

Desenvolver uma aplicação moderna para gerenciamento de mídias asiáticas, oferecendo uma experiência organizada, intuitiva e agradável para acompanhar bibliotecas pessoais.

O foco inicial é construir uma base sólida antes da implementação de recursos mais avançados.

---

## 🧠 Laboratório de Engenharia

O Chang'e também funciona como um laboratório permanente para estudo e aplicação prática de tecnologias modernas.

Ao longo da evolução do projeto serão explorados temas como:

- Engenharia de Software
- Arquitetura de Software
- APIs REST
- Modelagem de Dados
- PostgreSQL
- Testes Automatizados
- Docker
- Observabilidade
- Inteligência Artificial
- Busca Vetorial
- RAG
- Agentes
- Modelos Open Source

Cada tecnologia incorporada deverá existir para resolver um problema concreto da plataforma.

---

# ⚖️ Princípios

O desenvolvimento do Chang'e é guiado por alguns princípios fundamentais.

## Simplicidade antes da complexidade

Software simples é mais fácil de entender, manter e evoluir.

---

## Arquitetura antes de tendências

Tecnologias não são adotadas apenas porque estão em alta.

Cada dependência precisa justificar sua existência.

---

## Inteligência Artificial com propósito

IA não é um diferencial por si só.

Ela será utilizada apenas quando realmente melhorar a experiência da plataforma.

---

## Evolução incremental

Grandes sistemas são construídos através de pequenas entregas contínuas.

---

## Pensado para o longo prazo

Toda decisão técnica prioriza:

- Manutenção
- Escalabilidade
- Organização
- Legibilidade
- Qualidade

---

# 🏗️ Arquitetura

O Chang'e foi projetado para possuir baixo acoplamento entre suas camadas e facilitar sua evolução ao longo do tempo.

```text
                Frontend
           React + TypeScript
                    │
              REST API
                    │
                FastAPI
                    │
         Camada de Aplicação
                    │
           Camada de Domínio
                    │
        Repositórios / ORM
                    │
             PostgreSQL
```

Novos serviços poderão ser adicionados futuramente sem comprometer a arquitetura principal.

---

# 🛠️ Stack Tecnológica

## Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- TanStack Query
- React Hook Form
- Zod

### Objetivos do Frontend

- Interface moderna e responsiva
- Experiência consistente entre desktop, tablet e dispositivos móveis
- Design System reutilizável
- Evolução futura para Progressive Web App (PWA)
- Base preparada para uma futura aplicação mobile

---

## Backend

- Python 3.13
- FastAPI
- SQLAlchemy 2
- Alembic
- Pydantic
- AsyncPG

---

## Banco de Dados

- PostgreSQL
- Redis
- pgvector *(planejado para futuras funcionalidades de IA)*

---

## Infraestrutura

- Docker
- Docker Compose

---

## Testes

- Pytest
- Pytest Asyncio
- HTTPX
- Coverage

---

# 📂 Estrutura do Projeto

```text
chang-e/

├── backend/
├── frontend/
├── docs/
├── docker/
├── scripts/
├── tests/
├── LICENSE
└── README.md
```

---

# 🚀 Roadmap

## ✅ Fase 1 — Fundação

Construção da base da plataforma.

- Biblioteca
- Cadastro de obras
- Controle de progresso
- Sistema de usuários
- API REST
- Dashboard inicial

---

## 🚧 Fase 2 — Experiência

Melhoria da experiência do usuário.

- Analytics
- Coleções
- Importação
- Exportação
- Progressive Web App (PWA)
- Evolução da interface

---

## 🔬 Fase 3 — Plataforma de Leitura

Expansão da plataforma.

- Leitor integrado
- Upload de arquivos
- Integração com Google Drive
- Notas por capítulo
- Marcadores
- OCR
- Pesquisa dentro da obra

---

## 🤖 Fase 4 — Inteligência Artificial

Aplicação prática de IA.

- Recomendações inteligentes
- Busca semântica
- Embeddings
- RAG
- Chat com a biblioteca
- Agentes especializados
- Automações

---

# 📚 Documentação

A documentação do projeto está organizada na pasta `docs`.

| Documento | Descrição |
|-----------|-----------|
| `SPEC.md` | Especificação funcional da plataforma |
| `STACK.md` | Decisões técnicas e tecnologias adotadas |
| `ARCHITECTURE.md` | Arquitetura do sistema |
| `ROADMAP.md` | Planejamento de evolução |
| `AI.md` | Evolução dos recursos de Inteligência Artificial |

---

# 🚀 Executando o Projeto

> **Em desenvolvimento.**

A documentação de instalação será disponibilizada conforme o projeto evoluir.

O objetivo é permitir a inicialização completa da plataforma através de:

```bash
docker compose up
```

---

# 🌕

## Por que "Chang'e"?

**Chang'e (嫦娥)** é a deusa da Lua na mitologia chinesa.

A Lua representa curiosidade, descoberta e evolução contínua.

Esses mesmos conceitos inspiram a filosofia do projeto:

> Construir continuamente.
>
> Aprender constantemente.
>
> Evoluir a cada versão.

---

# 📄 Licença

O código-fonte do Chang'e é distribuído sob a licença **GNU Affero General Public License v3.0 (AGPL-3.0)**.

Essa licença garante que melhorias realizadas e disponibilizadas como serviço também permaneçam abertas para a comunidade, preservando o caráter colaborativo do projeto.

Consulte o arquivo `LICENSE` para mais informações.