Lista de Tarefas 📝 (To-Do List)

O projeto é uma aplicação web desenvolvida para auxiliar usuários na organização de suas atividades diárias. Construída com React, TypeScript e Tailwind CSS, a aplicação oferece uma interface intuitiva e responsiva para o gerenciamento de tarefas.

Este projeto foi um desafio técnico para avaliar as habilidades de frontend.

O objetivo é criar uma aplicação web funcional e responsiva, utilizando boas práticas de desenvolvimento e ferramentas modernas.

A aplicação consiste em um app de lista de tarefas, para auxiliar o usuário a organizar suas atividades diárias.

## **Funcionalidades Principais**

- Adicionar Tarefas: Permite que o usuário insira novas tarefas, que são adicionadas ao início da lista.
- Marcar como Concluída: O usuário pode marcar tarefas como concluídas, que são movidas para o final da lista.
- Remoção de Tarefas: Possibilidade de remover tarefas da lista conforme necessário.
- Persistência de Dados: As tarefas são armazenadas localmente, garantindo que permaneçam disponíveis mesmo após o recarregamento da página ou fechamento do navegador.

## **Destaques do Técnicos**

- Componentização: A aplicação é estruturada em componentes reutilizáveis, promovendo uma organização eficiente e facilitando a manutenção do código.
- Gerenciamento de Estado: Utiliza hooks do React, como useState e useEffect, para o controle de estados e efeitos colaterais, assegurando uma experiência de usuário fluida.
- Estilização com Tailwind CSS: A aplicação é estilizada utilizando Tailwind CSS, permitindo uma rápida prototipagem e consistência visual.
- TypeScript: Adoção de TypeScript para garantir tipagem estática, aumentando a robustez e a previsibilidade do código

## Estrutura final

```
src/
│
├── components/
│   ├── PostForm.jsx # Formulário para criar/editar posts
│   ├── PostList.jsx # Lista de posts
│   ├── PostItem.jsx # Componente para exibir um post individual
│   └── SearchFilter.jsx # Componente para filtrar posts
│
├── services/
│   └── api.js # Configuração da API
│
├── styles/
│   └── global.css # Estilos globais
│
├── App.jsx # Componente principal
│
└── main.jsx # Ponto de entrada da aplicação
```

## Tarefas Realizas

- ✅ **Componentização**: Componentizar a aplicação para melhorar a organização e reutilização de código
- ✅ **Organização de pastas e arquivos**: O projeto segue uma estrutura clara e escalável, como separar componentes, estilos, serviços e utilitários
- ✅ **Persistência de dados**: Os dados das tarefas persistem na página, mesmo após o recarregamento da página
- ✅ **Edição de tarefas**: Funcionalidade para editar tarefas existentes
- ✅ **Filtros de visualização**: Filtros para a visualização de tarefas:
  - Apenas tarefas concluídas
  - Apenas tarefas não concluídas
  - Filtrar tarefas por texto
- ✅ **Estilização**: Estilização da aplicação utilizando TailwindCSS
- ✅ **Ações em tarefas**: Funcionalidade de ações nas tarefas:
  - Marcar todas as tarefas como concluídas
  - Excluir todas as tarefas concluídas
- ✅ **TypeScript**: Utiliza TypeScript para adicionar tipagem ao código
- ✅ **Responsividade**: Aplicação responsiva

## **Tecnologias Utilizadas**

- **React**: Biblioteca principal para construção da interface.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **TailwindCSS**: Estilização dos componentes da aplicação.

## **Pré-requisitos**

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

## **Instalação**

1. Clone o repositório para a sua máquina local:

   ```bash
   git clone https://github.com/livbrandao/react-chalenge-todo-list.git
   ´´´

   ```

2. Acesse o diretório do projeto:

   ```bash
   cd react-chalenge-todo-list
   ´´´

   ```

3. Instale as dependências:

   ```bash
   npm install
   ´´´

   ```

4. Inicie a aplicação:
   ```bash
   npm start
   ´´´
   ```

## Possíveis Melhorias

- Feedback Visual: Adicionar notificações ou alertas para ações como adição, conclusão ou remoção de tarefas, aprimorando a interação com o usuário.
- Testes Automatizados: Desenvolver testes unitários e de integração para assegurar a qualidade e a confiabilidade da aplicação.

##

Desenvolvido com ❤️ por Livia Brandao.
