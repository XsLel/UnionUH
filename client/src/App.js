import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./services";
import { Admin } from "./Admin/Admin";
import { PageNotFound } from "./common";
import { BrowserRouter } from "react-router-dom";
import { GaleriaComida } from "./Components/GaleriaComida";
import { Restaurante } from "./Components/Restaurante";
import { GaleriaRestaurante } from "./Components/GaleriaRestaurante";

function App() {
  return (
    /**Debe estar dentro de Router/Switch/
     * <Route exact path="/" component={Admin}
     * <Route exact path="/404" component={PageNotFound} />
     * <Route component={PageNotFound} />/>
     * */

    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/restaurante" component={Restaurante} />
          <Route exact path="/galeria-comida" component={GaleriaComida} />
          <Route
            exact
            path="/galeria-restaurante"
            component={GaleriaRestaurante}
          />
          <Route exact path="/" component={Admin} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
