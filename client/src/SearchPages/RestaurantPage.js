import React from "react";
import { TopMenu } from "../Admin/layout";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { RestaurantSearchPage } from "./Restaurant/RestaurantSearchPage";

export function RestaurantPage() {
  let { path } = useRouteMatch();
  return (
    <>
      <TopMenu />
      <Grid>
        <Grid.Column>
          <Switch>
            <Route exact path={path} component={RestaurantSearchPage} />
            <Route>
              <Redirect to="/404" />
            </Route>
          </Switch>
        </Grid.Column>
      </Grid>
    </>
  );
}
