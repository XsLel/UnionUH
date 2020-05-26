import React, { Component } from 'react'
import { Comment, Form , Grid, GridColumn, Input } from 'semantic-ui-react'
import './css/Comentario.css';
class Comentario extends Component{
     constructor(props){
	 	super(props);
	 	this.state = {
             count: 0,
             titulo:"",
             comentario:""
	 	} 
     }
     updateCount(event){
		this.setState({
			count: event.target.value.length
	    });
    }
    handleChangeTitle=(event) => {
        this.setState({titulo: event.target.value});	
    }
    onInputComen=(event,{value}) => {
        this.setState({comentario:value});
        this.props.comentar(this.state.titulo,this.state.comentario);
    }
   
    render() {
    return ( 
        <GridColumn>
        <h2>Comentario</h2>
         <Comment.Group className="container">
             <h3>Titulo del comentario</h3>
             <div >
                 <Input type="text" size="large" onChange={this.handleChangeTitle} placeholder="Ingrese un titulo..." />
             </div>
             <Form reply>
                <h3>Tu comentario</h3>
                <Form.TextArea maxLength="253"placeholder="Escribe tu comentario..." 
                    className={ (this.state.count < 20 && this.state.count >0) ? "textarea-error" : ""} rows="3" 
                    onChange={this.updateCount.bind(this)} 
                    onInput={this.onInputComen} />
                <div className={(this.state.count < 20 && this.state.count >0) ? "counter-error" : "counter"}>{this.state.count} 
                    <label> caracteres(20 minimo)</label>
                </div>
             </Form>
         </Comment.Group>
    </GridColumn>
     );
    }
     
}
 
export default Comentario;