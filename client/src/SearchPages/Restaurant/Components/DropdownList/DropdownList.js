import React, { Component } from "react";
import { List } from "semantic-ui-react";
import { InformationCard } from "../InformationCard";

class DropdownList extends Component {
  renderItems() {
    const { data } = this.props;
    return data.map(({ id, name, phone, qualification, direction, information }) => (
      <InformationCard
        key={id}
        name={name}
        phone={phone}
        qualification={qualification}
        direction={direction}
        information={information}></InformationCard>
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
