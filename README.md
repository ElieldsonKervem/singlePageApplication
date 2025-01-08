SPA Project - Rocketseat
Este é um projeto de uma Single Page Application (SPA) desenvolvido como parte do curso da Rocketseat, utilizando JavaScript puro para criar uma navegação entre páginas sem recarregar a página inteira. A aplicação possui um roteador customizado que carrega conteúdos HTML dinamicamente com base na URL da aplicação.

Funcionalidades
Navegação sem recarregar a página: Usando a API History do navegador e o método fetch, é possível navegar entre as páginas de forma dinâmica.
Rotas customizadas: A SPA possui um sistema de rotas que permite a navegação entre diferentes páginas da aplicação sem recarregar o conteúdo.
Carregamento de páginas: O conteúdo de cada rota é carregado dinamicamente dentro do elemento <div id="app"></div>.
Estrutura do Projeto
O projeto possui a seguinte estrutura:

bash
Copiar código
/spa-rocketseat
│
├── /pages
│   ├── home.html
│   ├── about.html
│   └── contact.html
│
├── /js
│   └── index.js
│
├── index.html
└── README.md
/pages: Contém as páginas HTML que serão carregadas dinamicamente.
/js/index.js: Contém a lógica JavaScript do roteador e a navegação da aplicação.
index.html: Página principal que carrega o conteúdo da aplicação.
Como Funciona
O projeto utiliza um sistema de rotas onde as URLs são mapeadas para arquivos HTML específicos. Por exemplo, a URL /about carrega o conteúdo do arquivo /pages/about.html.
Quando o usuário clica em um link de navegação, o evento de clique é interceptado pela função route(), que previne o comportamento padrão (recarga da página) e chama o método window.history.pushState() para alterar a URL.
O conteúdo correspondente à rota é carregado dinamicamente utilizando a API fetch e inserido dentro da <div id="app"></div>.
Caso a rota não exista, o conteúdo padrão de erro (404) será exibido.
Dependências
Este projeto não possui dependências externas, sendo desenvolvido utilizando apenas JavaScript puro e a API nativa do navegador.

Como Rodar
Para rodar o projeto localmente, siga os passos abaixo:

Clone o repositório para sua máquina local:

bash
Copiar código
git clone https://github.com/seu-usuario/spa-rocketseat.git
Acesse o diretório do projeto:

bash
Copiar código
cd spa-rocketseat
Abra o arquivo index.html em seu navegador preferido:

bash
Copiar código
open index.html
Pronto! Agora você pode navegar entre as páginas da aplicação sem recarregar a página.

Navegação
No menu de navegação, você pode clicar nos links para navegar entre as páginas:

Home: Carrega o conteúdo de home.html.
Sobre: Carrega o conteúdo de about.html.
Contato: Carrega o conteúdo de contact.html.
Contribuições
Se você deseja contribuir para o projeto, fique à vontade para fazer um fork, enviar um pull request ou abrir uma issue para relatar problemas ou sugerir melhorias.

Licença
Este projeto é de código aberto sob a licença MIT.
