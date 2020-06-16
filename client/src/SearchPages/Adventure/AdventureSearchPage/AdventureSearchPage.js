import { Segment, Item, Container, Divider, Label } from "semantic-ui-react";
import { DropdownList } from "../Components/DropdownList";
import { SearchBar } from "../Components/SearchBar";
import React, { Component } from "react";
import { http } from "./../../../services";

class AdventureSearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      loading: true,
      searchText: "",
      invalidSearch: false,
    };
  }

  componentDidMount() {
    this.refreshSearchContent("");
  }

  onInvalidSearch() {
    this.setState({ invalidSearch: true });
  }

  refreshSearchContent(text) {
    this.setState({ searchText: text, invalidSearch: false });
    Promise.all([http.request({ url: "/adventure/all" })])
      .then((adventure) => {
        let found = adventure[0].filter((element) =>
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
                  : "No se ha podido encontrar la aventura, ingrese datos nuevamente"}
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

export default AdventureSearchPage;
