import React, { Component } from "react";
import { List } from "semantic-ui-react";
import { InformationCard } from "../InformationCard/InformationCard";

class DropdownList extends Component {
  renderItems() {
    const { data } = this.props;
    return data.map(({ id, name, nameAgency, duration, phoneNumber }) => (
      <InformationCard
        key={id}
        name={name}
        nameAgency={nameAgency}
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
