# Motors Shop - Compra, Venda e Leição de Veículos e Motos

## Sumário

- [Motors Shop - Compra, Venda e Leição de Veículos e Motos](#motors-shop---compra-venda-e-leição-de-veículos-e-motos)
  - [Sumário](#sumário)
  - [1. Resumo](#1-resumo)
  - [Resumo](#resumo)
  - [1. Time de desenvolvimento](#1-time-de-desenvolvimento)
  - [2. Preparativos](#2-preparativos)
    - [2.1. Instalando Dependências](#21-instalando-dependências)
    - [2.2. Executar a aplicação localmente](#22-executar-a-aplicação-localmente)
  - [3. Documentação da API da aplicação](#3-documentação-da-api-da-aplicação)
  - [4. Histórico de desenvolvimento](#4-histórico-de-desenvolvimento)
    - [4.1. Objetivo](#41-objetivo)
    - [4.2. Decisões de desenvolvimento](#42-decisões-de-desenvolvimento)
      - [4.2.1. Ordem de desenvolvimento](#421-ordem-de-desenvolvimento)
      - [4.2.2. Componentes](#422-componentes)
      - [4.2.3. Page (alterar no fim)](#423-page-alterar-no-fim)
      - [4.2.4. Rotas e Consumo da API](#424-rotas-e-consumo-da-api)
      - [4.2.4.1. Rotas (alterar no fim)](#4241-rotas-alterar-no-fim)
      - [4.2.4.2. Consumo da API](#4242-consumo-da-api)
    - [4.2.5. Estilização](#425-estilização)
  - [5. Agradecimentos](#5-agradecimentos)
- [Shalom!](#shalom)

---

## 1. Resumo

## Resumo

[ Voltar ao topo ](#sumário)

Essa aplicação foi desenvolvida para o Projeto Final realizado nas sprints 4-8 do módulo 6 para a Kenzie Academy Brasil no intuito de revisar, treinar e validar os conhecimentos adquiridos ao longo do curso, que serão usados no mercado de trabalho.

O objetivo dessa aplicação é servir como um backend para o projeto fullstack de uma "Olx de veículos".

**Frontend**
- [Frontend Deploy](https://motors-doc-api.vercel.app/)
- [Frontend Repositório](https://github.com/M6-T11-GRUPO4/motors-frontend)

**Backend**
- [Backend Documentação: Rotas e requisições](https://motors-doc-api.vercel.app/)
- [Backend Repositório](https://github.com/M6-T11-GRUPO4/motors-backend)

Tecnologias usadas nesse projeto: (adicionar novos caso necessário)

- [React](https://pt-br.reactjs.org/docs/getting-started.html)
- [Toastfy](https://www.npmjs.com/package/react-toastify)
- [React-hook-form](https://react-hook-form.com)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [React-router-dom](https://v5.reactrouter.com/web/guides/quick-start)
- [React Modal](https://www.npmjs.com/package/react-modal)
- [Tailwind](https://tailwindcss.com/)
- [Eslint](https://eslint.org)

**Base URL do deploy: colocar o link do vercel aqui**

## 1. Time de desenvolvimento

[ Voltar ao topo ](#sumário)

> - [Bruno Tibério Santinoni de Oliveira](https://brunotiberio.vercel.app)
> - [Débora Gomes Corrêa](https://github.com/DebCorrea)
> - [Gabriel Pereira Felberg](https://github.com/gabriel-felberg)
> - [Joyce Pereira da Gama](https://github.com/JoyceGama)

---

## 2. Preparativos

[ Voltar ao topo ](#sumário)

### 2.1. Instalando Dependências

Clone o projeto em sua máquina local e instale por meio do yarn ou npm:

```shell
yarn install
```

```shell
npm install
```

### 2.2. Executar a aplicação localmente

Para executar o projeto em sua máquina local utilize o comando **start** do yarn ou npm:

```shell
yarn start
```

```shell
npm start
```

OBS: Não se esqueça de executar a aplicação de backend para que tudo funcione corretamente, use esse link para ter acesso a ela: https://github.com/brunotiberio/s3-fullstack-teste-backend-brunotiberio

## 3. Documentação da API da aplicação

[ Voltar ao topo ](#sumário)

É possível acessar à documentação completa da API utilizada nessa aplicação.

Nessa mesma documentação é possível adquirir informações sobre os requests, chaves necessárias do request e informações de algumas rotas.

**Base URL da API: https://motors-doc-api.vercel.app/**

## 4. Histórico de desenvolvimento

[ Voltar ao topo ](#sumário)

### 4.1. Objetivo

O Objetivo principal dessa aplicação é a validação dos conhecimentos do time nos seguintes tópicos:

- JavaScript;
- React;
- TypeScript;
- Componentização;
- CSS;

### 4.2. Decisões de desenvolvimento

#### 4.2.1. Ordem de desenvolvimento

1. Inicialmente, decidimos por começar pela análise do Figma proposto, com isso, pudemos observar e pesquisar quais eram as tecnologias, frameworks e libs que poderiam ser usadas no desenvolvimento.
2. Fizemos o estudo das tecnologias que fossem necessárias.
3. Iniciamos o desenvolvimento por duas frentes (backend e frontend) em concomitante. No frontend iniciamos com a criação da arquitetura e componentização
4. Por fim, fizemos os demais fix necessários do código e a documentação da API

#### 4.2.2. Componentes

Foram criados, no total, 4 componentes: (adicionar mais)

- Header: cabeçalho da aplicação, onde é recebido o H1;
- Cards: onde são exibidos os cards relacionados aos anúncios, separados por Carro, Moto e Leilão;
- Footer: componente responsável pelo rodapé da aplicação;
- Mid: responsável pela parte central do footer;

#### 4.2.3. Page (alterar no fim)

Ao total, foram criadas 1 página para a construção da aplicação, sendo a página inicial, a que possui o componente vários componentes já criados.

#### 4.2.4. Rotas e Consumo da API

#### 4.2.4.1. Rotas (alterar no fim)

Para o desenvolvimento dessa aplicação, foram necessárias x rotas, explicação de cada rota

#### 4.2.4.2. Consumo da API

A configuração da API ocorre em "services", utilizando a tecnologia "Axios". Foram divididas em dois "creates", sendo um para rotas públicas e outro para rotas privadas (que busca a informação no localstorage)

Para os dados trafegarem pelos componentes, decidimos usar o contextAPI do próprio React, por ser mais simples de se configurar e escalar a aplicação, a ferramenta permite a criação de um estado com as respostas da API, dessa forma, eu consiguimos enviar os dados gerados por ela, para o componente, tratando os possíveis erros de entrada do usuário e de resposta da API e gerando os resultados esperados.

### 4.2.5. Estilização

Utilizamos como ferramenta de estilização o Tailwind, por se tratar de uma ferramenta completa. Dessa forma, criamos um reset global e as variáveis globais para facilitar a estilização e pudemos criar componentes estilizados.

## 5. Agradecimentos

[ Voltar ao topo ](#sumário)

Queremos agradecer pela oportunidade de fazer esse projeto e pela dedicação do PO Marcelo Cabral por nos auxiliar do início ao fim.


# Shalom!

[ Voltar ao topo ](#sumário)
