# 🛍️ Catálogo de Produtos React

[![React](https://img.shields.io/badge/React-18.0-blue?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-green?logo=github&logoColor=white)](https://ricardo-dev-00.github.io/Exerc-cio-m-dulo-17-Cat-logo_de_Produtos/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> 🚀 Uma aplicação front-end React moderna para gerenciar um catálogo de produtos com interface intuitiva, formulários controlados, validação em tempo real e persistência de dados no LocalStorage.

## 🎯 Demonstração

![Catálogo de Produtos](https://via.placeholder.com/800x400/e0f2fe/374151?text=Cat%C3%A1logo+de+Produtos+React)

### 🔗 Links do Projeto
- **🌐 Demo Online**: [https://ricardo-dev-00.github.io/Exerc-cio-m-dulo-17-Cat-logo_de_Produtos/](https://ricardo-dev-00.github.io/Exerc-cio-m-dulo-17-Cat-logo_de_Produtos/)
- **📂 Repositório**: [GitHub](https://github.com/Ricardo-dev-00/Exerc-cio-m-dulo-17-Cat-logo_de_Produtos)
- **👨‍💻 Desenvolvedor**: [LinkedIn - Ricardo Vieira](https://www.linkedin.com/in/ricardo-vieira-a29493330/)

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte do **Módulo 17** do curso, aplicando conceitos fundamentais do React para criar uma aplicação completa de catálogo de produtos. A aplicação demonstra o uso de componentes reutilizáveis, gerenciamento de estado, formulários controlados e persistência de dados.

### ✨ Principais Funcionalidades

- 🏪 **Catálogo dinâmico** com listagem responsiva de produtos
- ➕ **Formulário expansível** para adicionar novos produtos
- 💾 **Persistência local** com LocalStorage (dados salvos entre sessões)
- ✅ **Validação em tempo real** dos formulários
- 🏷️ **Badge premium** para produtos de alto valor (acima de R$ 2.000)
- 🎨 **Interface moderna** com gradientes pastéis e animações
- 📱 **Design responsivo** para todos os dispositivos (mobile-first)
- 🔄 **Reset de dados** para voltar ao estado inicial
- 🛒 **Ações nos produtos** (Ver Mais, Comprar)
- ⚡ **Performance otimizada** com componentes reutilizáveis

### 🌟 **Experimente Agora!**
👆 **[Acesse a aplicação online](https://ricardo-dev-00.github.io/Exerc-cio-m-dulo-17-Cat-logo_de_Produtos/)** e teste todas as funcionalidades!

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca para interfaces de usuário
- **Vite** - Build tool moderna e rápida
- **JavaScript ES6+** - Linguagem de programação
- **CSS3** - Estilização avançada com Grid e Flexbox
- **PropTypes** - Validação de propriedades

### Conceitos React Aplicados
- ⚛️ **Componentes Funcionais** com Hooks
- 🎣 **useState** - Gerenciamento de estado local
- 🔄 **useEffect** - Ciclo de vida e efeitos colaterais
- 📤 **Props** - Comunicação entre componentes
- 🎛️ **Formulários Controlados** - Controle total dos inputs
- 🔍 **Conditional Rendering** - Renderização condicional
- 🗂️ **Lista Dinâmica** - Mapeamento de arrays

## 📁 Estrutura do Projeto

```
src/
├── components/              # Componentes reutilizáveis
│   ├── ProdutoCard.jsx         # Card individual do produto
│   ├── ProdutoCard.css         # Estilos do card
│   ├── FormularioProduto.jsx   # Formulário de cadastro
│   ├── FormularioProduto.css   # Estilos do formulário
│   ├── ListaProdutos.jsx       # Lista de produtos
│   └── ListaProdutos.css       # Estilos da listagem
├── pages/                   # Páginas da aplicação
│   ├── Catalogo.jsx            # Página principal
│   └── Catalogo.css            # Estilos da página
├── assets/                  # Recursos estáticos
├── App.jsx                 # Componente raiz
├── App.css                 # Estilos globais
└── main.jsx               # Ponto de entrada
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone git@github.com:Ricardo-dev-00/Exerc-cio-m-dulo-17-Cat-logo_de_Produtos.git
   cd Exerc-cio-m-dulo-17-Cat-logo_de_Produtos
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute em modo desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**
   - Abra [http://localhost:5173](http://localhost:5173) no navegador

### Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa verificação de código
- `npm run deploy` - Gera build para produção

## 🌐 Deploy e GitHub Pages

### Deploy Automático
O projeto está configurado com **GitHub Actions** para deploy automático no GitHub Pages:

- **Workflow**: `.github/workflows/deploy.yml`
- **Trigger**: Push na branch `main`
- **Build**: Vite build otimizado
- **Deploy**: Automático no GitHub Pages

### Configurações Importantes

1. **vite.config.js**: Configurado com `base` correto para GitHub Pages
2. **GitHub Actions**: Workflow para build e deploy automático
3. **Permissões**: Pages configurado no repositório

### Problemas Corrigidos

- ✅ **Página em branco**: Corrigido `base` no Vite config
- ✅ **Deploy manual**: Automatizado com GitHub Actions
- ✅ **Build otimizado**: Configuração de produção aplicada

## 🎨 Interface e Design

### Paleta de Cores
- **Background**: Gradiente pastel (azul → rosa → laranja)
- **Cards**: Branco com sombras sutis
- **Botões**: Gradientes azul e verde
- **Texto**: Cinza escuro para contraste

### Responsividade
- **Desktop**: Grid com múltiplas colunas
- **Tablet**: Layout adaptativo
- **Mobile**: Coluna única otimizada

## 🔧 Funcionalidades Detalhadas

### 📝 Formulário de Produtos
- **Campos obrigatórios**: Nome, preço e descrição
- **Campo opcional**: URL da imagem
- **Validação**: Tempo real com feedback visual
- **Estado expansível**: Inicia como botão, expande para formulário

### 🏷️ Cards de Produtos
- **Informações**: Nome, preço, imagem e descrição
- **Ações**: "Ver Mais" e "Comprar"
- **Badge Premium**: Produtos acima de R$ 2.000
- **Placeholder**: Para produtos sem imagem

### 💾 Persistência de Dados
- **LocalStorage**: Salva produtos automaticamente
- **Carregamento**: Recupera dados na inicialização
- **Reset**: Botão para voltar aos dados originais

## 📊 Estado da Aplicação

```jsx
// Estados principais
const [produtos, setProdutos] = useState([]);     // Lista de produtos
const [carregando, setCarregando] = useState(true); // Status de loading
const [formularioExpandido, setFormularioExpandido] = useState(false); // Estado do form
```

## 🎯 Conceitos Demonstrados

### React Fundamentals
- ✅ Componentes funcionais com props
- ✅ Gerenciamento de estado com useState
- ✅ Efeitos colaterais com useEffect
- ✅ Renderização condicional
- ✅ Listas dinâmicas com map()
- ✅ Formulários controlados

### Boas Práticas
- ✅ Separação de responsabilidades
- ✅ Reutilização de componentes
- ✅ Validação de PropTypes
- ✅ Tratamento de erros
- ✅ Acessibilidade (aria-labels)
- ✅ Performance (keys únicas)

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Ricardo Vieira** - [@Ricardo-dev-00](https://github.com/Ricardo-dev-00)

- 🐙 GitHub: [Ricardo-dev-00](https://github.com/Ricardo-dev-00)
- 💼 LinkedIn: [Ricardo Vieira](https://www.linkedin.com/in/ricardo-vieira-a29493330/)
- 📧 Email: Disponível no perfil do LinkedIn

## 🙏 Agradecimentos

- **EBAC** - Pela excelente metodologia de ensino
- **React Team** - Pela incrível biblioteca
- **Vite Team** - Pela ferramenta de build fantástica
- **Unsplash** - Pelas imagens utilizadas nos produtos

---

⭐ **Se este projeto te ajudou, deixe uma estrela!** ⭐
