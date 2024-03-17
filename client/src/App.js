import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import PessoaList from './components/PessoaList'; // Alterado para PessoaList
import PessoaForm from './components/PessoaForm'; // Alterado para PessoaForm
import PessoaDetails from './components/PessoaDetails'; // Alterado para PessoaDetails
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Gerenciamento de Pessoas</h1>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active-link" className="botao-verde">
                  Lista de Pessoas
                </NavLink>
              </li>
              <li>
                <NavLink to="/pessoas/novo" activeClassName="active-link" className="botao-verde">
                  Nova Pessoa
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<PessoaList />} />
            <Route path="/pessoas/novo" element={<PessoaForm />} />
            <Route path="/pessoas/:id" element={<PessoaDetails />} /> {/* Alterado o caminho do componente */}
            <Route path="*" element={<h2>Página não encontrada</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;