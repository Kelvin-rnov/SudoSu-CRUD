# SudoSuCRUD
<div align="center">
  <img src="https://img.shields.io/static/v1?label=Manjaro&message=Plataform&color=35bf5c&style=flat-square&logo=Manjaro"/> <img src="https://img.shields.io/static/v1?label=ReactJs&message=v17.0.2&color=61dafb&style=flat-square&logo=React"/> <img src="https://img.shields.io/static/v1?label=Axios&message=v0.24.0&color=blueviolet&style=flat-square&logo=npm"/> <img src="https://img.shields.io/static/v1?label=Express&message=v4.17.1&color=000000&style=flat-square&logo=Express"/> <img src="https://img.shields.io/static/v1?label=Node.js&message=v16.11&color=339933&style=flat-square&logo=Node.js"/> <img src="https://img.shields.io/static/v1?label=Nodemon&message=v2.0.14&color=339933&style=flat-square&logo=Nodemon"/> <img src="https://img.shields.io/static/v1?label=XAMPP&message=v8.0.12&color=fb7a24&style=flat-square&logo=XAMPP"/> <img src="https://img.shields.io/static/v1?label=Bootstrap&message=v5.1.3&color=purple&style=flat-square&logo=bootstrap"/>
</div>

<div align="center">
  <img src = "https://user-images.githubusercontent.com/83087618/133335615-95493cbf-2376-4840-8587-188864a8bf31.png" width = "400px" />
</div>
<div align="center">
  <img src = "https://user-images.githubusercontent.com/83087618/141366633-48d82c8a-92ea-4e1f-8d81-03a150149971.jpg" width= "200px"/>
</div>

## O que é CRUD?
  Você sabe o que é Crud? É a composição da primeira letra de 4 funções básicas de um sistema que trabalha com banco de dados:

  ✅ C: Create (criar) - criar um novo registro;

  👁 R: Read (ler) - ler (exibir) as informações de um registro;

  ♻️ U: Update (atualizar) - atualizar os dados do registro;

  ❌ D: Delete (apagar) - apagar um registro;

  Para desenvolver qualquer projeto, desde uma simples agenda até um sistema complexo de gestão, é necessário seguir esses 4 passos (ou ações) para que o banco de dados seja manipulado corretamente.

## Cuidados com o CRUD
  - Sempre trate e valide as entradas do usuário.

  - Nenhum sistema está a salvo de ataques.

  - Tratar as entradas do usuário vão ajudar muito a evitar ataques de SQL Injection.

  - Sempre que buscar uma lista com muitos registros faça a paginação.

  - Em conjunto busque somente os dados que o usuário precisa ver.
  
## Estrutura do projeto
<div align = "center">
  <img src = "https://user-images.githubusercontent.com/83087618/141374959-829f9d2e-5d29-490f-a779-a0c27f3c8371.jpg" width = "800px" />
</div>

## Visualização
<div align="center">
  <img src = https://user-images.githubusercontent.com/83086622/141512290-30a98b0c-411d-4267-a129-803839f60479.png />
</div>

## Rode em seu PC
  ```bash
  # Clone o projeto
  $ git clone https://github.com/Kelvin-rnov/SudoSuCRUD.git

  # Acesse a pasta SERVER e instale as dependências
  $ npm install express mysql nodemon cors body-parser

  # Acesse a pasta CLIENT e instale as dependências
  $ npm install && npm i axios bootstrap

  # Configure um banco de dados com as seguintes especificações:
  # host: "localhost"
  # user: "root"
  # password: ""
  # database: "CRUDDataBase"

  # Inicie o bano de dados

  # Acesse a pasta server, e incie-o:
  $ npm start

  # Acesse a pasta client, e incie-o:
  $ npm start
  ```
