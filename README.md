# Projeto busca perfil Github

![Logo](https://i.imgur.com/J6PoLUE.png)

Aplicação em React que permite pesquisar perfis de usuários no GitHub e exibir informações públicas como nome, avatar, bio, número de repositórios, seguidores e mais.

## Tecnologias

- Tailwind
- Vite
- Axios

## Funcionalidades

- Buscar usuários do GitHub pelo nome
- Exibir informações básicas do perfil
- Tratamento de erro caso o usuário não seja encontrado

## Rodando o Projeto

Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

Entre na pasta do projeto:

```bash
cd seu-repositorio
```

Instale as dependências:

```bash
npm install
```

ou

```bash
yarn
```

Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

ou

```bash
yarn dev
```

## Como funciona

1. O usuário digita o nome de um perfil do GitHub no campo de busca.
2. O app faz uma requisição à API pública do GitHub.
3. Se encontrado, exibe as informações do perfil.
4. Se não encontrado, mostra uma mensagem de erro.
