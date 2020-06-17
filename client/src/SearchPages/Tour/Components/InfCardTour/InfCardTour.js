import React, { Component } from "react";
import { Item, Image, Grid, Segment, Divider } from "semantic-ui-react";

class InfCardTour extends Component {
  render() {
    return (
      <Segment>
        <Item>
          <Item.Content>
            <Grid columns={3}>
              <Grid.Column width={3}>
                <Grid.Row>
                  <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                </Grid.Row>
              </Grid.Column>
              <Grid.Column width={10}>
                <Grid.Row>
                  <Item.Header as="a">
                    <b>{this.props.name}</b>
                  </Item.Header>
                  <Divider></Divider>
                  <Item.Description as="p">
                    <b>Lugares que se visitaran: </b>
                    {this.props.place}
                  </Item.Description>
                  <Item.Description as="p">
                    <b>Nombre Empresa: </b>
                    {this.props.companyName}
                  </Item.Description>
                  <Item.Description as="p">
                    <b>Tiempo del Recorrido: </b>
                    {this.props.duration}
                  </Item.Description>
                  <Item.Description as="p">
                    <b>Telefono de la Empresa: </b>
                    {this.props.contactInformation}
                  </Item.Description>
                </Grid.Row>
              </Grid.Column>
            </Grid>
          </Item.Content>
        </Item>
      </Segment>
    );
  }
}

export default InfCardTour;
