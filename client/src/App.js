import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./services";
import { Admin } from "./Admin/Admin";
import { PageNotFound } from "./common";
import Navbar from "./Components/Menu";
import Inforestaurant from "./Components/Information";
import Commentrestaurant from "./Components/Comments";
import Foot from "./Components/Footer";

function App() {
  return (
    <>
      {/*<Router history={history}>
      <Switch>
        <Route exact path="/" component={Admin} />
        <Route exact path="/404" component={PageNotFound} />
        <Route component={PageNotFound} />
      </Switch>
  </Router>*/}
      <Navbar />
      {/* aqui ira el componente del carrocel */}
      <Inforestaurant />
      <Commentrestaurant />
      <Foot />
    </>
  );
}

export default App;
