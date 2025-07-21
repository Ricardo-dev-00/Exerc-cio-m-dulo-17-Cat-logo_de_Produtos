import { useState } from 'react';
import PropTypes from 'prop-types';
import './FormularioProduto.css';

const FormularioProduto = ({ onAdicionarProduto }) => {
  const [formData, setFormData] = useState({
    nome: '',
    preco: '',
    imagem: '',
    descricao: ''
  });
  
  const [erros, setErros] = useState({});
  const [formularioExpandido, setFormularioExpandido] = useState(false);

  const expandirFormulario = () => {
    setFormularioExpandido(true);
  };

  const fecharFormulario = () => {
    setFormularioExpandido(false);
    // Limpar formulário ao fechar
    setFormData({
      nome: '',
      preco: '',
      imagem: '',
      descricao: ''
    });
    setErros({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpar erro do campo ao digitar
    if (erros[name]) {
      setErros(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validarFormulario = () => {
    const novosErros = {};

    if (!formData.nome.trim()) {
      novosErros.nome = 'Nome do produto é obrigatório';
    }

    if (!formData.preco || isNaN(formData.preco) || Number(formData.preco) <= 0) {
      novosErros.preco = 'Preço deve ser um número válido maior que zero';
    }

    if (!formData.descricao.trim()) {
      novosErros.descricao = 'Descrição é obrigatória';
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validarFormulario()) {
      const novoProduto = {
        id: Date.now(),
        nome: formData.nome.trim(),
        preco: Number(formData.preco),
        imagem: formData.imagem.trim() || null,
        descricao: formData.descricao.trim()
      };

      onAdicionarProduto(novoProduto);
      
      // Limpar formulário e fechar
      setFormData({
        nome: '',
        preco: '',
        imagem: '',
        descricao: ''
      });
      setErros({});
      setFormularioExpandido(false);
    }
  };

  // Se o formulário não estiver expandido, mostra apenas o botão
  if (!formularioExpandido) {
    return (
      <div className="formulario-container-fechado">
        <button 
          className="btn-expandir-formulario"
          onClick={expandirFormulario}
        >
          ➕ Adicionar Produto
        </button>
      </div>
    );
  }

  return (
    <div className="formulario-container">
      <div className="formulario-header">
        <h2>Adicionar Novo Produto</h2>
        <button 
          className="btn-fechar-formulario"
          onClick={fecharFormulario}
          aria-label="Fechar formulário"
        >
          ✕
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="formulario-produto">
        <div className="campo">
          <label htmlFor="nome">Nome do Produto*</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className={erros.nome ? 'erro' : ''}
            placeholder="Digite o nome do produto"
          />
          {erros.nome && <span className="mensagem-erro">{erros.nome}</span>}
        </div>

        <div className="campo">
          <label htmlFor="preco">Preço*</label>
          <input
            type="number"
            id="preco"
            name="preco"
            value={formData.preco}
            onChange={handleChange}
            className={erros.preco ? 'erro' : ''}
            placeholder="0,00"
            step="0.01"
            min="0"
          />
          {erros.preco && <span className="mensagem-erro">{erros.preco}</span>}
        </div>

        <div className="campo">
          <label htmlFor="imagem">URL da Imagem</label>
          <input
            type="url"
            id="imagem"
            name="imagem"
            value={formData.imagem}
            onChange={handleChange}
            placeholder="https://exemplo.com/imagem.jpg"
          />
        </div>

        <div className="campo">
          <label htmlFor="descricao">Descrição*</label>
          <textarea
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            className={erros.descricao ? 'erro' : ''}
            placeholder="Descreva o produto"
            rows="4"
          />
          {erros.descricao && <span className="mensagem-erro">{erros.descricao}</span>}
        </div>

        <button type="submit" className="btn-adicionar">
          Adicionar Produto
        </button>
      </form>
    </div>
  );
};

FormularioProduto.propTypes = {
  onAdicionarProduto: PropTypes.func.isRequired
};

export default FormularioProduto;
