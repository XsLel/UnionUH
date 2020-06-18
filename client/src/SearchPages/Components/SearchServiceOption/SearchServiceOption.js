import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";

const serviceOptions = [
  {
    key: "1",
    text: "Búsqueda de Restaurantes",
    value: "search-restaurant",
  },
  {
    key: "2",
    text: "Búsqueda por Alojamiento",
    value: "search-accommodation",
  },
];

class SearchServiceOption extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: "" };
  }

  handleActivity(e, value) {
    this.props.history.push("/" + value.value);
    console.log(this.state.selected);
    this.setState({ selected: "" });
  }

  render() {
    return (
      <Dropdown text="Buscar Servicios" floating labeled button className="icon">
        <Dropdown.Menu>
          <Dropdown.Menu scrolling>
            {serviceOptions.map((option) => (
              <Dropdown.Item
                key={option.value}
                {...option}
                onClick={this.handleActivity.bind(this)}
              />
            ))}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
export default withRouter(SearchServiceOption);
