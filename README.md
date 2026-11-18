# 🌙 Chang'e (嫦娥)

\<p align="center">   \<strong>Construído para durar. Projetado para evoluir.\</strong> \</p>

\<p align="center">   \<em>Uma nova forma de organizar, descobrir e consumir suas mídias favoritas.\</em> \</p>

---

## 🌕 Por que Chang'e?

Chang'e (嫦娥) é uma figura da mitologia chinesa associada à Lua.

A Lua representa curiosidade, descoberta e evolução contínua — conceitos que inspiram a construção da plataforma.

**Construir continuamente. Aprender constantemente. Evoluir a cada versão.**

---

\<p align="center">
&#x20; \<img src="[https://img.shields.io/badge/status-em%20desenvolvimento-orange?style=flat-square](https://img.shields.io/badge/status-em%20desenvolvimento-orange?style=flat-square)" alt="Status: Em desenvolvimento">
&#x20; \<img src="[https://img.shields.io/badge/license-AGPL--3.0-blue?style=flat-square](https://img.shields.io/badge/license-AGPL--3.0-blue?style=flat-square)" alt="Licença AGPL-3.0">
&#x20; \<img src="[https://img.shields.io/badge/Python-FastAPI-3776AB?style=flat-square&logo=python&logoColor=white](https://img.shields.io/badge/Python-FastAPI-3776AB?style=flat-square\&logo=python\&logoColor=white)" alt="Python">
&#x20; \<img src="[https://img.shields.io/badge/React-TypeScript-3178C6?style=flat-square&logo=react&logoColor=white](https://img.shields.io/badge/React-TypeScript-3178C6?style=flat-square\&logo=react\&logoColor=white)" alt="React">
&#x20; \<img src="[https://img.shields.io/badge/PostgreSQL-Database-4169E1?style=flat-square&logo=postgresql&logoColor=white](https://img.shields.io/badge/PostgreSQL-Database-4169E1?style=flat-square\&logo=postgresql\&logoColor=white)" alt="PostgreSQL">
\</p>

---

## 📖 Sobre o projeto

O **Chang'e** é uma plataforma open source em desenvolvimento, criada para centralizar o gerenciamento de mídias asiáticas em um único ecossistema.

A proposta é oferecer uma experiência integrada para organizar bibliotecas pessoais, descobrir novas obras, acompanhar o progresso de leitura e consumo de conteúdo e, futuramente, explorar novas formas de interação com coleções digitais.

A plataforma contempla diferentes formatos de mídia:

- 📚 Mangás
- 🇰🇷 Manhwas
- 🇨🇳 Manhuas
- 📖 Light Novels
- 🌐 Web Novels
- 📱 Webtoons
- 📺 Animes

Mais do que um gerenciador de conteúdo, o Chang'e é um projeto de longo prazo, desenvolvido de forma incremental e orientado por princípios de Engenharia de Software, qualidade e evolução tecnológica.

## 🎯 Objetivos

O Chang'e possui dois pilares complementares.

### 📚 Plataforma

Construir uma aplicação moderna para gerenciamento de mídias, proporcionando:

- Biblioteca pessoal unificada.
- Organização de obras e coleções.
- Acompanhamento de progresso.
- Descoberta e integração com catálogos externos.
- Experiência integrada de leitura.
- Sincronização entre dispositivos.
- Recursos inteligentes para explorar a própria biblioteca.

### 🧠 Engenharia e inovação

Utilizar o desenvolvimento da plataforma como ambiente prático para estudar, aplicar e validar tecnologias.

Entre os temas explorados estão:

- Engenharia e Arquitetura de Software.
- APIs REST e integração entre serviços.
- Modelagem de dados e PostgreSQL.
- Testes automatizados.
- Containers e infraestrutura.
- Processamento de imagens e OCR.
- Inteligência Artificial e modelos de linguagem.
- Busca semântica e RAG.
- Sistemas de recomendação.

Cada tecnologia deverá ter uma justificativa técnica e atender a uma necessidade real do produto.

## ⚖️ Filosofia e princípios

