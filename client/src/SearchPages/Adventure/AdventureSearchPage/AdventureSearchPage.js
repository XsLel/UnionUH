import "../Styles/AdventureSearchPage.css";
import { Segment, Item, Container, Divider, Message } from "semantic-ui-react";
import { DropdownList } from "../Components/DropdownList";
import { SearchBar } from "../Components/SearchBar";
import React, { Component } from "react";
import { http } from "./../../../services";
import { useToasts } from "react-toast-notifications";

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
            <div class="search-bar-item">
              <SearchBar
                onSearchBarTextEnter={this.refreshSearchContent.bind(this)}
                onInvalidSearch={this.onInvalidSearch.bind(this)}
                addToast={this.props.addToast}></SearchBar>
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
                content="No se ha podido encontrar la aventura, ingrese datos nuevamente"></Message>
            ) : (
              <DropdownList data={this.state.dataArray}></DropdownList>
            )}
          </Item.Group>
        </Segment>
      </Container>
    );
  }
}

export default () => {
  const { addToast } = useToasts();
  return <AdventureSearchPage addToast={addToast} />;
};
