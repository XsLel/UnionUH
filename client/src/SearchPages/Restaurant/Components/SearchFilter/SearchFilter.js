import React, { Component } from "react";
import { Select } from "semantic-ui-react";

const starOptions = [
  { key: "5", value: "5", text: "Filtrar resultados desde: Cinco estrellas" },
  { key: "4", value: "4", text: "Filtrar resultados desde: Cuatro estrellas" },
  { key: "3", value: "3", text: "Filtrar resultados desde: Tres estrellas" },
  { key: "2", value: "2", text: "Filtrar resultados desde: Dos estrellas" },
  { key: "1", value: "1", text: "Filtrar resultados desde: Una estrella" },
];

class SearchFilter extends Component {
  handleChange(e, data) {
    this.props.onChangeFilter(data.value);
  }

  render() {
    return (
      <Select
        onChange={this.handleChange.bind(this)}
        options={starOptions}
        defaultValue={"5"}
      />
    );
  }
}
export default SearchFilter;
