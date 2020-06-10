import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { http } from "../services";
import Gallery from "./Gallery";

class RestaurantGallery extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    const {
      match: {
        params: { restaurantId },
      },
    } = this.props;
    this.getRestaurantGallery(restaurantId);
  }

  getRestaurantGallery = (id) => {
    http
      .request({ url: `restaurantes/${id}/restaurant-gallery` })
      .then((url) => {
        this.setState({ gallery: url });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(this.setState({ loading: false }));
  };

  render() {
    let { loading, gallery } = this.state;
    return (
      <Segment loading={loading}>
        <h1>Galería del restaurante</h1>
        <Gallery images={gallery} />
      </Segment>
    );
  }
}

export default RestaurantGallery;
