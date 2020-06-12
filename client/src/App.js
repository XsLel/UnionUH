import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./services";
import { Admin } from "./Admin/Admin";
import { PageNotFound } from "./common";

import AddComidas from "./FoodAdd/Form";
import Administrador from "./FoodAdd/pages/Administrador";
import Orden from "./FoodAdd/pages/Orden"
import Ordenc from "./FoodAdd/pages/Ordenc"
import Ordenb from "./FoodAdd/pages/Ordenb"
import Ordenp from "./FoodAdd/pages/Ordenp"

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Admin} />
        <Route exact path="/restaurants/Comida" component={AddComidas} />
        //
        <Route exact path="/restaurants/food" component={AddComidas} />
        <Route exact path="/prueba/administrador" component={Administrador} />
        <Route exact path="/prueba/admiinistrador" component={Orden}/>
        <Route exact path="/prueba/adminiistrador" component={Ordenc}/>
        <Route exact path="/prueba/administrrador" component={Ordenb}/>
        <Route exact path="/prueba/administraador" component={Ordenp}/>
        <Route exact path="/404" component={PageNotFound} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
