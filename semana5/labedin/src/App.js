import React, { Component } from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Daniel from "./components/img/daniel.jpg";
import Email from "./components/img/email.png";
import Endereco from "./components/img/endereco.jpg";
import Inventar from "./components/img/inventar.png";
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ Daniel }
          nome="Daniel Lemes" 
          descricao="Oi, eu sou o Daniel Lemes. Sou um dos alunos da Labenu. Estou Amando esse curso, quero absorver todo o conteúdo."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container1">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={Inventar}
          nome="Inventar Art Comunicação Visual" 
          descricao="Empresa na área de Comunicação Visual, voltada para fachadas, envelopamentos de veículos, Letras-Caixa e adesivos" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

        <div className="page-section-container">
          <h2>Informações</h2>
          <CardPequeno
          imagem={ Email }
          nome="inventarartcomunicacao@hotmail.com"
          imagem1={Endereco}
          descricao="Rua osório da cunha lara neto, 21, Caçapava - SP"
          />
        </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
