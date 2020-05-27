import React, { Component } from 'react';

class Politica extends Component {
  constructor(props){
    super(props)

    this.state={
      check1: false
    }
    this.onCheckChange= this.onCheckChange.bind(this)
  }
  onCheckChange(e){
    console.log(e.target.checked)
    this.setState({
      [e.target.name] : e.target.checked
    })
    this.props.aceptarPolitica(this.state.check1);
  }
  render(){
  return (
    <div>
      <input type="checkbox" name="check1" 
      checked={this.state.check1} onChange={this.onCheckChange}/>
      Certifico que esta opinión se basa en mi propia experiencia y es mi opinión genuina sobre este lugar turistico, y que no tengo ninguna relación personal ni comercial con este establecimiento, ni me ofrecieron ningún incentivo o pago desde ningún establecimiento para escribir esta opinión. Comprendo que llajta Tours tiene una política de tolerancia cero con las opiniones falsas.<br />
    </div>
  );
  }
}

export default Politica;