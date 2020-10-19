import React from "react"
import PerguntaAberta from "./PerguntaAberta"
import PerguntaFechada from "./PerguntaFechada"
class Etapa1 extends React.Component {
    render () {
        return (
            <div>
                <h1>ETAPA1 - DADOS GERAIS</h1>
                 <PerguntaAberta />
                <PerguntaFechada />
            </div>
        )
    }
}
export default Etapa1;
