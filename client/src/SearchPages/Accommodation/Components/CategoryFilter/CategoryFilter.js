import React, { Component } from "react";
import { Select } from "semantic-ui-react";

const categoryOptions = [
  { key: "1", value: "Todos", text: "Todos" },
  { key: "2", value: "Hotel", text: "Filtrar por Hoteles" },
  { key: "3", value: "Hostal", text: "Filtrar por Hostales" },
  { key: "4", value: "CasaPrivada", text: "Filtrar por Casas Privadas" },
];

class CategoryFilter extends Component {
  handleChange(e, data) {
    this.props.onChangeFilter(data.value);
  }

  render() {
    return (
      <Select
        placeholder="Filtrar por categoría"
        onChange={this.handleChange.bind(this)}
        options={categoryOptions}
      />
    );
  }
}
export default CategoryFilter;
