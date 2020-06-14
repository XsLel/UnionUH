import React, { Component } from "react";
import CardRestaurant from "../components/restaurant/CardRestaurant";
import { Grid } from "semantic-ui-react";
import { TopMenu } from "../Admin/layout";
import "./Restaurants.css";
import { http } from "../services";
import Restaurant from "../components/restaurant/Restaurant";
import Pagination from "semantic-ui-react/dist/commonjs/addons/Pagination";

class Restaurants extends Component {
  state = {
    restaurants: [],
    restaurantsAux: [],
    restaurantCurrent: [],
    loading: true,
    viewMain: true,
  };

  componentDidMount() {
    http
      .request({
        url: "/restaurantes/restaurants",
      })
      .then((restaurants) => {
        if (restaurants && restaurants.length > 0) {
          if (restaurants.length > 9) {
            this.setState({
              activePage: 1,
              itemCurrent: restaurants.slice(0, 9),
              restaurants: restaurants,
              restaurantsAux: restaurants,
              loading: false,
            });
          } else {
            this.setState({
              activePage: 1,
              itemCurrent: restaurants,
              restaurants: restaurants,
              restaurantsAux: restaurants,
              loading: false,
            });
          }
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
      const filterRestaurant = restaurantsAux.filter(
        (restaurant) =>
          restaurant.name.toUpperCase().includes(text.toUpperCase()) ||
          restaurant.direction.toUpperCase().includes(text.toUpperCase())
      );
      if (filterRestaurant.length > 9) {
        this.setState({
          restaurantsAux: filterRestaurant,
          activePage: 1,
          itemCurrent: filterRestaurant.slice(0, 9),
        });
      } else {
        this.setState({
          restaurantsAux: filterRestaurant,
          activePage: 1,
          itemCurrent: filterRestaurant,
        });
      }
    } else {
      this.setState({
        restaurantsAux: restaurants,
        itemCurrent: restaurants.slice(0, 9),
        activePage: 1,
      });
    }
  }

  changePage(event, data) {
    const { activePage } = data;
    const { restaurantsAux } = this.state;
    const lastItem = activePage * 9;
    const firstItem = lastItem - 9;
    const currentItemAux = restaurantsAux.slice(firstItem, lastItem);
    this.setState({
      activePage: activePage,
      itemCurrent: currentItemAux,
    });
  }

  gridRestaurants(restaurants) {
    return (
      <Grid columns={3} divided={true}>
        <Grid.Row>
          {restaurants.map((restaurant, index) => {
            return <CardRestaurant key={index} restaurant={restaurant} />;
          })}
        </Grid.Row>
      </Grid>
    );
  }

  listRestaurants(restaurants) {
    return (
      <div>
        {restaurants.map((restaurant, index) => {
          return <Restaurant key={index} restaurant={restaurant} />;
        })}
      </div>
    );
  }

  renderRestaurants() {
    const { restaurantsAux, viewMain, itemCurrent } = this.state;
    if (restaurantsAux.length === 0) {
      return <h1>No existen restaurantes</h1>;
    }
    if (viewMain) {
      return this.gridRestaurants(itemCurrent);
    } else {
      return this.listRestaurants(itemCurrent);
    }
  }

  render() {
    const { loading, viewMain, restaurantsAux, activePage } = this.state;
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
              {restaurantsAux.length > 0 ? (
                <Pagination
                  onPageChange={(event, data) => this.changePage(event, data)}
                  activePage={activePage}
                  firstItem={null}
                  lastItem={null}
                  defaultActivePage={5}
                  totalPages={restaurantsAux.length / 9}
                />
              ) : null}
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
