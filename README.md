# JavaScript Fetch API — JSONPlaceholder

## Sobre o projeto

Este projeto foi desenvolvido com o objetivo de praticar e consolidar conhecimentos em JavaScript, com foco no consumo de APIs externas utilizando a Fetch API.

A aplicação realiza uma requisição HTTP à API JSONPlaceholder, permitindo consultar, transformar, filtrar e localizar usuários por meio de métodos de manipulação de arrays.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Fetch API
- JSONPlaceholder

## Funcionalidades implementadas

- Consumo de dados externos utilizando `fetch()`.
- Utilização de `async/await` para trabalhar com operações assíncronas.
- Tratamento de exceções utilizando `try/catch`.
- Validação de respostas HTTP através de `response.ok` e `response.status`.
- Interpretação de dados JSON utilizando `response.json()`.
- Transformação de dados utilizando `map()`.
- Filtragem de usuários utilizando `filter()`.
- Localização de usuários específicos utilizando `find()`.
- Verificação de resultados inexistentes.

## Funcionamento

Ao clicar no botão **Consultar**, a aplicação realiza uma requisição à API JSONPlaceholder e executa as seguintes operações:

1. Consulta os usuários disponibilizados pela API.
2. Verifica o status da resposta HTTP.
3. Interpreta os dados recebidos no formato JSON.
4. Utiliza `map()` para selecionar as propriedades `id`, `name`, `username` e `email`.
5. Utiliza `filter()` para selecionar usuários com ID maior ou igual a 5.
6. Utiliza `find()` para localizar o usuário com username `Elwyn.Skiles`.
7. Apresenta os resultados no console do navegador.

## Como executar

1. Clone este repositório:

   ```bash
   git clone https://github.com/viniciusSantosBarros/javascript_fetch_jsonplaceholder.git
   ```

2. Acesse a pasta do projeto.

3. Abra o arquivo `index.html` no navegador.

4. Clique no botão **Consultar**.

5. Abra o console do navegador (`F12`) para visualizar os resultados.

## API utilizada

[JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## Objetivo de aprendizagem

Este projeto faz parte do meu processo de desenvolvimento em JavaScript, com foco na compreensão de requisições HTTP, programação assíncrona, tratamento de erros e manipulação de dados provenientes de APIs.

