import React from "react";
import Axios from "axios";
export default class FechaVisita extends React.Component {
constructor() {
  super();
   this.state = { 
    dates: []
    } 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  };
handleChange(event) {    
    this.setState({value: event.target.value});  
  }
handleSubmit(event) {
   
    if (!this.state.value){
      alert('Este campo es obligatorio');
    }else{
      alert('se selecciono: ' + this.state.value);
    }
 }

componentDidMount() { 
  Axios.get("http://localhost:8585/comentario/fechas").then(res=>this.setState({dates:res.data}))
}
actualizar(month){
  console.log(month);
}

render(){
return(

      <form onSubmit={this.handleSubmit}>
        <select value={this.state.value} onChange={this.handleChange}>
            <option date="titulo">Seleccione una fecha</option>
              {this.state.dates.map((obj=>(<option date={obj.month} 
              onAnimationEnd={this.actualizar(obj.month_text)}>{obj.month_text}   {obj.year}</option>)))}
        </select>
        </form> 
      )
    }
}
