import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";

const activityOptions = [
  {
    key: "2",
    text: "Busqueda de Aventura",
    value: "search-adventure",
  },
];

class SearchActivityOption extends Component {
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
      <Dropdown text="Búsqueda de Actividades" floating labeled button className="icon">
        <Dropdown.Menu>
          <Dropdown.Menu scrolling>
            {activityOptions.map((option) => (
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
export default withRouter(SearchActivityOption);
