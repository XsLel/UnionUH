import React, { Component } from 'react'
import { Comment, Form , Grid, GridColumn, Input } from 'semantic-ui-react'
import './css/Comentario.css';
class Comentario extends Component{
     constructor({comentar}){
	 	super();
	 	this.state = {
             count: 0,
	 	} 
     }
    
     updateCount(event){
		this.setState({
			count: event.target.value.length
	    });
	}
    render() {
    return ( 
        <GridColumn>
        <h2>Comentario</h2>
         <Comment.Group className="container">
             <h3>Titulo del comentario</h3>
             <div >
                 <Input type="text" size="large" name="tituloc" placeholder="Ingrese un titulo..." />
             </div>
             <Form reply>
                <h3>Tu comentario</h3>
                <Form.TextArea maxLength="253"placeholder="Escribe tu comentario..." 
                    className={ (this.state.count < 20 && this.state.count >0) ? "textarea-error" : ""} rows="3" 
                    onChange={this.updateCount.bind(this)} />
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