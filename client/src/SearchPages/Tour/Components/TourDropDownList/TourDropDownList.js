import React, { Component } from "react";
import { List } from "semantic-ui-react";
import { InfCardTour } from "../InfCardTour";

class TourDropDownList extends Component {
  renderItems() {
    const { data } = this.props;
    return data.map(({ id, name, companyName, duration, place, contactInformation }) => (
      <InfCardTour
        key={id}
        name={name}
        companyName={companyName}
        duration={duration}
        place={place}
        contactInformation={contactInformation}></InfCardTour>
    ));
  }

  render() {
    return (
      <List divided relaxed>
        {this.renderItems()}
      </List>
    );
  }
}

export default TourDropDownList;
