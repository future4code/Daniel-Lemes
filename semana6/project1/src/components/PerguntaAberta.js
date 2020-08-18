import React from "react"
class PerguntaAberta extends React.Component {
    render () {
        return (
            <div>
                <h3>1. Qual o seu nome?</h3>
                <input></input>
                <h3>2. Qual sua idade?</h3>
                <input ></input>
                <h3>3. Qual seu email?</h3>
                <input ></input>
                <div>
                    <h3>{this.props.texto}</h3>
                  
                    <h3>{this.props.texto1}</h3>
                </div>
                
            </div>

        )
    }
}
    export default PerguntaAberta;
