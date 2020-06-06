import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./services";
import { Admin } from "./Admin/Admin";
import { PageNotFound } from "./common";

import AddComidas from "./FoodAdd/Form";
import Administrador from "./FoodAdd/pages/Administrador";
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Admin} />
        <Route exact path="/restaurants/Comida" component={AddComidas} />
        //
        <Route exact path="/restaurants/food" component={AddComidas} />
        <Route exact path="/prueba/administrador" component={Administrador} />
        <Route exact path="/404" component={PageNotFound} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
