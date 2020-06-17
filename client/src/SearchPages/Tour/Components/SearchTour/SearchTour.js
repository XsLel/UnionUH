import React, { Component } from "react";
import { Input, Grid, ItemContent, Item, Button } from "semantic-ui-react";

class SearchTour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  handleChange(e) {
    this.setState({ searchText: e.target.value });
  }

  handleSearchClick(e) {
    if (this.state.searchText === "")
      this.props.addToast("Debe ingresar datos en el buscador", {
        appearance: "warning",
      });
    if (this.state.searchText === "" || this.validateSearchText(this.state.searchText))
      this.props.onSearchBarTextEnter(this.state.searchText);
    else this.props.onInvalidSearch();
  }

  validateSearchText(value) {
    return /^[\w\s]+$/.test(value);
  }

  render() {
    return (
      <Item>
        <ItemContent>
          <Grid>
            <Grid.Row>
              <Input
                maxLength="250"
                style={{ width: "70%" }}
                type="text"
                placeholder="Escriba algo para buscar"
                action
                onChange={this.handleChange.bind(this)}
                value={this.state.searchText}>
                <input />
                <Button onClick={this.handleSearchClick.bind(this)} type="submit">
                  Buscar
                </Button>
              </Input>
            </Grid.Row>
          </Grid>
        </ItemContent>
      </Item>
    );
  }
}
export default SearchTour;
