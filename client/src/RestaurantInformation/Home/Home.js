import React, { Component, Fragment } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { http } from "../../services";
import { Container, Segment } from "semantic-ui-react";
import Carousel from "../carousel/carousel"; //// carrusel >>Carousel
import Information from "../../Components/Information";
import Menu from "../../Components/Menu";
import Footer from "../../Components/Footer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, found: true, carousel: [], home: [] }; //// carrusel >>Carousel
  }

  componentDidMount() {
    const {
      match: {
        params: { restaurantId },
      },
    } = this.props;
    this.getDataRestaurant(restaurantId);
  }

  getDataRestaurant(id) {
    Promise.resolve(http.request({ url: `/restaurantes/${id}` }))
      .then(
        ({
          name,
          province,
          information,
          email,
          commercial,
          description,
          direction,
          category,
          website,
          phone,
          photos,
        }) => {
          const home = photos.filter(({ home }) => home).map(({ url }) => url);
          const carousel = photos
            .filter(({ carousel }) => carousel)
            .map(({ url }) => url);
          this.setState({
            name: name,
            province: province,
            information: information,
            email: email,
            commercial: commercial,
            description: description,
            direction: direction,
            category: category,
            website: website,
            phone: phone,
            home: home,
            carousel: carousel,
          });
          this.setState({ found: true });
        }
      )
      .catch((error) => {
        console.error(error);
        this.setState({ found: false });
      })
      .finally(this.setState({ loading: false }));
  }

  render() {
    const {
      found,
      loading,
      name,
      province,
      information,
      email,
      commercial,
      description,
      direction,
      category,
      website,
      phone,
      carousel, //// carrusel >>Carousel
      home,
    } = this.state;

    return (
      <Fragment>
        <Menu />
        <Carousel carousel={carousel} />
        <Container>
          <Segment loading={loading}>
            <Information
              name={name}
              province={province}
              information={information}
              email={email}
              commercial={commercial}
              description={description}
              direction={direction}
              category={category}
              website={website}
              phone={phone}
              linkPhotos={home}
            />
            {!found && <Redirect to="/404" />}
          </Segment>
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default withRouter(Home);
