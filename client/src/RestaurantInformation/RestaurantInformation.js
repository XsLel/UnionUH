import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import Home from "./Home/Home";
import Galery from "./Galery/Galery";

export default function RestaurantInformation() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={Home} />
      <Route exact path={`${path}/galery`} component={Galery} />
      <Route>
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
}
