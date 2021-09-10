import React from "react";
import Main from "./components/main.js"
import "./index.css";

class App extends React.Component {
  render(){
  return(
  <div className="layout">
      <Main/>
  </div>
  )}
}

export default App;

// darle valores a las cosillas, deberia reemplazarlo en su carpeta corresponfiente {this.props.nombre}
// estado= dependiendo de lo que haga el usuario es algo que va a cambiar hacerlo en la carpeta padre de todo
