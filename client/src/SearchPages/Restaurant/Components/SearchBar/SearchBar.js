import React, { Component } from "react";
import { Input, Grid, ItemContent, Item, Card, Button } from "semantic-ui-react";
import { SearchFilter } from "../SearchFilter";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      star: "5",
      search_text: "",
    };
  }

  handleChange(e) {
    this.setState({ search_text: e.target.value });
    if (e.target.value === "") this.props.onSearchBarTextEnter(e.target.value, "5");
  }

  handleSearchClick(e) {
    if (this.state.search_text === "") alert("Debe ingresar datos en el buscador");
    else if (this.validateSearchText(this.state.search_text))
      this.props.onSearchBarTextEnter(this.state.search_text, this.state.star);
    else {
      this.props.onInvalidSearch();
    }
  }

  filterHandleChange(starVal) {
    if (
      this.state.search_text === "" ||
      this.validateSearchText(this.state.search_text)
    ) {
      this.props.onSearchBarTextEnter(this.state.search_text, starVal);
    } else {
      this.props.onInvalidSearch();
    }
    this.setState({ star: starVal });
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
                maxLength="255"
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
            <Grid.Row>
              <Card>
                <SearchFilter
                  onChangeFilter={this.filterHandleChange.bind(this)}></SearchFilter>
              </Card>
            </Grid.Row>
          </Grid>
        </ItemContent>
      </Item>
    );
  }
}
export default SearchBar;
