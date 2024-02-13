## Instruções do Desafio:

- Crie uma aplicação web que contenha apenas um formulário para coletar endereços de e-mail dos usuários.
- Escolha a linguagem de programação que preferir para implementar a aplicação.
- Containerize sua aplicação usando Docker e disponibilize o código-fonte e o Docker Compose em seu repositório no GitHub.
- Forneça instruções claras sobre como configurar e executar sua aplicação usando o Docker.
- Responda este e-mail com o link para o GitHub e escreva um parágrafo sobre seu processo de desenvolvimento.

# Pré-requisitos

Antes de começar, verifique se você tem os seguintes itens instalados em sua máquina:

- Git
- Docker
- Docker Compose

## Passos

1. **Clonar o repositório do aplicativo:**

   ```bash
   git clone https://github.com/Lucas-Falqueto/Desafio-Redway.git

   ```

2. **Construir a imagem Docker:**
   No terminal, dentro do diretório do seu projeto, execute o seguinte comando para construir a imagem Docker:
   ```bash
   docker-compose build

3. **Iniciar os contêineres Docker:**
   Após a construção da imagem, você pode iniciar os contêineres Docker usando o seguinte comando:
   ```bash
   docker-compose up

4. **Acessar o aplicativo:**
   Após iniciar os contêineres, seu aplicativo deve estar disponível em http://localhost:3000.

5. **Parar os contêineres Docker:**
   Quando você terminar de usar o aplicativo, você pode parar os contêineres Docker usando o seguinte comando:
   ```bash
   docker-compose down
