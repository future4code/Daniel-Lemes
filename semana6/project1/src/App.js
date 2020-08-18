import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import styled from "styled-components";
// import PerguntaFechada from './components/PerguntaFechada';
import PerguntaAbertaEtapa2 from "./components/PerguntaAbertaEtapa2"
import PerguntaFechadaEtapa3 from "./components/PerguntaFechadaEtapa3"
// import PerguntaFechada from './components/PerguntaFechada';
// import EscolaridadeEnsinoMedio from "./components/EscolaridadeEnsinoMedio"
// import EscolaridadeEnsinoSuperior from "./components/EscolaridadeEnsinoSuperior"
const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`
class App extends React.Component {
  state = {
    etapa: 1,
    paginas:""
   
  }
  onChangePaginas = (event) => {
    this.setState({etapa:event.target.value})
  }
  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa +1 })
  }

// paginaRenderizada = () => {
//         if (this.state.etapa) {
//           return <Final funcaoClickLogout={this.onClickLogout} />;
//         }
//       }
  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final/>  
         default:
           return <div></div>
    }
  }
  // condicoes = () => {
  //   switch(PerguntaFechada){
  //     case "Ensino médio Incompleto":
  //       return <Etapa3 />
  //       case "Ensino médio Completo":
  //         return <Etapa3 />
  //     case "Ensino Superior Incompleto":
  //       return <Etapa2 />
  //     case "Ensino Superior Completo":
  //       return <Etapa2 />
  //   }
  // }
//  retiraButton = () => {
//       this.setState({
//         etapa: this.irParaProximaEtapa,
//         irParaProximaEtapa: 
      
//           <button>dsgdsg</button>
       
//       });
//     };
// onClickLogout = () => {
//       this.setState({
//         etapa: 4
//       });
//     };
  onClickPosts = () => {
    this.setState({
      pagina: 
      [
        { texto: "Ensino médio Incompleto"}, 
      {texto1: "Ensino médio Completo"}
    ]
    });
  };

  onClickMensagens = () => {
    this.setState({
      pagina: 
      [
          { texto2: "Ensino Superior Incompleto" }, 
          { texto3: "Ensino Suprior Completo"}
    ]
    });
  };
  render () {
    const mensagemAoUsuario = () => {
      const mensagem = this.state.pagina
        ? this.state.pagina[0] : this.state.pagina[3] ;
      return mensagem;
    };
     return ( 
      <AppContainer>
        {this.renderizaEtapa()}
        <button onClick={this.irParaProximaEtapa}>outro botao</button>
         <p>{mensagemAoUsuario()}</p>
         {this.state.pagina &&
           this.state.pagina.map((mensagem) => {
             return <p>{mensagem}</p>;
           })}
      </AppContainer>
    )
  }
}
export default App;
