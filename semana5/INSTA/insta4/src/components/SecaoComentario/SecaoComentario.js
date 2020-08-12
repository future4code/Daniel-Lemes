import React, { Component } from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		comentario: "",
	};

	onChangeComentario = (event) => {
		if(this.state.comentario === ""){
			alert("digite algo no Campo")
		}
		this.setState({comentario:event.target.value
		});
	}	
	onClickLimpar = () => {
		console.log("CLICOU LIMPAR");
		this.setState({ comentario: "" });
	};

	render () {
		console.log("e esse o que ta fazendo", this.state.comentario)
		return (
			<div className={'comment-container'}>
				<input value={this.state.comentario} onchange={this.onChangeComentario}
					 className={'input-comentario'}
					 placeholder={'Comentário'} 
					value={this.state.comentario} 
					 onChange={this.onChangeComentario}
				/>
				<button onClick={this.props.aoEnviar} value = {this.state.onChangeComentario}>Enviar</button>
			</div>
		)
	}
}
