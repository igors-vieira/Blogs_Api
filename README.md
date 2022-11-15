# Blog API

# Sobre

Este trabalho foi individual feito na Trybe. Que consiste em testar uma API para um Blog. Nela tem um CRUD de postagens com uma camada de autenticação de pessoas usuárias.

## Técnologias usadas

Back-end:
> Desenvolvido usando: NodeJS, ExpressJS, MYSQL, ES6, Sequelize, Jwt, Joi, Docker

## Clone o repositório:

```
git clone git@github.com:igors-vieira/Blogs_Api.git
cd Blogs_Api/
npm install
```

## Instalando Dependências

<details>
  <summary><strong>🐋 Rodando com Docker</strong></summary>
  
  ## 👉 Com Docker
 
  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**


  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

  - Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

  - A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code;

  > :information_source: Use o comando `docker exec -it blogs_api bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`. (Instale dentro do container)
  
  - **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  - **:warning: Atenção:** O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  - **:warning: Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  - ✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.
  

  <br />
</details>

## Acessando aplicação

> :information_source: Para acessar e necessário algum aplicativo para executar as Rotas e passar as informçoes indispensáveis

- **✨ Dica:** um desses aplicavos pode se o **Insomnia** que pode ser baixado [Aqui](https://insomnia.rest/download)

- Ou pode ser pelo **Thunder Client** que e uma extensão do **VsCode**
