import React from "react";
import "semantic-ui-css/semantic.min.css";
import { ToastProvider } from "react-toast-notifications";
import { HashRouter, Switch, Route } from "react-router-dom";
import { history } from "./services";
import { Admin } from "./Admin/Admin";
import { FoodGallery } from "./components/FoodGallery";
import { PageNotFound } from "./common";
import { RestaurantGallery } from "./components/RestaurantGallery";
import { TouristicPlaceForm } from "./TouristicPlace";
import CommentRating from "./landscape/commentsRating/CommentRating";
import RestaurantInformation from "./RestaurantInformation/RestaurantInformation";
import Start from "./start";
import StartM from "./startMosaico";
import Restaurants from "./Restaurants/Restaurants";
import { AdventurePage } from "./SearchPages/AdventurePage";

function App() {
  return (
    <ToastProvider autoDismiss>
      <HashRouter history={history}>
        <Switch>
          <Route exact path="/" component={Admin} />
          <Route exact path="/search-adventure" component={AdventurePage} />
          <Route exact path="/commentrating" component={CommentRating} />
          <Route exact path="/restaurants" component={Restaurants} />
          <Route
            exact
            path="/lugares-turisticos/registro"
            component={TouristicPlaceForm}
          />
          <Route
            exact
            path="/restaurants/:restaurantId"
            component={RestaurantInformation}
          />
          <Route
            exact
            path="/restaurants/:restaurantId/food-gallery"
            component={FoodGallery}
          />
          <Route
            exact
            path="/restaurants/:restaurantId/restaurant-gallery"
            component={RestaurantGallery}
          />
          <Route exact path="/lugares-turisticos" component={Start} />
          <Route exact path="/lugares-turisticos/mosaico" component={StartM} />
          <Route exact path="/404" component={PageNotFound} />
          <Route component={PageNotFound} />
        </Switch>
      </HashRouter>
    </ToastProvider>
  );
}

export default App;
