# 🛒 MERN Shop - Full Stack E-commerce

> Projeto acadêmico de Arquitetura e Desenvolvimento Web utilizando a stack MERN (MongoDB, Express, React, Node.js).

Este repositório contém a implementação de uma "Fábrica de Software" completa, desenvolvida como requisito para o curso Técnico em Análise e Desenvolvimento de Sistemas (ETEC Fernando Prestes). O projeto demonstra práticas modernas de Engenharia de Software, incluindo uma arquitetura de microsserviços escalável e um pipeline de DevOps integrado.

---

## 🚀 Tecnologias & Arquitetura

O sistema foi construído sobre uma **Arquitetura de 3 Camadas**, unificando o desenvolvimento com JavaScript em todo o ciclo (Full Stack):

* **Frontend (Cliente):** [React.js](https://reactjs.org/) com Hooks, [Redux](https://redux.js.org/) para gestão de estado global e [React-Bootstrap](https://react-bootstrap.github.io/) para UI responsiva.
* **Backend (Servidor):** [Node.js](https://nodejs.org/) e [Express](https://expressjs.com/) para construção de uma API RESTful robusta.
* **Database (Persistência):** [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (NoSQL) com modelagem de dados via [Mongoose](https://mongoosejs.com/).
* **Segurança:** Autenticação via JWT (JSON Web Tokens) e criptografia de senhas com Bcrypt.

---

## 🔄 Fluxo de DevOps (CI/CD)

O ciclo de vida deste software segue um fluxo contínuo de integração e entrega, garantindo qualidade e monitoramento em tempo real.

```mermaid
graph TD
    %% Definição dos Nós
    Plan[Planejamento]
    Code[Codificação]
    Build[Build / Construção]
    Test[Testes]
    Release[Release / GitHub]
    Deploy[Implantação]
    Operate[Operação]
    Monitor[Monitoramento]

    %% Estilização
    style Plan fill:#f9f,stroke:#333,stroke-width:2px
    style Code fill:#bbf,stroke:#333,stroke-width:2px
    style Build fill:#ff9,stroke:#333,stroke-width:2px
    style Monitor fill:#9cf,stroke:#333,stroke-width:2px

    %% Fluxo
    Plan -->|Requisitos| Code
    Code -->|VS Code / React & Node| Build
    Build -->|npm run build| Test
    Test -->|Validação| Release
    Release -->|Git Push| Deploy
    Deploy -->|Nuvem| Operate
    Operate -->|Uso da Loja| Monitor
    Monitor -->|MongoDB Atlas / Logs| Plan
