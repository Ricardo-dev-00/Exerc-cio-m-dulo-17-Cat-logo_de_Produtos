# Instruções do Copilot - Catálogo de Produtos React

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Contexto do Projeto
Este é um projeto React criado com Vite para desenvolver um catálogo de produtos com as seguintes características:

- **Componentes reutilizáveis**: Usar componentes funcionais com props
- **Gerenciamento de estado**: Usar useState para controlar dados de produtos
- **Formulários controlados**: Implementar formulários com validação
- **Hooks do React**: Usar useEffect para simulação de API
- **Estrutura organizada**: Separar components, pages e assets

## Diretrizes de Código
- Use JavaScript ES6+ com sintaxe moderna
- Prefira componentes funcionais com hooks
- Mantenha componentes pequenos e reutilizáveis
- Use props para passar dados entre componentes
- Implemente state local quando necessário
- Siga convenções de nomenclatura em camelCase para funções e PascalCase para componentes

## Estrutura do Projeto
- `src/components/`: Componentes reutilizáveis
- `src/pages/`: Páginas da aplicação
- `src/assets/`: Imagens e recursos estáticos
- `App.jsx`: Componente principal da aplicação

## Funcionalidades Principais
1. **ProdutoCard**: Componente para exibir informações de um produto
2. **FormularioProduto**: Formulário controlado para adicionar produtos
3. **ListaProdutos**: Listagem dinâmica de produtos com .map()
4. **Simulação de API**: useEffect para carregar dados iniciais
5. **Loading state**: Mostrar "carregando..." durante fetch de dados
