import "./SearchBar.css";
import React, { Component } from "react";
import {
  Input,
  Grid,
  ItemContent,
  Item,
  Button,
  List,
  LabelDetail,
} from "semantic-ui-react";
import { SearchFilter } from "../SearchFilter";
import { CategoryFilter } from "../CategoryFilter";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      star: "",
      category: "",
      searchText: "",
    };
  }

  handleChange(e) {
    this.setState({ searchText: e.target.value });
  }

  handleSearchClick(e) {
    if (this.state.searchText === "") {
      this.props.addToast("Debe ingresar datos en el buscador", {
        appearance: "warning",
      });
    }
    if (this.state.searchText === "" || this.validateSearchText(this.state.searchText))
      this.props.onSearchBarTextEnter(
        this.state.searchText,
        this.state.star,
        this.state.category
      );
    else this.props.onInvalidSearch();
  }

  filterHandleChange(starVal) {
    if (this.state.searchText === "" || this.validateSearchText(this.state.searchText))
      this.props.onSearchBarTextEnter(
        this.state.searchText,
        starVal,
        this.state.category
      );
    else this.props.onInvalidSearch();
    this.setState({ star: starVal });
  }

  filterHandleCategoryChange(category) {
    if (this.state.searchText === "" || this.validateSearchText(this.state.searchText))
      this.props.onSearchBarTextEnter(this.state.searchText, this.state.star, category);
    else this.props.onInvalidSearch();
    this.setState({ category: category });
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
            <Grid.Row>
              <List>
                <List.Item>
                  <div class="filter-label">
                    <LabelDetail content="Filtrar resultados desde"></LabelDetail>
                  </div>
                </List.Item>
                <List.Item>
                  <SearchFilter
                    onChangeFilter={this.filterHandleChange.bind(this)}></SearchFilter>
                </List.Item>
              </List>
            </Grid.Row>
            <Grid.Row>
              <List>
                <List.Item class="filter-label">
                  <div>
                    <LabelDetail content="Filtrar resultados por categoría"></LabelDetail>
                  </div>
                </List.Item>
                <CategoryFilter
                  onChangeFilter={this.filterHandleCategoryChange.bind(
                    this
                  )}></CategoryFilter>
              </List>
            </Grid.Row>
          </Grid>
        </ItemContent>
      </Item>
    );
  }
}
export default SearchBar;
