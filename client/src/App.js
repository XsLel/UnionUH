import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./services";
import { Admin } from "./Admin/Admin";
import { PageNotFound } from "./common";
import CommentRating from './lugarturistico/comentariosvaloracion/CommentRating';
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Admin} />
        <Route exact path="/commentrating" component={CommentRating}/>
        <Route component={PageNotFound} />
        <Route exact path="/404" component={PageNotFound} />
       
      </Switch>
    </Router>
  );
}

export default App;
