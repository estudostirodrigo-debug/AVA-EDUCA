# AVA-EDUCA+

## Descrição

O AVA-EDUCA+ é um protótipo de Ambiente Virtual de Aprendizagem desenvolvido para centralizar informações acadêmicas e facilitar o acompanhamento de cursos e alunos pela equipe pedagógica.

## Funcionalidades

- Login de usuários;
- Dashboard com cursos associados ao professor;
- Cadastro de alunos;
- Validação dos dados cadastrais;
- Consulta automática de endereço por CEP utilizando a API ViaCEP;
- Interface responsiva para computadores e dispositivos móveis.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- ES Modules
- SessionStorage
- API ViaCEP
- Moment.js

## Estrutura do projeto

```text
AVA-EDUCA+/
│
├── assets/
├── cadastro-novo-aluno/
├── css/
├── dados/
├── dashboard/
├── js/
├── login/
│
├── index.html
├── package.json
└── README.md
```

## Como executar

1. Clone ou baixe o repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Execute o arquivo `index.html` utilizando a extensão Live Server.
4. Acesse a tela de login e utilize um dos usuários cadastrados nos arquivos de dados do projeto.

## Melhorias futuras

- Implementação de persistência dos dados dos alunos;
- Ampliação das funcionalidades de gerenciamento acadêmico.
