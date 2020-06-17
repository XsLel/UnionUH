import React from "react";
import { TopMenu } from "../Admin/layout";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { TourSearchPage } from "./Tour/TourSearchPage";

export function TourPage() {
  let { path } = useRouteMatch();
  return (
    <>
      <TopMenu />
      <Grid>
        <Grid.Column>
          <Switch>
            <Route exact path={path} component={TourSearchPage} />
            <Route>
              <Redirect to="/404" />
            </Route>
          </Switch>
        </Grid.Column>
      </Grid>
    </>
  );
}
