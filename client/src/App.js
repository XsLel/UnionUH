import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./services";
import { Admin } from "./Admin/Admin";
import RestaurantInformation from "./RestaurantInformation/RestaurantInformation";
import { PageNotFound } from "./common";
import { GaleriaComida } from "./Components/GaleriaComida";
import { Restaurante } from "./Components/Restaurante";
import { GaleriaRestaurante } from "./Components/GaleriaRestaurante";
import "semantic-ui-css/semantic.min.css";

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
        <Route exact path="/restaurante" component={Restaurante} />{" "}
        //Incorporarse con '/restaurants/:restaurantId'
        <Route
          exact
          path="/restaurants/:restaurantId/galeria-comida"
          component={GaleriaComida}
        />
        <Route
          exact
          path="/restaurants/:restaurantId/galeria-restaurante"
          component={GaleriaRestaurante}
        />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
