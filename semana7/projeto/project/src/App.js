import React from "react";
import axios from "axios";


export default class App extends React.Component {
  state = {
  usuarios: [],
    nomeUsuario: "",
    emailUsuario:"",
    id:""
  };

  pegarUsuarios() {
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "daniel-lemes-jackson"
        }
      }
    );
    request
      .then((resposta) => {
        this.setState({ usuarios: resposta.data });
        console.log(resposta)
      })
      .catch((erro) => {
        console.log("Ocorreu um erro");
      });
  }

  criarUsuario = () => {
    const body = {
      name: this.state.nomeUsuario,
      email: this.state.emailUsuario
    };

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: {
          Authorization: "daniel-lemes-jackson"
        }
      }
    );

    request
      .then((resposta) => {
        alert(`o usúario ${this.state.nomeUsuario} E-mail ${this.state.emailUsuario} foi adicionado`);
        this.pegarUsuarios();
        this.setState({ nomeUsuario: "",emailUsuario:"" });
      })
      .catch((erro) => {
        console.log("Erro");
      });
  }

  deletarUsuario = (id) =>{
    axios.delete( 
     `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
     {
       headers: {
          Authorization: "daniel-lemes-jackson"
       }
     } 
     ).then((resposta) => {  
      
      alert(`o item ${resposta.id} foi excluido`)
    })
    .catch((erro) => {
      console.log("Ocorreu um erro");
    });
  }
  
  
  componentDidMount() {
    this.pegarUsuarios();
  }
  render() {
    const onChangeInput = (evento) => {
      this.setState({ nomeUsuario: evento.target.value ,
      });
    };
     const onChangeEmailInput = (evento) => {
      this.setState({emailUsuario: evento.target.value ,
      });
    };
 
    return (
      <div>
        <h1>Criar Usuarios</h1>
        <input value={this.state.nomeUsuario} onChange={onChangeInput} placeholder="nome"/>
        <input value={this.state.emailUsuario} onChange={onChangeEmailInput} placeholder="email"/>
        <button onClick={() => this.criarUsuario(this.state.nomeUsuario)}>
          Salvar
        </button>
        
        {this.state.usuarios.map((item) => {
          return <p key={item.id}>{item.name}
           <button key={item.id} onClick={ () => this.deletarUsuario(item.id) }> Deletar </button>
            
          </p>     
        })}
      </div>
    );
  }
}
