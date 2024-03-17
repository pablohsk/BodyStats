import React, { useState } from 'react';
import axios from 'axios';
import './PessoaForm.css';

const PessoaForm = () => {
  const [pessoa, setPessoa] = useState({
    nome: '',
    data_nasc: '',
    cpf: '',
    sexo: '',
    altura: '',
    peso: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPessoa((prevPessoa) => ({
      ...prevPessoa,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8000/pessoa/incluir/', pessoa);
      setPessoa({
        nome: '',
        data_nasc: '',
        cpf: '',
        sexo: '',
        altura: '',
        peso: '',
      });
    } catch (error) {
      console.error('Erro ao adicionar pessoa:', error);
    }
  };

  return (
    <div className="pessoa-form-container">
      <h2>Nova Pessoa</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" value={pessoa.nome} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="data_nasc">Data de Nascimento:</label>
          <input type="date" id="data_nasc" name="data_nasc" value={pessoa.data_nasc} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" value={pessoa.cpf} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="sexo">Sexo:</label>
          <select id="sexo" name="sexo" value={pessoa.sexo} onChange={handleChange}>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="altura">Altura (em metros):</label>
          <input type="number" id="altura" name="altura" value={pessoa.altura} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="peso">Peso (em quilogramas):</label>
          <input type="number" id="peso" name="peso" value={pessoa.peso} onChange={handleChange} />
        </div>
        <div className="form-group">
          <button type="submit">Adicionar Pessoa</button>
        </div>
      </form>
    </div>
  );
};

export default PessoaForm;