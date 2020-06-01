import React from "react";
import "semantic-ui-css/semantic.min.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import { history } from "./services";
import { Admin } from "./Admin/Admin";
import { FoodGallery } from "./components/FoodGallery";
import { PageNotFound } from "./common";
import { RestaurantGallery } from "./components/RestaurantGallery";
import { TouristicPlaceForm } from "./TouristicPlace";
import RestaurantInformation from "./RestaurantInformation/RestaurantInformation";

function App() {
  return (
    <HashRouter history={history}>
      <Switch>
        <Route exact path="/" component={Admin} />
        <Route
          exact
          path="/lugares-turisticos/registro"
          component={TouristicPlaceForm}
        />
        <Route
          exact
          path="/restaurants/:restaurantId"
          component={RestaurantInformation}
        />
        <Route
          exact
          path="/restaurants/:restaurantId/food-gallery"
          component={FoodGallery}
        />
        <Route
          exact
          path="/restaurants/:restaurantId/restaurant-gallery"
          component={RestaurantGallery}
        />
        <Route exact path="/lugaresturisticos" component={Start} />
        <Route exact path="/lugaresturisticos/mosaico" component={StartM} />
        <Route exact path="/404" component={PageNotFound} />
        <Route component={PageNotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
