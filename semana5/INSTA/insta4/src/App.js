import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import Daniel from "./img/daniel.jpg";
import Lucas from "./img/lcm.png";
import Inventar from "./img/inventar.png";
class App extends React.Component {
  state = {
    lista: [
  
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
  };
  adicionaLista = () => {
    const acrescentaLista = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost,
    };
    const novaLista = [...this.state.lista, acrescentaLista];
    this.setState({
      lista: novaLista,
      valorInputNomeUsuario: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    });
  };
  onchangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value })
  }
  onchangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value })
  }
  onchangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value })
  }

  render () {
    const listaDeComponentes = this.state.lista.map((listas) => {
      return (
        <p>
          <Post
          nomeUsuario={listas.nomeUsuario}
          fotoUsuario={listas.fotoUsuario}
          fotoPost={listas.fotoPost}
          />
        </p>
      );
    });
    return (
      <div>
        <div className={'app-container'}>
          <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
        </div>
        <div className={'app-container'}>
          <Post
            nomeUsuario={'Daniel'}
            fotoUsuario={ Daniel } 
            fotoPost={Inventar}
          />
        </div>
        <div className={'app-container'}>
          <Post
            nomeUsuario={'Lucas'}
            fotoUsuario={Lucas}
            fotoPost={Lucas}
          />
        </div>
        <div className={'app-container'}>
          <input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onchangeInputNomeUsuario}
            placeholder={"nome"}
          />
          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onchangeInputFotoUsuario}
            placeholder={"link foto"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onchangeInputFotoPost}
            placeholder={"link post"}
          />
          <button onClick={this.adicionaLista}>Adicionar</button>
          <div>{listaDeComponentes}</div>
        </div>
      </div>

    );
  }
}

export default App;
