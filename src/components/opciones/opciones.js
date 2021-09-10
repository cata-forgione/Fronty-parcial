import React from "react";


class Opciones extends React.Component{

    constructor(props){
        super(props)
        this.state = {}
    }
    
    render(){

        const {botoncitos,opciones} = this.props;
        return(

            <div>
                <div className="opcion">
                    <button className="botones" id="A" onClick={botoncitos.botoncitoA}>A</button>
                    <p className="opciones"> {opciones.a}</p>
                </div>
                <div className="opcion">
                    <button className="botones" id="B"onClick={botoncitos.botoncitoB}>B</button>
                    <p className="opciones"> {opciones.b}</p>
                </div>
            </div>
        )
    }
}
export default Opciones;