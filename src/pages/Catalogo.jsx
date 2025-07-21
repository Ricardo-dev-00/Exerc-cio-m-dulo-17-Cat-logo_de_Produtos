import { useState, useEffect } from 'react';
import FormularioProduto from '../components/FormularioProduto';
import ListaProdutos from '../components/ListaProdutos';
import './Catalogo.css';

// Dados mockados para simulação de API
const produtosMockados = [
  {
    id: 1,
    nome: "Smartphone Samsung Galaxy S24",
    preco: 2499.99,
    imagem: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop",
    descricao: "Smartphone premium com câmera de 108MP, tela Super AMOLED de 6.8 polegadas e processador Snapdragon 8 Gen 3."
  },
  {
    id: 2,
    nome: "Notebook Dell Inspiron 15",
    preco: 3299.90,
    imagem: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop",
    descricao: "Notebook para trabalho e estudos com Intel Core i7, 16GB RAM, SSD 512GB e tela Full HD de 15.6 polegadas."
  },
  {
    id: 3,
    nome: "Fone de Ouvido Sony WH-1000XM5",
    preco: 899.99,
    imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
    descricao: "Fone de ouvido wireless com cancelamento de ruído ativo, bateria de 30 horas e qualidade de áudio premium."
  },
  {
    id: 4,
    nome: "Smart TV Samsung 55'' 4K",
    preco: 2199.99,
    imagem: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=200&fit=crop",
    descricao: "Smart TV 4K UHD de 55 polegadas com HDR, sistema operacional Tizen e conectividade Wi-Fi integrada."
  },
  {
    id: 5,
    nome: "Câmera Canon EOS R6 Mark II",
    preco: 4899.99,
    imagem: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=200&fit=crop",
    descricao: "Câmera mirrorless profissional com sensor full-frame de 24.2MP, gravação de vídeo 4K e estabilização de imagem de 5 eixos."
  },
  {
    id: 6,
    nome: "Tablet Apple iPad Pro 12.9''",
    preco: 1899.90,
    imagem: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=200&fit=crop",
    descricao: "Tablet com tela Liquid Retina XDR de 12.9 polegadas, chip M2, compatível com Apple Pencil e Magic Keyboard."
  }
];

const Catalogo = () => {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // Simulação de carregamento de dados com useEffect
  useEffect(() => {
    const carregarProdutos = async () => {
      setCarregando(true);
      
      // Verificar se existem produtos salvos no localStorage
      const produtosSalvos = localStorage.getItem('catalogoProdutos');
      
      if (produtosSalvos) {
        // Se existem produtos salvos, carregá-los
        setProdutos(JSON.parse(produtosSalvos));
      } else {
        // Se não existem, usar os dados mockados iniciais
        // Simular delay de carregamento da API
        await new Promise(resolve => setTimeout(resolve, 2000));
        setProdutos(produtosMockados);
        // Salvar os produtos iniciais no localStorage
        localStorage.setItem('catalogoProdutos', JSON.stringify(produtosMockados));
      }
      
      setCarregando(false);
    };

    carregarProdutos();
  }, []);

  const adicionarProduto = (novoProduto) => {
    const produtosAtualizados = [...produtos, novoProduto];
    setProdutos(produtosAtualizados);
    // Salvar no localStorage sempre que adicionar um produto
    localStorage.setItem('catalogoProdutos', JSON.stringify(produtosAtualizados));
  };

  const resetarCatalogo = () => {
    if (confirm('Tem certeza que deseja resetar o catálogo? Todos os produtos adicionados serão perdidos.')) {
      localStorage.removeItem('catalogoProdutos');
      setProdutos(produtosMockados);
      localStorage.setItem('catalogoProdutos', JSON.stringify(produtosMockados));
    }
  };

  return (
    <div className="catalogo-container">
      <header className="catalogo-header">
        <h1>Catálogo de Produtos</h1>
        <p>Gerencie e visualize produtos do seu catálogo</p>
      </header>
      
      <main className="catalogo-main">
        <FormularioProduto onAdicionarProduto={adicionarProduto} onResetarCatalogo={resetarCatalogo} />
        <ListaProdutos produtos={produtos} carregando={carregando} />
      </main>
    </div>
  );
};

export default Catalogo;
