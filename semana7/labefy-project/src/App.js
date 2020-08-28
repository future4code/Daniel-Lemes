import React from "react";
import axios from "axios";
// import Botao from "./components/Botao"
 class App extends React.Component {
  state = {
    playlists: [],
    musicas: []
  };
  pegarPlaylists = () => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
        headers: {
          Authorization: "daniel-lemes-jackson"
        }
      })
      .then((resposta) => {
        console.log(resposta.data)
        this.setState({ playlists: resposta.data.result.list });
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
  pegarMusicas = (id) => {
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
        headers: {
          Authorization: "daniel-lemes-jackson"
        }
      })
      .then((resposta) => {
        console.log("Oi")
        this.setState({ musicas: resposta.data.result.tracks });
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
  selecionouPlaylist = (evento) => {
    const nomePlaylist = evento.target.value;
    this.pegarMusicas(nomePlaylist);
  };
  componentDidMount () {
    this.pegarPlaylists();
  }
  criarPlaylist = () => {
    const body = {
      name: this.state.nomePlaylist
    };
    axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      body,
      {
        headers: {
          Authorization: "daniel-lemes-jackson"
        }
      }
    ).then((resposta) => {
      alert(`A playlist ${this.state.nomePlaylist} foi criada com sucesso`);
      this.pegarPlaylists();
      this.setState({ nomePlaylist: "" });
    })
      .catch((erro) => {
        alert('Já existe uma playlist com esse nome')
        console.log("Erro");
      });
  };
  deletePlaylist = (playlistId) => {
    axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
      {
        headers: {
          Authorization: "daniel-lemes-jackson"
        }
      }
    )
      .then((response) => {
        this.pegarPlaylists();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  onChangeCriarPlaylist = (event) => {
    this.setState({ nomePlaylist: event.target.value });
  }
  render () {
    return (
      <div>
        <input onChange={this.onChangeCriarPlaylist}></input>
        <button onClick={this.criarPlaylist}>Criar!</button>
        <select onChange={this.selecionouPlaylist}>
          <option value={""}></option>
          {this.state.playlists.map((list) => {
            return (
              <option key={list.id} value={list.id}>
                {list.name}
              </option>
            );
          })}
        </select>
        <h1>Gerenciar Playlists</h1>
        {this.state.playlists.map((item) => {
          return <p onClick={this.pegarMusicas} key={item.id}>{item.name}{`   `}
            <button onClick={() => this.deletePlaylist(item.id)}>Deletar Playlist</button>
          </p>;
        })}
        <h1>Musicas da Playlist Selecionada</h1>
        {this.state.musicas.map((list) => {
          return (
            <div>
              <p key={list.id} value={list.id}>
                {list.name}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App