O desenvolvimento do Chang'e é guiado por alguns princípios fundamentais.

**Simplicidade antes da complexidade**

Soluções simples são mais fáceis de compreender, manter e evoluir.

**Arquitetura antes de tendências**

Tecnologias são escolhidas por suas características e adequação aos problemas, não apenas por popularidade.

**Inteligência Artificial com propósito**

IA não é um diferencial por si só. Seu uso deve melhorar a experiência ou resolver um problema concreto.

**Evolução incremental**

Grandes sistemas são construídos por meio de pequenas entregas contínuas e verificáveis.

**Pensado para o longo prazo**

As decisões técnicas priorizam manutenção, organização, legibilidade, qualidade e capacidade de evolução.

---

## 🏗️ Arquitetura

O Chang'e busca manter baixo acoplamento entre suas camadas, permitindo a evolução independente dos componentes da plataforma.

Visão conceitual da arquitetura:

```text
                  Chang'e
                     │
             ┌───────┴───────┐
             │               │
          Frontend        REST API
       React + TypeScript    │
                         FastAPI
                             │
                    Camada de aplicação
                             │
                      Camada de domínio
                             │
                     Repositórios / ORM
                             │
                        PostgreSQL
```

A arquitetura poderá incorporar novos módulos e serviços conforme as necessidades do produto evoluírem.

## 🛠️ Stack tecnológica

A stack é evolutiva e acompanha as necessidades de cada etapa do projeto.

### Frontend

- React
- TypeScript
- Vite

### Backend

- Python
- FastAPI
- SQLAlchemy
- Alembic
- Pydantic

### Banco de dados

- PostgreSQL

### Infraestrutura e ferramentas

- Docker
- Docker Compose
- Git e GitHub

### Tecnologias em avaliação

- Redis
- pgvector
- Pytest
- HTTPX
- ONNX Runtime
- Modelos de linguagem e visão computacional

As tecnologias em avaliação serão incorporadas somente quando houver necessidade e validação técnica.

---

## 🚀 Roadmap

O desenvolvimento do Chang'e está organizado em cinco fases. O roadmap representa a direção planejada do produto e não significa que todos os recursos já estejam disponíveis.

### 🌱 Fase 1 — Fundação e Biblioteca

**Objetivo:** construir a base da plataforma.

- [ ] Estrutura principal da aplicação.
- [ ] Biblioteca pessoal.
- [ ] Cadastro e gerenciamento de obras.
- [ ] Organização de coleções.
- [ ] Controle de progresso.
- [ ] Dashboard inicial.
- [ ] API REST.
- [ ] Persistência de dados.
- [ ] Autenticação e gerenciamento de usuários.

### 🔎 Fase 2 — Descoberta e Integrações

**Objetivo:** conectar a biblioteca a catálogos externos.

- [ ] Integração com AniList.
- [ ] Integração com MangaDex.
- [ ] Avaliação de MyAnimeList e Kitsu.
- [ ] Investigação de APIs para manhwa, manhua e webtoons.
- [ ] Busca e descoberta de obras.
- [ ] Importação de metadados.
- [ ] Sincronização de informações.
- [ ] Normalização e identificação de obras duplicadas.
- [ ] Catálogo unificado.

### 📖 Fase 3 — Reader e Experiência de Mídia

**Objetivo:** integrar a experiência de leitura à biblioteca.

- [ ] Reader integrado.
- [ ] Suporte a mangás, manhwas, manhuas e webtoons.
- [ ] Suporte a EPUB e PDF.
- [ ] Navegação por páginas e leitura vertical.
- [ ] Histórico e sincronização do progresso.
- [ ] Notas e marcadores.
- [ ] Importação de arquivos.
- [ ] OCR e reconhecimento de texto.
- [ ] Tradução assistida por IA.
- [ ] Sobreposição de tradução sobre imagens.
- [ ] Evolução para renderização de imagens traduzidas.

### ☁️ Fase 4 — Armazenamento e Sincronização

**Objetivo:** oferecer flexibilidade para armazenar e acessar bibliotecas em diferentes ambientes.

