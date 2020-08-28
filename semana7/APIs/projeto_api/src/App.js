import React from 'react'
import axios from "axios";
class App extends React.Component {
  state = {
    bairro: "",
    cep: "",
    ddd: "",
    localidade: "",
    logradouro: "",
    uf: ""
  }
  pegarCep = () => {
    axios
      .get(`https://viacep.com.br/ws/${this.state.cep}/json/unicode/`)
      .then((resposta) => {
        this.setState({
          bairro: resposta.data.bairro,
          cep: resposta.data.cep,
          ddd: resposta.data.ddd,
          localidade: resposta.data.localidade,
          logradouro: resposta.data.logradouro,
          uf: resposta.data.uf
        })
        if (this.state.cep.length === 8) {
      alert("CEP encontrado")
        }
      })
      .catch((erro) => {
        alert("CEP não encontrado")
        this.setState({cep:""})
      });
  };
  onChangeCep = (event) => {
    const novoCep = event.target.value;
    this.setState({
      cep: novoCep,
      
    });
  };
  render () {
    return (
      <div >
        <input
          maxLength="8"
          placeholder="Digite seu CEP (apenas numeros)"
          type="number"
          value={this.state.cep}
          onChange={this.onChangeCep}
        />
        <p>
          <strong>bairro:{this.state.bairro}</strong>
        </p>
        <p>
          <strong>cep:{this.state.cep}</strong>
        </p>
       
        <p>
          <strong>ddd:{this.state.ddd}</strong>
        </p>
       
        <p>
          <strong>localidade:{this.state.localidade}</strong>
        </p>
        <p>
          <strong>logradouro:{this.state.logradouro}</strong>
        </p>
        <p>
          <strong>uf:{this.state.uf}</strong>
        </p>
        <button onClick={this.pegarCep}>Buscar</button>
      </div>
    );
  }
}
export default App
