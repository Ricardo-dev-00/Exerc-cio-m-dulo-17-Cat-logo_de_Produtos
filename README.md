# 🛍️ Catálogo de Produtos React

[![React](https://img.shields.io/badge/React-18.0-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572B6?logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)

> Uma aplicação front-end React moderna para gerenciar um catálogo de produtos com interface intuitiva, validação de formulários e persistência de dados.

## 🎯 Demonstração

![Catálogo de Produtos](https://via.placeholder.com/800x400/e0f2fe/374151?text=Cat%C3%A1logo+de+Produtos+React)

### 🔗 Links do Projeto
- **Repositório**: [git@github.com:Ricardo-dev-00/Exerc-cio-m-dulo-17-Cat-logo_de_Produtos.git](https://github.com/Ricardo-dev-00/Exerc-cio-m-dulo-17-Cat-logo_de_Produtos)
- **Deploy**: *Em breve*

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte do **Módulo 17** do curso, aplicando conceitos fundamentais do React para criar uma aplicação completa de catálogo de produtos. A aplicação demonstra o uso de componentes reutilizáveis, gerenciamento de estado, formulários controlados e persistência de dados.

### ✨ Principais Funcionalidades

- 🏪 **Catálogo dinâmico** com listagem responsiva de produtos
- ➕ **Formulário expansível** para adicionar novos produtos
- 💾 **Persistência local** com LocalStorage
- ✅ **Validação em tempo real** dos formulários
- 🏷️ **Badge premium** para produtos de alto valor
- 🎨 **Interface moderna** com gradientes pastéis
- 📱 **Design responsivo** para todos os dispositivos
- 🔄 **Reset de dados** para voltar ao estado inicial

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

**Ricardo** - [@Ricardo-dev-00](https://github.com/Ricardo-dev-00)

- GitHub: [Ricardo-dev-00](https://github.com/Ricardo-dev-00)
- LinkedIn: [Conecte-se comigo](https://linkedin.com/in/ricardo-dev-00)

## 🙏 Agradecimentos

- **EBAC** - Pela excelente metodologia de ensino
- **React Team** - Pela incrível biblioteca
- **Vite Team** - Pela ferramenta de build fantástica
- **Unsplash** - Pelas imagens utilizadas nos produtos

---

⭐ **Se este projeto te ajudou, deixe uma estrela!** ⭐
