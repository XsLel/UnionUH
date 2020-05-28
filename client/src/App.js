import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./services";
import { Admin } from "./Admin/Admin";
import RestaurantInformation from "./RestaurantInformation/RestaurantInformation";
import { PageNotFound } from "./common";
import { FoodGallery } from "./Components/FoodGallery";
import { RestaurantGallery } from "./Components/RestaurantGallery";
import "semantic-ui-css/semantic.min.css";
import Start from "./start";
import StartM from "./startMosaico";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Admin} />
        <Route exact path="/404" component={PageNotFound} />
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
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
