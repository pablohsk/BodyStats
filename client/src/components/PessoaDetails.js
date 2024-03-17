import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PessoaDetails = () => {
  const { id } = useParams();
  const [pessoa, setPessoa] = useState(null);

  useEffect(() => {
    const fetchDetalhesPessoa = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/pessoa/${id}`);
        setPessoa(response.data);
      } catch (error) {
        console.error('Erro ao obter detalhes da pessoa:', error);
      }
    };

    fetchDetalhesPessoa();
  }, [id]);

  if (!pessoa) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="pessoa-details-container">
      <h2>Detalhes da Pessoa</h2>
      <p><strong>Nome:</strong> {pessoa.nome}</p>
      <p><strong>Email:</strong> {pessoa.email}</p>
      <p><strong>CPF:</strong> {pessoa.cpf}</p>
      <p><strong>Sexo:</strong> {pessoa.sexo}</p>
      <p><strong>Altura:</strong> {pessoa.altura}</p>
      <p><strong>Peso:</strong> {pessoa.peso}</p>
    </div>
  );
};

export default PessoaDetails;
