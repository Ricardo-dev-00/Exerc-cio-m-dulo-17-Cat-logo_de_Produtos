import PropTypes from 'prop-types';
import './ProdutoCard.css';

const ProdutoCard = ({ nome, preco, imagem, descricao }) => {
  const formatarPreco = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  };

  const handleComprar = () => {
    alert(`Produto "${nome}" adicionado ao carrinho!`);
  };

  const handleVerMais = () => {
    alert(`Visualizando detalhes de "${nome}"\n\nDescrição: ${descricao}\n\nPreço: ${formatarPreco(preco)}`);
  };

  return (
    <div className="produto-card">
      <div className="produto-imagem">
        {preco > 2000 && <div className="badge-premium">Premium</div>}
        {imagem ? (
          <img src={imagem} alt={nome} />
        ) : (
          <div className="placeholder-imagem">
            <span>Sem imagem</span>
          </div>
        )}
      </div>
      <div className="produto-info">
        <h3 className="produto-nome">{nome}</h3>
        <p className="produto-preco">{formatarPreco(preco)}</p>
        <p className="produto-descricao">{descricao}</p>
        
        <div className="produto-acoes">
          <button 
            className="btn-ver-mais"
            onClick={handleVerMais}
            aria-label={`Ver mais detalhes de ${nome}`}
          >
            👁️ Ver Mais
          </button>
          <button 
            className="btn-comprar"
            onClick={handleComprar}
            aria-label={`Comprar ${nome}`}
          >
            🛒 Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

ProdutoCard.propTypes = {
  nome: PropTypes.string.isRequired,
  preco: PropTypes.number.isRequired,
  imagem: PropTypes.string,
  descricao: PropTypes.string.isRequired
};

export default ProdutoCard;
