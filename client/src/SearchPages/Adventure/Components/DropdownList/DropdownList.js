import React, { Component } from "react";
import { List } from "semantic-ui-react";
import { InformationCard } from "../InformationCard";

class DropdownList extends Component {
  renderItems() {
    const { data } = this.props;
    return data.map(({ id, name, nameA, duration, phoneNumber }) => (
      <InformationCard
        key={id}
        name={name}
        nameA={nameA}
        phoneNumber={phoneNumber}
        duration={duration}></InformationCard>
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

export default DropdownList;
