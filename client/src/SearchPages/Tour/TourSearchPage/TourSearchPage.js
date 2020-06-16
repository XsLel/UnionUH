import React, { Component } from "react";
import { Container, Divider, Label } from "semantic-ui-react";
import { TourDropDownList } from "../Components/TourDropDownList";
import { SearchTour } from "../Components/SearchTour";
import { http } from "../../../services";

class TourSearchPage extends Component {
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
    Promise.resolve(http.request({ url: "/tours/all" }))
      .then((tours) => {
        let found = tours.filter((element) =>
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
    return (
      <Container>
        <SearchTour
          onSearchBarTextEnter={this.refreshSearchContent.bind(this)}
          onInvalidSearch={this.onInvalidSearch.bind(this)}></SearchTour>
        <Divider> </Divider>
        {this.state.dataArray.length <= 0 || this.state.invalidSearch ? (
          <Label size="massive">
            {!this.state.invalidSearch
              ? "No se ha podido encontrar recorridos turísticos, ingrese datos nuevamente"
              : "Datos inválidos, debe ingresar solo caracteres alfanuméricos"}
          </Label>
        ) : (
          <TourDropDownList data={this.state.dataArray}></TourDropDownList>
        )}
      </Container>
    );
  }
}

export default TourSearchPage;