- [ ] Armazenamento local.
- [ ] Integração com serviços de nuvem.
- [ ] Suporte a NAS.
- [ ] Integração com armazenamento externo.
- [ ] Sincronização entre dispositivos.
- [ ] Gerenciamento de arquivos.
- [ ] Continuidade da experiência entre dispositivos.

### 🤖 Fase 5 — Inteligência e Ecossistema

**Objetivo:** adicionar recursos inteligentes e ampliar as possibilidades de interação com a biblioteca.

- [ ] Recomendações personalizadas.
- [ ] Busca semântica.
- [ ] Embeddings e RAG.
- [ ] Assistente conversacional.
- [ ] Consultas contextualizadas à biblioteca.
- [ ] Resumos inteligentes.
- [ ] Estatísticas e análises.
- [ ] Glossário inteligente.
- [ ] Agentes e automações.
- [ ] Recursos sociais e comunitários.

---

## 🤖 Inteligência Artificial

A Inteligência Artificial será incorporada progressivamente, com aplicações voltadas à experiência do usuário.

Algumas das possibilidades em desenvolvimento e planejamento:

| Tecnologia               | Aplicação                                     |
| ------------------------ | --------------------------------------------- |
| OCR                      | Reconhecimento de texto em imagens            |
| Tradução contextual      | Tradução considerando diálogos e contexto     |
| Visão computacional      | Análise e processamento de imagens            |
| Embeddings               | Representação semântica de conteúdo           |
| RAG                      | Consultas contextualizadas à biblioteca       |
| Modelos de linguagem     | Assistência e interação por linguagem natural |
| Sistemas de recomendação | Descoberta personalizada de conteúdo          |

O objetivo é combinar modelos locais e serviços externos quando necessário, considerando qualidade, desempenho, privacidade e custo operacional.

## 📂 Documentação

A documentação técnica será organizada e ampliada conforme as funcionalidades forem implementadas.

| Documento         | Descrição                                         |
| ----------------- | ------------------------------------------------- |
| `SPEC.md`         | Especificação funcional                           |
| `ARCHITECTURE.md` | Arquitetura e organização do sistema              |
| `ROADMAP.md`      | Planejamento de evolução                          |
| `AI.md`           | Estratégia de Inteligência Artificial             |
| `READER.md`       | Experiência de leitura e processamento de imagens |
| `STORAGE.md`      | Estratégia de armazenamento                       |
| `ADRs/`           | Registros de decisões arquiteturais               |

Documentos ainda não publicados serão adicionados gradualmente.

## 🚧 Status do desenvolvimento

O Chang'e está em desenvolvimento.

A prioridade atual é consolidar a fundação da plataforma e sua biblioteca, estabelecendo uma base confiável para as próximas fases.

As funcionalidades descritas neste README representam a visão e o planejamento do projeto. Nem todas estão implementadas ou disponíveis para utilização.

Instruções de instalação e execução serão disponibilizadas conforme o ambiente de desenvolvimento for estabilizado.

## 🤝 Contribuições

O Chang'e é um projeto open source e está aberto a sugestões, discussões e contribuições.

Antes de propor alterações maiores, consulte o roadmap e a documentação disponível para compreender a direção do projeto.

Ao contribuir, respeite as diretrizes do repositório e as licenças das dependências utilizadas.

## 📄 Licença

O Chang'e é distribuído sob a licença **GNU Affero General Public License v3.0 (AGPL-3.0)**.

A licença permite utilizar, estudar, modificar e redistribuir o software, inclusive para fins comerciais, desde que suas condições sejam respeitadas.

Em particular, versões modificadas disponibilizadas como serviço pela rede devem oferecer aos usuários que interagem com elas acesso ao código-fonte correspondente, conforme os termos da AGPL-3.0.

Consulte o arquivo [`LICENSE`](LICENSE) para conhecer o texto integral da licença.

---

\<p align="center">
&#x20; \<strong>🌙 Chang'e\</strong>
&#x20; \<br>
&#x20; \<em>Construir continuamente. Aprender constantemente. Evoluir a cada versão.\</em>
\</p>
