# 🌙 Chang'e (嫦娥)

> **Uma plataforma moderna para gerenciamento, organização e acompanhamento de mídias asiáticas.**
>
> **Mais do que um AnimeList, um laboratório de Engenharia de Software e Inteligência Artificial.**

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Python](https://img.shields.io/badge/Python-3.13-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Latest-009688)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-336791)

---

# 📖 Sobre o Projeto

O **Chang'e** é uma plataforma Full Stack desenvolvida para centralizar o gerenciamento de mídias asiáticas, permitindo acompanhar de forma organizada o consumo de:

- 📚 Mangás
- 🇰🇷 Manhwas
- 🇨🇳 Manhuas
- 📖 Light Novels
- 🌐 Web Novels
- 📱 Webtoons
- 📺 Animes

O projeto nasceu da necessidade de possuir um ambiente único para organizar leituras, registrar progresso, armazenar fontes, criar anotações e gerar estatísticas pessoais.

Com o tempo, o Chang'e evoluiu para algo maior.

Além de ser um software útil para uso diário, tornou-se um **projeto de longo prazo**, utilizado como laboratório para estudar e aplicar boas práticas de Engenharia de Software, Arquitetura de Sistemas e Inteligência Artificial.

---

# 🎯 Objetivos

O Chang'e possui dois objetivos principais.

## 📚 Produto

Construir uma plataforma moderna para gerenciamento de mídias asiáticas.

Ela deve permitir:

- acompanhar leituras;
- registrar progresso;
- organizar biblioteca;
- armazenar notas;
- gerar estatísticas;
- recomendar conteúdos futuramente.

---

## 🧠 Laboratório Técnico

O Chang'e também funciona como um projeto permanente de aprendizado.

Durante sua evolução serão estudados e aplicados conceitos como:

- Arquitetura Backend
- APIs REST
- Clean Architecture
- Domain Driven Design (quando aplicável)
- SQL e Modelagem
- PostgreSQL
- Engenharia de Software
- Testes Automatizados
- Docker
- Observabilidade
- Inteligência Artificial
- Busca Vetorial
- RAG
- Agentes
- LLMs

Toda tecnologia incorporada deverá resolver um problema real do projeto.

---

# ✨ Funcionalidades

## 📚 Biblioteca

- Cadastro de obras
- Organização por tipo
- Biblioteca personalizada
- Capas
- Metadados

---

## 📖 Controle de Leitura

- Capítulo atual
- Volume atual
- Histórico completo
- Continuação rápida
- Registro automático de progresso

---

## 🔗 Fontes

Cada obra poderá possuir uma ou mais fontes.

Exemplos:

- Scan
- Site oficial
- Agregador
- Web Novel
- Light Novel

---

## 📝 Notas

Cada obra poderá possuir:

- observações;
- spoilers;
- teorias;
- lembretes;
- contexto.

---

## ⭐ Avaliações

Sistema de avaliação independente.

Exemplo:

- História
- Arte
- Ritmo
- Nota Geral

---

## 📊 Analytics

O sistema deverá gerar estatísticas como:

- capítulos lidos;
- obras concluídas;
- tempo médio;
- velocidade de leitura;
- consumo por período;
- distribuição por mídia.

---

## 🔍 Pesquisa

Pesquisa rápida por:

- título;
- título original;
- autor;
- coleção;
- tags;
- gênero.

---

## 🤖 Inteligência Artificial (Roadmap)

Recursos previstos:

- recomendações inteligentes;
- busca semântica;
- OCR;
- RAG;
- chat com a biblioteca;
- classificação automática;
- agentes especializados.

---

# 🏗️ Arquitetura

```text
Frontend (React)

↓

REST API (FastAPI)

↓

Services

↓

Repositories

↓

PostgreSQL
```

Arquitetura baseada em responsabilidades bem definidas.

Cada camada possui uma única função.

---

# 🛠️ Stack

## Frontend

- React 19
- TypeScript
- Vite
- TailwindCSS
- shadcn/ui
- TanStack Query
- React Hook Form
- Zod

---

## Backend

- Python 3.13
- FastAPI
- SQLAlchemy 2 Async
- Pydantic v2
- Alembic
- asyncpg

---

## Banco de Dados

- PostgreSQL 17
- Redis
- pgvector

---

## Testes

- pytest
- pytest-asyncio
- httpx
- coverage.py

---

## Infraestrutura

- Docker
- Docker Compose

---

# 📂 Estrutura do Projeto

```text
chang-e/

├── backend/
├── frontend/
├── docs/
├── .harness/
├── docker/
├── scripts/
└── README.md
```

---

# 🚀 Roadmap

## ✅ Fase 1

- Biblioteca
- Cadastro de obras
- Controle de progresso
- Sistema de usuários
- API REST

---

## 🚧 Fase 2

- Dashboard
- Analytics
- Coleções
- Importação
- Exportação

---

## 🔬 Fase 3

- Embeddings
- Busca Vetorial
- OCR
- Recomendações

---

## 🤖 Fase 4

- Agentes
- RAG
- Chat Inteligente
- Automações

---

# 📚 Documentação

A documentação completa encontra-se na pasta `docs`.

| Documento | Descrição |
|-----------|-----------|
| `docs/SPEC.md` | Especificação funcional do projeto |
| `docs/STACK.md` | Decisões técnicas e stack |
| `.harness/CONVENTIONS.md` | Convenções de desenvolvimento |

---

# 🚀 Executando o Projeto

> **Em desenvolvimento**

A documentação de instalação será adicionada conforme a evolução do projeto.

No futuro será possível iniciar todo o ambiente utilizando apenas:

```bash
docker compose up
```

---

# 🤝 Contribuição

Atualmente o projeto encontra-se em desenvolvimento ativo.

Contribuições serão abertas futuramente.

Enquanto isso, sugestões e discussões são bem-vindas.

---

# 📄 Licença

Distribuído sob a licença **MIT**.

Consulte o arquivo `LICENSE` para mais informações.

---

# 🌙 Sobre o Nome

**Chang'e (嫦娥)** é a deusa chinesa da Lua na mitologia chinesa.

O nome foi escolhido por representar conhecimento, jornada e evolução contínua — conceitos que refletem tanto a proposta do software quanto sua utilização como projeto permanente de estudo e experimentação tecnológica.
