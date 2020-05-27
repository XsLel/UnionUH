import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import Home from "./Home/Home";

export default function RestaurantInformation() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={Home} />
      <Route>
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
}
