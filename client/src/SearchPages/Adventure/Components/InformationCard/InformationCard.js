import React from "react";
import { Item, Image, Grid } from "semantic-ui-react";

export function InformationCard(props) {
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
              <Item.Header as="a">{props.name}</Item.Header>
              <Item.Description as="p">
                <li>
                  <b>Nombre de la agencia: </b>
                  <p>{props.nameAgency}</p>
                </li>
              </Item.Description>
              <li>
                <b>Duración: </b>
                <p>{props.duration}</p>
              </li>
              <Item.Description as="p">
                <b>Teléfono: </b> {props.phoneNumber}
              </Item.Description>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Item.Content>
    </Item>
  );
}
