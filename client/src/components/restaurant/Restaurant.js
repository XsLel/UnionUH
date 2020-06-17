import React from "react";
import RestaurantImage from "../restaurantImage/RestaurantImage";
import { Icon } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import Ranking from "../ranking/Ranking";
import "./Restaurant.css";
import { useHistory } from "react-router-dom";

function Restaurant(props) {
  let history = useHistory();
  const { restaurant } = props;
  const { id, name, qualification, direction, email, description, phone } = restaurant;
  return (
    <div className={"restaurant"}>
      <Grid
        container={true}
        onClick={() => history.push(`/restaurants/${restaurant.id}`)}>
        <Grid.Row>
          <Grid.Column width={5}>
            <RestaurantImage id={id} isListView={true} />
          </Grid.Column>
          <Grid.Column width={11}>
            <h4>{name}</h4>
            <div className={"description"}>{description}</div>
            <Ranking qualification={qualification} />
            <div className={"direction"}>
              <Icon color="black" name="mail" size="large" />
              {email}
            </div>
            <div className={"direction"}>
              <Icon color="black" name="phone" size="large" />
              {phone}
            </div>
            <div className={"direction"}>
              <Icon color="black" name="map marker alternate" size="large" />
              {direction}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Restaurant;
