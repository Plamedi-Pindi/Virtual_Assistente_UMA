# Chatbot Frontend

Este é o frontend de um chatbot desenvolvido com React.js, Vite, Tailwind CSS e TypeScript.

## 🔗 Tecnologias Utilizadas

* [React.js](https://react.dev/)

* [Vite](https://vite.dev/)

* [Tailwind CSS](https://tailwindcss.com/)

* [TypeScript](https://www.typescriptlang.org/)


## 🔗 Como Executar o Projeto

1. **Clone o repositório**
    ```sh
    git clone https://github.com/seu-usuario/seu-repositorio.gitcd seu-repositorio
 
2. **Instale as dependências**
    ```sh
    npm install

3. **Execute o servidor de desenvolvimento**
    ```hs
    npm run dev

4. **Acesse no navegador** O projeto estará rodando em:
    http://localhost:5173/

## 🔗 Estrutura do Projeto

    ```sh
      /
    ├── src/
    │   ├── components/  # Componentes reutilizáveis
    │   ├── pages/       # Páginas principais
    │   ├── assets/      # Imagens, ícones e estilos globais
    │   ├── hooks/       # Hooks personalizados
    │   ├── services/    # Requisições para API do chatbot
    │   ├── App.tsx      # Componente principal
    │   ├── main.tsx     # Ponto de entrada do React
    │
    ├── public/          # Arquivos estáticos
    ├── package.json     # Dependências e scripts do projeto
    ├── tailwind.config.js # Configuração do Tailwind CSS
    ├── tsconfig.json    # Configuração do TypeScript
    ├── tsconfig.app.json    # Configuração do TypeScript
    ├── tsconfig.node.json    # Configuração do TypeScript
    └── README.md        # Documentação do projeto


## Como Contribuir 

1. **Fork o repositório**

2. **Crie uma nova branch:**
    ```sh
    git checkout -b minha-feature

3. **Faça suas alterações e commit:**
    ```sh
    git commit -m "Adicionando nova feature"

4. **Envie as mudanças:**
    ```sh
    git push origin minha-feature

5. **Abra um Pull Request**

## Variáveis de ambiente: Como usar nos componentes
    const apiUrl = import.meta.env.VITE_API_URL;
    const appName = import.meta.env.VITE_APP_NAME;
    const enableLogs = import.meta.env.VITE_ENABLE_LOGS === "true";

    console.log(`App: ${appName}, API: ${apiUrl}`);

    if (enableLogs) {
        console.log("Logs ativados para debug.");
    }

## Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](https://github.com/Plamedi-Pindi/chatbot/blob/master/LICENSE) para mais detalhes.

