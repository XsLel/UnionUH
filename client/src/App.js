import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./services";
import { Admin } from "./Admin/Admin";
import { PageNotFound } from "./common";
import AddComidas from "./FoodAdd/Form"
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Admin} />
        <Route exact path="/404" component={PageNotFound} />
        <Route exact path="/restaurants/Comida" component={AddComidas} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
