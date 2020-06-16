import "../Styles/TourSearchPage.css";
import React, { Component } from "react";
import { Container, Divider, Segment, Message } from "semantic-ui-react";
import { TourDropDownList } from "../Components/TourDropDownList";
import { SearchTour } from "../Components/SearchTour";
import { http } from "../../../services";
import { useToasts } from "react-toast-notifications";

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
    const { loading } = this.state;
    return (
      <Container>
        <Segment loading={loading}>
          <div class="search-bar-item">
            <SearchTour
              onSearchBarTextEnter={this.refreshSearchContent.bind(this)}
              onInvalidSearch={this.onInvalidSearch.bind(this)}
              addToast={this.props.addToast}></SearchTour>
          </div>
          <Divider> </Divider>
          {this.state.invalidSearch ? (
            <Message
              negative
              size="massive"
              header="Error en la búsqueda"
              content="Datos inválidos, debe ingresar solo caracteres alfanuméricos"
            />
          ) : this.state.dataArray.length <= 0 ? (
            <Message
              warning
              size="massive"
              header="Sin resultados"
              content="No se ha podido encontrar recorridos turísticos, ingrese datos nuevamente"></Message>
          ) : (
            <TourDropDownList data={this.state.dataArray}></TourDropDownList>
          )}
        </Segment>
      </Container>
    );
  }
}

export default () => {
  const { addToast } = useToasts();
  return <TourSearchPage addToast={addToast} />;
};
