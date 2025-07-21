# Catálogo de Produtos React

Uma aplicação front-end React para exibir e gerenciar um catálogo de produtos. Este projeto foi desenvolvido para aplicar os conceitos fundamentais do React, incluindo componentes reutilizáveis, estado, props, formulários controlados e hooks.

## 🚀 Funcionalidades

- **Listagem dinâmica de produtos** - Visualização em grid responsivo
- **Formulário de cadastro** - Adicionar novos produtos com validação
- **Componentes reutilizáveis** - Arquitetura modular e organizada
- **Simulação de API** - Carregamento inicial com useEffect
- **Interface moderna** - Design responsivo e intuitivo

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca para interface de usuário
- **Vite** - Build tool rápida para desenvolvimento
- **PropTypes** - Validação de propriedades dos componentes
- **CSS3** - Estilização com layout grid e flexbox
- **JavaScript ES6+** - Sintaxe moderna do JavaScript

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ProdutoCard.jsx     # Card individual do produto
│   ├── FormularioProduto.jsx # Formulário de cadastro
│   └── ListaProdutos.jsx   # Lista de produtos
├── pages/              # Páginas da aplicação
│   └── Catalogo.jsx       # Página principal
├── assets/             # Recursos estáticos
├── App.jsx             # Componente raiz
└── main.jsx           # Ponto de entrada da aplicação
```

## 🏗️ Conceitos Aplicados

- **Componentes Funcionais** - Uso de function components com hooks
- **Props** - Passagem de dados entre componentes
- **State Management** - useState para controle de estado local
- **useEffect** - Simulação de carregamento de dados de API
- **Formulários Controlados** - Inputs controlados pelo React
- **Validação** - Validação de formulário com feedback visual
- **Map** - Renderização dinâmica de listas
- **Conditional Rendering** - Renderização condicional para loading

## 🚀 Como Executar

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd exercicio-modulo-17
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute a aplicação**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**
   Abra seu navegador em `http://localhost:5173`

## 📝 Comandos Disponíveis

- `npm run dev` - Executa a aplicação em modo de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter para verificar código

## 🎯 Funcionalidades Detalhadas

### Cadastro de Produtos
- Campos obrigatórios: nome, preço e descrição
- Campo opcional: URL da imagem
- Validação em tempo real
- Feedback visual de erros

### Listagem de Produtos
- Grid responsivo que se adapta ao tamanho da tela
- Cards com informações completas do produto
- Placeholder para produtos sem imagem
- Contador de produtos no cabeçalho

### Carregamento Inicial
- Simulação de chamada de API com delay
- Estado de carregamento com spinner
- Produtos mockados pré-carregados

## 📱 Responsividade

A aplicação é totalmente responsiva e se adapta a diferentes tamanhos de tela:
- **Desktop** - Grid com múltiplas colunas
- **Tablet** - Grid adaptativo
- **Mobile** - Layout em coluna única

## 🎨 Design

Interface moderna com:
- Gradientes e sombras suaves
- Transições e animações CSS
- Design system consistente
- Tipografia legível e hierárquica
