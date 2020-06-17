import React from "react";
import { http } from "../../../services";
export default class VisitDate extends React.Component {
  constructor(props) {
    super();
    this.state = {
      dates: [],
      val: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.val = event.target.value;
    this.props.visitDate(this.val);
  }

  componentDidMount() {
    http
      .request({ url: "/commentary/dates" })
      .then((res) => this.setState({ dates: res }));
  }

  render() {
    return (
      <div>
        <h3>Año y mes de su visita</h3>
        <form>
          <select value={this.state.value} onChange={this.handleChange}>
            <option date="titulo">Seleccione una fecha</option>
            {this.state.dates.map((obj) => (
              <option date={obj.month}>
                {obj.month_text} {obj.year}
              </option>
            ))}
          </select>
        </form>
      </div>
    );
  }
}
