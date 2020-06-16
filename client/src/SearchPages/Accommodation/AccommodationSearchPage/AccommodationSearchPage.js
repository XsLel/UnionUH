import { Segment, Item, Container, Divider, Label } from "semantic-ui-react";
import { DropdownList } from "../Components/DropdownList";
import { SearchBar } from "../Components/SearchBar";
import React, { Component } from "react";
import { http } from "../../../services";

class AccommodationSearchPage extends Component {
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
    this.refreshSearchContent("", "", "");
  }

  onInvalidSearch() {
    this.setState({ invalidSearch: true });
  }

  refreshSearchContent(text, starVal, category) {
    this.setState({ searchText: text, star: starVal, invalidSearch: false });
    Promise.all([
      http.request({
        url:
          "/accommodations/filter/" +
          (starVal === "" ? "5" : starVal) +
          "/" +
          (category === "" ? "Todos" : category),
      }),
    ])
      .then((accommodations) => {
        let found = accommodations[0].filter((element) =>
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
                  : "No se ha podido encontrar alojamiento, ingrese datos nuevamente"}
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

export default AccommodationSearchPage;
