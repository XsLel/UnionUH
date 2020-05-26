import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "../services";
import Footer from "../footer";
import Listado from "../listado";
import Header from "../header";
import Mosaico from "../mosaico";
function start() {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={Listado} />
          <Route path="/mosaico" exact component={Mosaico} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default start;
