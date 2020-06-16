import "../Styles/RestaurantSearchPage.css";
import { Segment, Item, Container, Divider, Message } from "semantic-ui-react";
import { DropdownList } from "../Components/DropdownList";
import { SearchBar } from "../Components/SearchBar";
import React, { Component } from "react";
import { http } from "../../../services";
import { useToasts } from "react-toast-notifications";

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
            <div class="search-bar-item">
              <SearchBar
                addToast={this.props.addToast}
                onSearchBarTextEnter={this.refreshSearchContent.bind(this)}
                onInvalidSearch={this.onInvalidSearch.bind(this)}></SearchBar>
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
                content="No se ha podido encontrar restaurantes, ingrese datos nuevamente"></Message>
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
  return <RestaurantSearchPage addToast={addToast} />;
};
