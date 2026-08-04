# PROJECT.md — Produto, visão e escopo do Chang’e

## Visão

O Chang’e é uma plataforma pessoal para organização e acompanhamento de mídias asiáticas:

- mangás;
- manhwas;
- manhuas;
- light novels;
- web novels;
- animes.

O objetivo inicial é permitir que cada usuário mantenha um catálogo pessoal, acompanhe o progresso e consulte informações das obras que consome.

O projeto também funciona como laboratório prático de engenharia de software, arquitetura, segurança, automação e inteligência artificial. A prioridade, porém, é construir um produto funcional antes de adicionar tecnologias avançadas.

## Filosofia de desenvolvimento

A evolução deve seguir esta ordem:

1. validar localmente;
2. construir um MVP funcional;
3. testar a arquitetura;
4. validar segurança e desempenho;
5. amadurecer a experiência do produto;
6. somente depois avaliar integrações avançadas, IA e recursos enterprise.

Priorize:

- simplicidade;
- legibilidade;
- segurança básica correta;
- manutenção;
- testes;
- documentação;
- evolução incremental;
- funcionamento real.

Evite:

- overengineering;
- abstrações sem uso concreto;
- complexidade prematura;
- tecnologias adicionadas apenas por tendência;
- recursos futuros implementados antes da fundação.

## Natureza da plataforma

Nesta fase, o Chang’e é um catálogo pessoal.

Não deve ser tratado como:

- rede social;
- serviço de streaming;
- plataforma de hospedagem;
- agregador de conteúdo pirata;
- leitor integrado;
- ferramenta de scraping;
- marketplace;
- serviço de download;
- plataforma de distribuição de obras.

Links e informações de origem servem somente para organização pessoal.

O Chang’e não deve hospedar, copiar, distribuir ou baixar conteúdo protegido de terceiros.

## Escopo planejado do MVP

### Autenticação

- criação de conta;
- login;
- logout;
- identificação do usuário autenticado;
- proteção de rotas privadas;
- isolamento dos dados por usuário.

A autenticação inicial será própria, com e-mail e senha.

### Catálogo de obras

O usuário deverá conseguir:

- cadastrar;
- editar;
- visualizar;
- excluir;
- listar;
- pesquisar;
- filtrar suas obras.

### Dados básicos de uma obra

- título principal;
- título alternativo;
- descrição;
- URL da capa;
- tipo;
- status de publicação;
- status de acompanhamento;
- quantidade total de capítulos ou episódios;
- capítulo ou episódio atual;
- autor;
- artista;
- origem;
- URL externa;
- observações gerais;
- data de início;
- data de conclusão;
- avaliação pessoal;
- data de criação;
- data de atualização.

### Tipos de obra

```text
manga
manhwa
manhua
light_novel
web_novel
anime
other
```

### Status de acompanhamento

```text
planned
consuming
paused
completed
dropped
```

### Origem

```text
official
scan
fan_translation
novel
other
```

A origem é somente um metadado de organização pessoal.

### Progresso

- registrar o capítulo ou episódio atual;
- atualizar o progresso;
- visualizar porcentagem quando o total for conhecido;
- consultar a última atualização;
- visualizar atividades recentes.

### Dashboard

- total de obras;
- obras em andamento;
- obras concluídas;
- obras pausadas;
- obras planejadas;
- atividades recentes;
- distribuição por tipo.

## Fora do MVP inicial

Não implemente:

- leitor integrado;
- upload de mangás, novels, PDFs ou imagens;
- integração com Google Drive ou OneDrive;
- notas por capítulo;
- comentários, seguidores ou feed social;
- recomendações ou chat com IA;
- scraping;
- importação automática de sites;
- pagamentos ou assinaturas;
- aplicativo mobile nativo;
- Flutter ou React Native;
- notificações complexas;
- gamificação;
- marketplace;
- hospedagem ou distribuição de conteúdo.

## Possíveis fases futuras

Sujeitos a validação:

- notas por capítulo;
- histórico avançado de progresso;
- importação por APIs oficiais;
- leitor de arquivos pertencentes ao usuário;
- integração com armazenamento pessoal;
- PWA completa;
- aplicativo móvel;
- recomendações;
- recursos assistidos por IA;
- SaaS;
- versão self-hosted.

Nenhum recurso futuro deve gerar complexidade prematura na implementação atual.

## Experiência visual

A identidade deve ser:

- nerd;
- profissional;
- moderna;
- elegante;
- tecnológica;
- escura por padrão;
- responsiva.

Referências conceituais:

- Linear;
- Vercel;
- Lua;
- espaço;
- mitologia chinesa;
- ficção científica;
- interfaces futuristas discretas.

Evitar:

- aparência genérica de site de anime;
- excesso de neon ou gradientes;
- poluição visual;
- infantilização;
- animações excessivas;
- componentes sem hierarquia.

Evolução planejada:

```text
Web responsiva → PWA → aplicativo futuro
```

## Critérios de produto

Uma funcionalidade somente entra quando:

- resolve uma necessidade real;
- pertence à fase atual;
- possui critérios de aceite;
- pode ser testada;
- não compromete funcionalidades existentes;
- não cria complexidade desproporcional;
- respeita o isolamento de dados por usuário.

## Etapa atual

O objetivo imediato é criar somente a fundação executável do backend:

- FastAPI;
- configuração;
- PostgreSQL;
- SQLAlchemy assíncrono;
- Alembic;
- Docker Compose;
- health check;
- testes;
- lint;
- tipagem;
- documentação de execução.

Não implementar autenticação nem CRUD de obras nesta etapa.
