# SanTomás: Gerenciador de Cursos Pessoais

## Visão Geral do Projeto

  O SanTomas é uma aplicação desenvolvida para ajudar os usuários a organizar, monitorar e planejar seus cursos de forma eficiente. Ele permite catalogar cursos concluídos, em andamento e planejados, com classificações personalizadas e funcionalidades avançadas de relatórios e análise de progresso.

## Funcionalidades Principais

### 1. Cadastro de Cursos

* Cadastro de cursos com as seguintes informações
  * Nome do curso
  * Instituição ou plataforma (ex.: Udemy, Coursera)
  * Link para a página do curso
  * Datas de início e conclusão
  * Status: “Concluído”, “Em andamento” ou “Planejado”
  * Classificação por categoria e nível de dificuldade

### 2. Controle de Progresso

* Registro do progresso (% concluído) para cursos em andamento.
* Adição de notas e insights aprendidos em cada curso.

### 3. Upload de Certificados

* Upload e armazenamento seguro de certificados de cursos concluídos.
* Visualização e download dos certificados cadastrados.

### 4. Relatórios e Estatísticas

* Relatórios detalhados sobre
  * Quantidade de cursos por categoria
  * Progresso geral (concluídos, em andamento, planejados)
  * Distribuição por plataforma

* Geração de relatórios em PDF ou Excel.

### 5. Listas Personalizadas

* Criação de listas temáticas, como “Cursos recomendados” ou “Metas para 2024”.

### 6. Filtros e Busca Avançados

* Busca por nome, plataforma, status ou categoria.
* Filtros para facilitar a organização e a consulta.

## Tecnologias Utilizadas

### Backend

* Linguagem: C#
* Framework: ASP.NET Core
* ORM: Entity (para gerenciar o acesso ao banco de dados)

### Frontend

* Linguagem: TypeScript
* Framework: Angular
* Bibliotecas: Angular Material para componentes de interface

### Banco de Dados

* SGBD: MySQL
* Modelagem: Normalização com tabelas para cursos, categorias, plataformas, certificados e progresso.

## Arquitetura do Sistema

### DDD (Domain Driven Design)

* O conceito de DDD é uma abordagem de modelagem de software que segue um conjunto de práticas com objetivo de facilitar a implementação de complexas regras e processos de negócios que tratamos como domínio.
* Portanto vale ressaltar que o conceito de Domain Driven Design como o próprio nome já diz é um assunto que se refere a design de código. Esse design é guiado pelo domínio de sua aplicação, ou seja uma modelagem de software focado em resolver os problemas de complexidade da regra de negócio.

#### Camadas

1. Aplicação: Contém as lógicas de negócio e orquestração entre as demais camadas.

2. Domínio: Contém as entidades e regras de negócio específicas.

3. Infraestrutura: Implementações de acesso ao banco de dados utilizando Entity.

4. Apresentação: Desenvolvida com Angular para a interface do usuário.
