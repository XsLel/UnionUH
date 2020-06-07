import React from "react";

const Gallery = (props) => {
  let { images } = props;

  //Prueba
  if (typeof images !== "undefined") {
    console.log("Hola desde el componente galería");
    console.log(images);
  }

  return <h4>Galería</h4>;
};

export default Gallery;
import { withRouter } from "react-router-dom";

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: "",
    };

    this.onTextChange = this.onTextChange.bind(this);
  }
  onTextChange(e) {
    this.setState({
      textValue: e.target.value,
    });
  }

  render() {
    const { history } = this.props;

    return (
      <div>
        <p>pueba restanate</p>

        <button
          onClick={() => {
            history.goBack();
          }}>
          back
        </button>
      </div>
    );
  }
}

export default withRouter(Gallery);
