import React, { Component } from "react";
import { Input, Grid, ItemContent, Item, Button } from "semantic-ui-react";

class SearchTour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_text: "",
    };
  }

  handleChange(e) {
    this.setState({ search_text: e.target.value });
    if (e.target.value === "") this.props.onSearchBarTextEnter("");
  }

  handleSearchClick(e) {
    if (this.state.search_text === "") alert("Debe ingresar datos en el buscador");
    else if (this.validateSearchText(this.state.search_text))
      this.props.onSearchBarTextEnter(this.state.search_text);
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
                value={this.state.search_text}>
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
