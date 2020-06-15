import React, { Component } from "react";
import { http } from "../../services";
import "./RestaurantImage.css";

class RestaurantImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "../../img/restaurant-random.png",
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    http
      .request({
        url: `/images/${this.props.id}/restaurant`,
      })
      .then((images) => {
        const { url } = images[0];
        this.setState({ url: url, loading: false, error: false });
      })
      .catch((error) => {
        this.setState({ loading: false, error: true });
      })
      .finally(() => {
        this.setState({ loading: false, error: true });
      });
  }

  render() {
    const { url, loading, error } = this.state;
    const { isListView } = this.props;
    if (!loading && error) {
      return (
        <div>
          <img
            className={isListView ? "restaurant-list-image" : "restaurant-image"}
            src={url}
            alt="ImageRestaurant"
          />
        </div>
      );
    }
    return (
      <div>
        <img
          className={isListView ? "restaurant-list-image" : "restaurant-image"}
          src={require("../../img/restaurant-random.png")}
          alt="ImageRestaurant"
        />
      </div>
    );
  }
}

export default RestaurantImage;
