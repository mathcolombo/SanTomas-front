# SanTomás: Personal Courses Manager

## Project overview

  SanTomas is an application developed to help users organize, monitor and plan their courses efficiently. It allows you to catalog completed, ongoing and planned courses, with personalized classifications and advanced reporting and progress analysis functionalities.

## Main Features

### 1. Courses Register

* Cadastro de cursos com as seguintes informações
  * Course name
  * institution or platform (ex.: Udemy, Coursera)
  * Link to course page
  * Start and end date
  * Status: “Concluído”, “Em andamento” ou “Planejado”
  * Classificação por categoria e nível de dificuldade

### 2. Progress Control

* Registro do progresso (% concluído) para cursos em andamento.
* Adição de notas e insights aprendidos em cada curso.

### 3. Certificates Upload

* Upload e armazenamento seguro de certificados de cursos concluídos.
* Visualização e download dos certificados cadastrados.

### 4. Reports and Statistics

* Relatórios detalhados sobre
  * Quantidade de cursos por categoria
  * Progresso geral (concluídos, em andamento, planejados)
  * Distribuição por plataforma

* Geração de relatórios em PDF ou Excel.

### 5. Personalized Lists

* Criação de listas temáticas, como “Cursos recomendados” ou “Metas para 2024”.

### 6. Filters and Advanced Search

* Busca por nome, plataforma, status ou categoria.
* Filtros para facilitar a organização e a consulta.

## Technologies Used

### Backend

* Language: C#
* Framework: ASP.NET Core
* ORM: Entity

### Frontend

* Language: TypeScript
* Framework: Angular
* Libs: Angular Material for interface components

### Database

* SGBD: MySQL
* Modeling: Normalização com tabelas para cursos, categorias, plataformas, certificados e progresso.

## System Architecture

### DDD (Domain Driven Design)

* O conceito de DDD é uma abordagem de modelagem de software que segue um conjunto de práticas com objetivo de facilitar a implementação de complexas regras e processos de negócios que tratamos como domínio.
* Portanto vale ressaltar que o conceito de Domain Driven Design como o próprio nome já diz é um assunto que se refere a design de código. Esse design é guiado pelo domínio de sua aplicação, ou seja uma modelagem de software focado em resolver os problemas de complexidade da regra de negócio.

#### Layers

1. Application: Contém as lógicas de negócio e orquestração entre as demais camadas.

2. Domain: Contém as entidades e regras de negócio específicas.

3. Infrastructure: Implementações de acesso ao banco de dados utilizando Entity.

4. Presentation: Desenvolvida com Angular para a interface do usuário.
