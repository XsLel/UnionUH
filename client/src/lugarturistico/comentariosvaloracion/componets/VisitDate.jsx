import React from "react";
import Axios from "axios";
import {http} from '../../../services'
export default class VisitDate extends React.Component {
constructor(props) {
  super();
   this.state = { 
    dates: [],
    val:""
    } 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  };
handleChange(event) {    
    this.val =event.target.value;  
    this.props.visitdate(this.val);
  }
handleSubmit(event) {
   
    if (!this.state.value){
      alert('Este campo es obligatorio');
    }else{
      alert('se selecciono: ' + this.state.value);
    }
 }

componentDidMount() { 
  Axios.get("http://localhost:8585/api/comentario/fechas").then(res=>this.setState({dates:res.data}))
 /* Promise.all([
    http.request({ url: "/api/comentario/fechas" }),
  ])
    .then(res=>this.setState({dates:res.data}))
    .catch((error) => {
      //should show error, for now just alerting in console
      console.error(error);
    })
    .finally(this.setState({ loading: false }));*/
}

render(){
return(

     <div>
        <h3>Año y mes de su visita</h3>
        <form onSubmit={this.handleSubmit}>
       
        <select value={this.state.value} onChange={this.handleChange}>
       
            <option date="titulo">Seleccione una fecha</option>
              {this.state.dates.map((obj=>(<option date={obj.month}>{obj.month_text}   {obj.year}</option>)))}
        </select>
        </form> 
     </div>
      )
    }
}
