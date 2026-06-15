# 🎵 Last.fm - Trabalho Frontend

Este projeto é uma aplicação web inspirada no Last.fm, desenvolvida como requisito de avaliação da disciplina de Frontend. Ele permite que os usuários criem uma conta, façam login de forma segura e registrem (façam o *scrobble*) do seu histórico de músicas ouvidas.

## 🚀 Funcionalidades Implementadas

* **Autenticação de Usuários:** Sistema completo de Cadastro, Login e Logout.
* **Proteção de Rotas (Private Routes):** Usuários não logados são bloqueados de acessar o dashboard e redirecionados para a tela de autenticação.
* **Dashboard Dinâmico:** Listagem em tempo real do histórico de músicas cadastradas.
* **Formulários Validados:** Telas de cadastro e de "Novo Scrobble" blindadas com validação de campos obrigatórios.
* **Design Responsivo:** Interface construída de forma adaptável, funcionando perfeitamente em telas de computadores e smartphones.
* **Feedback Visual:** Indicadores de carregamento (Loading) enquanto os dados trafegam entre o Frontend e a API.

## 🛠️ Tecnologias Utilizadas

* **React + Vite**: Motor do projeto, garantindo renderização rápida e modularização em componentes.
* **Tailwind CSS**: Estilização moderna, responsiva e baseada em classes utilitárias.
* **React Router Dom**: Gerenciamento de rotas SPA (Single Page Application).
* **React Hook Form**: Manipulação e validação eficiente de estados em formulários.
* **JSON Server**: Ferramenta para simular o Banco de Dados e as requisições de uma API REST (Backend).

---

## 💻 Como Rodar o Projeto Localmente

Para que a aplicação funcione corretamente, é necessário rodar o **Servidor Frontend (Vite)** e o **Servidor de Banco de Dados (JSON Server)** simultaneamente. Siga o passo a passo:

### 1. Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) e o Git instalados na sua máquina.

### 2. Clonar e Instalar
Abra o terminal na pasta onde deseja baixar o projeto e rode os comandos:

```bash
git clone [COLOQUE_O_LINK_DO_SEU_GITHUB_AQUI]
cd trabalho-frontend
npm install

```
3. Iniciar o Banco de Dados (Terminal 1)

O Frontend precisa do banco de dados ligado para realizar login e salvar músicas. No terminal, inicie o json-server na porta 3000:

```Bash

npx json-server --watch db.json --port 3000

```
(Deixe este terminal aberto rodando em segundo plano).
4. Iniciar a Aplicação React (Terminal 2)

Abra uma nova aba ou um novo terminal na mesma pasta do projeto e inicie o servidor do Vite:

```Bash

npm run dev

```
5. Acessar no Navegador

Pronto! Com os dois terminais rodando, abra o seu navegador e acesse:
👉 http://localhost:5173/
