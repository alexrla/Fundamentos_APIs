# API



### O que é

- **Acrônimo para Interface de Programação de Aplicações (Application Programming Interface);**
  - **Esperamos que essa interface nos responda algo, baseado naquilo que solicitamos;**
- **Forma simples de comunicação entre aplicações;**
  - **O nosso software pode se conectar a várias APIs;**
- **Não necessita de telas;**
  - **As repostas, geralmente, são em JSON;**
- **Independente do front-end;**
  - **Não possui ligação com o front-end;**
- **Baseada em requisição e resposta;**
  - **Recebe e trata a requisição e, de acordo com a requisição, devolve uma resposta;**



### O que é REST e RESTful

- **REST significa Representational State Transfer (Transferência Representacional de Estado);**
  - **Quando a gente consegue transferir o estado da nossa aplicação, seja da requisição para a API, ou da API para a requisição;**
  - **Estilo de arquitetura, que define como as APIs devem ser criadas (define pontos, onde vamos baseando a nossa API, vamos moldando-a em torno desse estilo de arquitetura);**
  - **Agora, seguindo todos os padrões, a API é considerada RESTful;**
  - **Alguns dos pontos a se observar e considerar importantes, são: respostas uniformes, sem ligação de estado, cache de respostas e outros;**
  - **`https://www.ibm.com/cloud/learn/rest-apis`;**



### O que é uma SPA

- **Single Page Application;**
  - **Quando entramos em uma aplicação SPA, todo o front-end é carregado instantaneamente (temos um arquivo JavaScript que comanda toda a aplicação);**
  - **Frameworks front-end, como: React, Vue ou Angular, são frameworks que forma SPAs (quando damos um clique, por exemplo, em um "link", a página não é recarregada, o que ocorre é uma alteração de DOM) ;**
- **Em uma SPA, temos o front-end separado do back-end;**
  - **Temos uma API para o back-end;**
  - **Frameworks front-end, realizam consultas a APIs;**
- **Anteriormente a SPAs, a arquitetura utilizada era conhecida como Monolith (tínhamos o front-end e o back-end, tudo em uma estrutura só);**



### Verbos HTTP

- **"Andam de mãos dadas com as APIs" e fazem parte do REST;**
- **Temos os seguintes métodos':**
  - **GET (receber/pegar dados);**
  - **POST (enviar dados);**
  - **PUT (atualização completa);**
  - **DELETE (remove dados);**
  - **PATCH (atualização parcial);**
  - **etc...**
- **Cada um representa uma ação na API, ou seja, são essenciais;**
- **É muito importante que as nossas funcionalidades usem os métodos corretos (os métodos são enviados através da requisição);**



### OBS.:

- **Em rotas criadas com o verbo POST, podemos extrair os dados da requisição, através do: `req.body`;**
- **O status na resposta, ajuda a exibir mensagens de erro ou de sucesso, por exemplo;**