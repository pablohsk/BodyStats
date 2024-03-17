import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './PessoaList.css';

const PessoaList = () => {
  const [pessoas, setPessoas] = useState([]);
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [sucessoMensagem, setSucessoMensagem] = useState('');
  const [pessoaSelecionada, setPessoaSelecionada] = useState(null);
  const [pessoasEncontradas, setPessoasEncontradas] = useState([]);
  const [modalExcluirAberto, setModalExcluirAberto] = useState(false);
  const [modalAlterarAberto, setModalAlterarAberto] = useState(false);
  const [novaPessoa, setNovaPessoa] = useState({
    nome: '',
    data_nasc: '',
    cpf: '',
    sexo: '',
    altura: '',
    peso: ''
  });

  useEffect(() => {
    fetchPessoas();
  }, []);

  const fetchPessoas = async () => {
    try {
      const response = await axios.get('http://localhost:8000/pessoa');
      setPessoas(response.data.pessoas);
    } catch (error) {
      console.error('Erro ao obter pessoas:', error);
    }
  };

  const handleBuscarPessoas = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/pessoa/${termoPesquisa}`);
      if (response.data) {
        setPessoasEncontradas([response.data]); // Colocando a pessoa encontrada em um array para manter a estrutura consistente
        setSucessoMensagem(`Resultados da pesquisa para "${termoPesquisa}": 1 pessoa encontrada.`);
      } else {
        setPessoasEncontradas([]);
        setSucessoMensagem(`Nenhuma pessoa encontrada para "${termoPesquisa}".`);
      }
    } catch (error) {
      console.error('Erro ao pesquisar pessoas:', error);
    }
  };

  const handleExcluirPessoa = async () => {
    try {
      await axios.delete(`http://localhost:8000/pessoa/excluir/${pessoaSelecionada.nome}`);
      fetchPessoas();
      setSucessoMensagem('Pessoa excluída com sucesso.');
      toggleModalExcluir(); // Fechar o modal após a exclusão
    } catch (error) {
      console.error('Erro ao excluir pessoa:', error);
    }
  };

  const handleCalcularPesoIdeal = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/pessoa/calcular-peso-ideal/${pessoaSelecionada.nome}`);
      const pesoIdealFormatted = response.data.peso_ideal.toFixed(2); // Formatar para duas casas decimais
      setModalIsOpen(true);
      setSucessoMensagem(`O peso ideal para ${pessoaSelecionada.nome} é: ${pesoIdealFormatted}kg`);
    } catch (error) {
      console.error('Erro ao calcular peso ideal:', error);
    }
  };

  const handleAlterarPessoa = async () => {
    try {
      await axios.put(`http://localhost:8000/pessoa/alterar/${pessoaSelecionada.nome}`, novaPessoa);
      setSucessoMensagem('Pessoa alterada com sucesso.');
      fetchPessoas();
      toggleModalAlterar(); // Fechar o modal após a alteração
    } catch (error) {
      console.error('Erro ao alterar pessoa:', error);
    }
  };

  const handleSelecionarPessoa = (pessoa) => {
    setPessoaSelecionada(pessoa);
    setNovaPessoa(pessoa); // Definir a pessoa selecionada como a nova pessoa para edição
  };
 
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleBuscarPessoas();
    }
  };

  // Função para abrir e fechar o modal de excluir
  const toggleModalExcluir = () => {
    setModalExcluirAberto(!modalExcluirAberto);
  };

  // Função para abrir e fechar o modal de alterar
  const toggleModalAlterar = () => {
    setModalAlterarAberto(!modalAlterarAberto);
  };

  return (
    <div className="pessoa-list-container">
      <h2>Lista de Pessoas</h2>
      {sucessoMensagem && <p className="mensagem-sucesso">{sucessoMensagem}</p>}
      <div className="filtro-container">
        <input
          type="text"
          placeholder="Procurar pessoa"
          value={termoPesquisa}
          onChange={(e) => setTermoPesquisa(e.target.value)}
          onKeyDown={handleKeyDown}
          className="input-filtro"
        />
        <button className="button-verde" onClick={handleBuscarPessoas}>
          Pesquisar
        </button>
      </div>
      {pessoasEncontradas && pessoasEncontradas.length > 0 && (
        <div className="botoes-opcoes">
          <div className="botoes-container">
            <button className="button-verde spaced" onClick={toggleModalExcluir} disabled={!pessoaSelecionada}>
              Excluir
            </button>
            <button className="button-verde spaced" onClick={handleCalcularPesoIdeal} disabled={!pessoaSelecionada}>
              Calcular Peso Ideal
            </button>
            <button className="button-verde spaced" onClick={toggleModalAlterar} disabled={!pessoaSelecionada}>
              Alterar
            </button>
            </div>
        </div>
      )}
      <div className="pessoa-table">
        {(pessoasEncontradas.length > 0 ? pessoasEncontradas : pessoas).map((pessoa) => (
          <div key={pessoa.id} className={`pessoa-info ${pessoa === pessoaSelecionada ? 'selected' : ''}`} onClick={() => handleSelecionarPessoa(pessoa)}>
            <p><strong>Nome:</strong> {pessoa.nome}</p>
            <p><strong>Data de Nascimento:</strong> {pessoa.data_nasc}</p>
            <p><strong>CPF:</strong> {pessoa.cpf}</p>
            <p><strong>Sexo:</strong> {pessoa.sexo}</p>
            <p><strong>Peso:</strong> {pessoa.peso}</p>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Peso Ideal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Peso Ideal</h2>
        <p className="mensagem-sucesso">{sucessoMensagem}</p>
        <button className="button-fechar" onClick={() => setModalIsOpen(false)}>Fechar</button>
      </Modal>

      {/* Modal de Excluir Pessoa */}
      <Modal
        isOpen={modalExcluirAberto}
        onRequestClose={toggleModalExcluir}
        contentLabel="Confirmar Exclusão"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Confirmar Exclusão</h2>
        <p>Deseja realmente excluir a pessoa {pessoaSelecionada && pessoaSelecionada.nome}?</p>
        <div className="botoes-modal">
          <button className="button-vermelho" onClick={handleExcluirPessoa}>Confirmar</button>
          <button className="button-cinza" onClick={toggleModalExcluir}>Cancelar</button>
        </div>
      </Modal>

      {/* Modal de Alterar Pessoa */}
      <Modal
        isOpen={modalAlterarAberto}
        onRequestClose={toggleModalAlterar}
        contentLabel="Alterar Pessoa"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Alterar Pessoa</h2>
        {/* Campos para editar os detalhes da pessoa */}
        <input
          type="text"
          placeholder="Nome"
          value={novaPessoa.nome}
          onChange={(e) => setNovaPessoa({ ...novaPessoa, nome: e.target.value })}
          className="input-modal"
        />
        <input
          type="text"
          placeholder="Data de Nascimento"
          value={novaPessoa.data_nasc}
          onChange={(e) => setNovaPessoa({ ...novaPessoa, data_nasc: e.target.value })}
          className="input-modal"
        />
        <input
          type="text"
          placeholder="CPF"
          value={novaPessoa.cpf}
          onChange={(e) => setNovaPessoa({ ...novaPessoa, cpf: e.target.value })}
          className="input-modal"
        />
        <input
          type="text"
          placeholder="Sexo"
          value={novaPessoa.sexo}
          onChange={(e) => setNovaPessoa({ ...novaPessoa, sexo: e.target.value })}
          className="input-modal"
        />
        <input
          type="text"
          placeholder="Altura"
          value={novaPessoa.altura}
          onChange={(e) => setNovaPessoa({ ...novaPessoa, altura: e.target.value })}
          className="input-modal"
        />
        <input
          type="text"
          placeholder="Peso"
          value={novaPessoa.peso}
          onChange={(e) => setNovaPessoa({ ...novaPessoa, peso: e.target.value })}
          className="input-modal"
        />
        <div className="botoes-modal">
          <button className="button-verde" onClick={handleAlterarPessoa}>Confirmar</button>
          <button className="button-cinza" onClick={toggleModalAlterar}>Cancelar</button>
        </div>
      </Modal>
    </div>
  );
};

export default PessoaList;