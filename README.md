# Banco API Tests

Este projeto contém testes automatizados para a API do banco, utilizando as bibliotecas Supertest para requisições HTTP e Chai para asserções. Os relatórios de teste são gerados utilizando o Mochawesome.

## Contexto

A API sendo testada é a [banco-api](https://github.com/juliodelimas/banco-api), que deve estar em execução para que os testes possam ser executados.

## Componentes do Projeto

- **package.json**: Arquivo de configuração do projeto Node.js, contendo as dependências e scripts.
- **fixtures/**: Pasta com arquivos JSON de dados de teste (ex.: `postLogin.json` e `postTransferencias.json`).
- **helpers/**: Pasta com utilitários auxiliares, como `autenticacao.js` para obter tokens de autenticação.
- **test/**: Pasta com os arquivos de teste (ex.: `login.test.js` e `transferencia.test.js`).
- **mochawesome-report/**: Pasta gerada automaticamente com os relatórios de teste em HTML e JSON.

## Instalação

1. Clone este repositório.
2. Instale as dependências:
   ```
   npm install
   ```
3. Certifique-se de que a API [banco-api](https://github.com/juliodelimas/banco-api) esteja em execução.
4. Configure as variáveis de ambiente no arquivo `.env` (ex.: `BASE_URL=http://localhost:3000`).

## Execução

Para executar os testes, use o comando:
```
npm test
```

Os relatórios serão gerados na pasta `mochawesome-report/`.

## Documentação dos Testes

### Login (`test/login.test.js`)
- **POST /login**: Testa o login com credenciais válidas, esperando status 200 e um token de string.

### Transferências (`test/transferencia.test.js`)
- **POST /transferencias**: 
  - Testa transferência com valor acima de 10 reais, esperando status 201.
  - Testa transferência com valor abaixo de 10 reais, esperando status 422.
- **GET /transferencias/{id}**: Testa a obtenção de uma transferência por ID, esperando status 200 e dados correspondentes.

## Comandos Customizados

- **obterToken (helpers/autenticacao.js)**: Função auxiliar que realiza login e retorna o token de autenticação para uso nos testes subsequentes.