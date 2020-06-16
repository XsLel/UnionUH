import React, { Component } from "react";
import { Select } from "semantic-ui-react";

const starOptions = [
  { key: "5", value: "5", text: "Cinco estrellas" },
  { key: "4", value: "4", text: "Cuatro estrellas" },
  { key: "3", value: "3", text: "Tres estrellas" },
  { key: "2", value: "2", text: "Dos estrellas" },
  { key: "1", value: "1", text: "Una estrella" },
];

class SearchFilter extends Component {
  handleChange(e, data) {
    this.props.onChangeFilter(data.value);
  }

  render() {
    return (
      <Select
        placeholder="Filtrar por estrellas"
        onChange={this.handleChange.bind(this)}
        options={starOptions}
      />
    );
  }
}
export default SearchFilter;
