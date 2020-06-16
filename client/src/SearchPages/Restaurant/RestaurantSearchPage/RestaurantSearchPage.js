import { Segment, Item, Container, Divider, Label } from "semantic-ui-react";
import { DropdownList } from "../Components/DropdownList";
import { SearchBar } from "../Components/SearchBar";
import React, { Component } from "react";
import { http } from "../../../services";

class RestaurantSearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      star: "",
      dataArray: [],
      loading: true,
      searchText: "",
      invalidSearch: false,
    };
  }

  componentDidMount() {
    this.refreshSearchContent("", "5");
  }

  onInvalidSearch() {
    this.setState({ invalidSearch: true });
  }

  refreshSearchContent(text, starVal) {
    this.setState({ searchText: text, star: starVal, invalidSearch: false });
    Promise.resolve(http.request({ url: "/restaurant/filter/" + starVal }))
      .then((restaurants) => {
        let found = restaurants.filter((element) =>
          element.name.toLowerCase().includes(text.toLowerCase())
        );
        this.setState({ dataArray: found });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;
    return (
      <Container>
        <Segment loading={loading}>
          <Item.Group>
            <SearchBar
              onSearchBarTextEnter={this.refreshSearchContent.bind(this)}
              onInvalidSearch={this.onInvalidSearch.bind(this)}></SearchBar>
            <Divider> </Divider>
            {this.state.dataArray.length <= 0 || this.state.invalidSearch ? (
              <Label size="massive">
                {this.state.invalidSearch
                  ? "Datos inválidos, debe ingresar solo caracteres alfanuméricos"
                  : "No se ha podido encontrar restaurantes, ingrese datos nuevamente"}
              </Label>
            ) : (
              <DropdownList data={this.state.dataArray}></DropdownList>
            )}
          </Item.Group>
        </Segment>
      </Container>
    );
  }
}

export default RestaurantSearchPage;
