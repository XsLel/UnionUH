import React, { Component } from "react";
import { Item, Image, Rating, Grid } from "semantic-ui-react";

class InformationCard extends Component {
  render() {
    return (
      <Item>
        <Item.Content>
          <Grid columns={2}>
            <Grid.Column width={4}>
              <Grid.Row>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={10}>
              <Grid.Row>
                <Item.Header as="a">{this.props.name}</Item.Header>
                <Item.Description as="p">
                  <b>Ubicacion:</b>
                  {" " + this.props.direction}
                </Item.Description>
                <Item.Description as="p">
                  <li>
                    <b>Horario de atencion:</b>
                    <p>{this.props.information}</p>
                  </li>
                </Item.Description>
                <Item.Description as="p">
                  <b>Telefono:</b> {this.props.phone}
                </Item.Description>
                <Item.Extra>
                  <Rating
                    disabled
                    icon="star"
                    defaultRating={this.props.qualification}
                    maxRating={5}
                  />
                </Item.Extra>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Item.Content>
      </Item>
    );
  }
}

export default InformationCard;
