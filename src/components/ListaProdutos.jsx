import PropTypes from 'prop-types';
import ProdutoCard from './ProdutoCard';
import './ListaProdutos.css';

const ListaProdutos = ({ produtos, carregando }) => {
  if (carregando) {
    return (
      <div className="carregando-container">
        <div className="spinner"></div>
        <p>Carregando produtos...</p>
      </div>
    );
  }

  if (produtos.length === 0) {
    return (
      <div className="lista-vazia">
        <h3>Nenhum produto encontrado</h3>
        <p>Adicione produtos usando o formulário acima.</p>
      </div>
    );
  }

  return (
    <div className="lista-produtos-container">
      <h2>Catálogo de Produtos ({produtos.length})</h2>
      <div className="lista-produtos">
        {produtos.map(produto => (
          <ProdutoCard
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            imagem={produto.imagem}
            descricao={produto.descricao}
          />
        ))}
      </div>
    </div>
  );
};

ListaProdutos.propTypes = {
  produtos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nome: PropTypes.string.isRequired,
      preco: PropTypes.number.isRequired,
      imagem: PropTypes.string,
      descricao: PropTypes.string.isRequired
    })
  ).isRequired,
  carregando: PropTypes.bool.isRequired
};

export default ListaProdutos;
