import React, { Component } from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		comentario: "",
	};

	onChangeComentario = (event) => {
		
		this.setState({
			comentario: event.target.value
		});
	}
	onClickLimpar = () => {
		console.log("CLICOU LIMPAR");
		if (this.state.comentario === "") {
			alert("digite algo no Campo")
		}
	};

	render () {
		console.log("e esse o que ta fazendo", this.state.comentario)
		return (
			<div className={'comment-container'}>
			
				<div>
					<input  onchange={this.onChangeComentario}
						className={'input-comentario'}
						placeholder={'Comentário'}
						value={this.state.comentario}
						onChange={this.onChangeComentario}
					/>
				</div>
				<button value={this.state.comentario}onClick={this.props.aoEnviar} value={this.state.onClickLimpar}>Enviar</button>
					<div className="acrescenta">
					<p>{this.state.comentario}</p>
				</div>
			</div>
		)
	}
}
