import React from "react";
import data from "./data.json";
import Opciones from "./opciones/opciones";
import Recordatorio from "./recordatorio/recordatorio";


class Main extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      contador: 1,
      idH: "",
      recordatorioH: []
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    const {contador, idH, recordatorioH} = this.state;

        if (prevState.contador !== contador && contador <= 5) {
            recordatorioH.push(idH.substring(1).toUpperCase());
        } 

  }

  handleBotonA = () => {
    if (this.state.contador < 5) {
        this.setState(
            {
                contador: this.state.contador + 1,
                idH: this.state.contador + 1 + 'a',
    
            }
        )
    }
};

handleBotonB = () => {
    if (this.state.contador < 5) {
        this.setState(
            {
                contador: this.state.contador + 1,
                idH: this.state.contador + 1 + 'b',
    
            }
        )
    }
};
  
  
  render(){
    
    const filtrarDatos = data.find((objeto) => objeto.id.includes(this.state.idH))
    
    let botoncitos = {
      botoncitoA: this.handleBotonA,
      botoncitoB: this.handleBotonB,
     }

  return (
    <div className="layout">
        
        <h1 className="historia">{filtrarDatos.historia}</h1>
  
        <Opciones botoncitos= {botoncitos} opciones={filtrarDatos.opciones}/>
        
        <Recordatorio opcionPrevia={this.state.idH.substring(1).toUpperCase()} recordatorioH ={this.state.recordatorioH}/>
        
    </div>
  );
}

}
export default Main