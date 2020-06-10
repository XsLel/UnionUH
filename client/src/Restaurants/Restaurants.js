import React, { Component } from "react";
import CardRestaurant from "../components/restaurant/CardRestaurant";
import { Grid } from "semantic-ui-react";
import { TopMenu } from "../Admin/layout";
import "./Restaurants.css";
import { http } from "../services";
import Restaurant from "../components/restaurant/Restaurant";
import { restaurantsMocks } from "../services/mocks";

class Restaurants extends Component {
  state = {
    restaurants: [],
    restaurantsAux: [],
    loading: true,
    viewMain: true,
  };

  componentDidMount() {
    http
      .request({
        url: "/restaurantes/restaurants",
      })
      .then((restaurants) => {
        if (restaurants) {
          this.setState({
            restaurants: restaurants,
            restaurantsAux: restaurants,
            loading: false,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  filterRestaurant(text) {
    const { restaurants, restaurantsAux } = this.state;
    if (text.length > 0) {
      const filterRestaurant = restaurantsAux.filter((restaurant) =>
        restaurant.name.toUpperCase().includes(text.toUpperCase())
      );
      this.setState({ restaurantsAux: filterRestaurant });
    } else {
      this.setState({ restaurantsAux: restaurants });
    }
  }

  gridRestaurants(restaurants) {
    return (
      <Grid columns={3} divided={true}>
        <Grid.Row>
          {restaurants.map((restaurant, index) => {
            return (
              <CardRestaurant
                customClass={"card-Restaurants"}
                key={index}
                restaurant={restaurant}
              />
            );
          })}
        </Grid.Row>
      </Grid>
    );
  }

  listRestaurants(restaurants) {
    return (
      <div className={"restaurants"}>
        {restaurants.map((restaurant, index) => {
          return (
            <Restaurant
              customClass={"card-Restaurants-list"}
              key={index}
              restaurant={restaurant}
            />
          );
        })}
      </div>
    );
  }

  renderRestaurants() {
    const { restaurantsAux, viewMain } = this.state;
    if (restaurantsAux.length === 0) {
      return <h1>No existen restaurantes</h1>;
    }
    if (viewMain) {
      return this.gridRestaurants(restaurantsAux);
    } else {
      return this.listRestaurants(restaurantsAux);
    }
  }

  render() {
    const { loading, viewMain } = this.state;
    return (
      <div>
        <TopMenu
          showSearchRestaurant={true}
          filterRestaurant={(text) => this.filterRestaurant(text)}
        />
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <h1>Filtros</h1>
            </Grid.Column>
            <Grid.Column width={11}>
              <div className={"container-Restaurants"}>
                <div className="title">
                  <h1>Restaurantes</h1>
                  <div id={"btn-change-list"}>
                    <button
                      className="circular ui basic icon button"
                      onClick={() => this.changeView()}>
                      <i className={viewMain ? "icon align justify" : "icon th"} />
                    </button>
                  </div>
                </div>
                {loading ? <h1>Cargando</h1> : this.renderRestaurants()}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }

  changeView() {
    this.setState({
      viewMain: !this.state.viewMain,
    });
  }
}

export default Restaurants;
