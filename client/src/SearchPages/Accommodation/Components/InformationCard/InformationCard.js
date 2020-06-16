import React, { Component } from "react";
import { Item, Image, Rating, Grid, Divider } from "semantic-ui-react";

class InformationCard extends Component {
  getReviewValueAsInt(review) {
    let value = 1;
    switch (review) {
      case "TwoStar":
        value = 2;
        break;
      case "ThreeStar":
        value = 3;
        break;
      case "FourStar":
        value = 4;
        break;
      case "FiveStar":
        value = 5;
        break;
      default:
        value = 5;
        break;
    }
    return value;
  }

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
            <Grid.Column width={5}>
              <Grid.Row>
                <Item.Header as="a">{this.props.name}</Item.Header>
                <Item.Description as="p">{this.props.description}</Item.Description>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={5}>
              <Grid.Row>
                <Item.Description as="p">
                  <b>Ubicacion:</b>{" "}
                  <a
                    href={
                      "https://maps.google.com/?q=" +
                      this.props.locationLatitude +
                      "," +
                      this.props.locationLongitude
                    }>
                    Google Maps Link
                  </a>
                </Item.Description>
                <Item.Description as="p">
                  <b>Telefono:</b> {this.props.phoneNumber}
                </Item.Description>
                <Item.Description>
                  <Rating
                    disabled
                    icon="star"
                    defaultRating={this.getReviewValueAsInt(this.props.reviewValue)}
                    maxRating={5}
                  />
                </Item.Description>
                <Divider></Divider>
                <Item.Extra as="p">
                  <li>
                    <b>Categoría:</b>
                    <p>{this.props.category}</p>
                  </li>
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
