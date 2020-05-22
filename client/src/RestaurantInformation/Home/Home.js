import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { http } from "../../services";
import { Container, Segment } from "semantic-ui-react";
import ViewInformation from "../ViewInformation/ViewInformation";
import Carrusel from "../Carrusel/Carrusel";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, found: true };
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
          nombre,
          provincia_región,
          información_adicional,
          correo_electronico,
          publicidad_web,
          descripcion,
          dirección,
          categoría,
          direccion_web,
          teléfono,
        }) => {
          this.setState({ found: true });
          this.setState({
            name: nombre,
            province: provincia_región,
            information: información_adicional,
            email: correo_electronico,
            commercial: publicidad_web,
            description: descripcion,
            direction: dirección,
            category: categoría,
            website: direccion_web,
            telephone: teléfono,
          });
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
      telephone,
    } = this.state;
    return (
      <Container>
        <Segment loading={loading}>
          <Carrusel />
          <ViewInformation
            name={name}
            province={province}
            information={information}
            email={email}
            commercial={commercial}
            description={description}
            direction={direction}
            category={category}
            website={website}
            telephone={telephone}
          />
          {!found && <Redirect to="/404" />}
        </Segment>
      </Container>
    );
  }
}

export default withRouter(Home);
