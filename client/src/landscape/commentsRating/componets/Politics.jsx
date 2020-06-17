import React, { Component } from "react";

class Politics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      check: false,
    };
    this.onCheckChange = this.onCheckChange.bind(this);
  }
  onCheckChange(e) {
    this.props.acceptPolicies(e.target.checked);
  }
  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="check"
          checked={this.state.check1}
          onChange={this.onCheckChange}
        />
        Certifico que esta opinión se basa en mi propia experiencia y es mi opinión
        genuina sobre este lugar turistico, y que no tengo ninguna relación personal ni
        comercial con este establecimiento, ni me ofrecieron ningún incentivo o pago desde
        ningún establecimiento para escribir esta opinión. Comprendo que llajta Tours
        tiene una política de tolerancia cero con las opiniones falsas.
        <br />
      </div>
    );
  }
}

export default Politics;
