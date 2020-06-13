import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./services";
import { Admin } from "./Admin/Admin";
import { PageNotFound } from "./common";
import RegisterRestaurant from "./Components/Form";
import Modificar from "./Components/Modificar";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Admin} />
        <Route
          exact
          path="/RegisterRestaurant"
          component={RegisterRestaurant}
        />
        <Route exact path="/modifyRestaurant" component={Modificar} />
        <Route exact path="/404" component={PageNotFound} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
