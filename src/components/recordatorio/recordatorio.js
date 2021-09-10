import React from "react";

class Recordatorio extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {}
    }
    
    render(){
        return(
            <div className="recordatorio">
                <p>Seleccion anterior:{this.props.opcionPrevia}</p>
                <p>Historial de opciones elegidas:</p>
                <ul>{
                    this.props.recordatorioH.map((elemento, index)=> {
                        return <li key={index}> {elemento}</li>})
                }</ul>
            </div>
        )
    }
}
export default Recordatorio;