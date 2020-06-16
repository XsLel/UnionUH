import React, { Component } from "react";
import { List } from "semantic-ui-react";
import { InformationCard } from "../InformationCard";

class DropdownList extends Component {
  renderItems() {
    const { data } = this.props;
    return data.map(
      ({
        id,
        name,
        phoneNumber,
        reviewValue,
        locationLongitude,
        locationLatitude,
        category,
        description,
      }) => (
        <InformationCard
          key={id}
          name={name}
          phoneNumber={phoneNumber}
          reviewValue={reviewValue}
          locationLongitude={locationLongitude}
          locationLatitude={locationLatitude}
          category={category}
          description={description}></InformationCard>
      )
    );
  }

  render() {
    return (
      <List divided relaxed>
        {this.renderItems()}
      </List>
    );
  }
}

export default DropdownList;
