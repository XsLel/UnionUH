import React, { Component } from "react";
import { Form, Image } from "semantic-ui-react";

class ImagePrev extends Component {
  state = {
    selectedFile: null,
    imagePreviewUrl: null,
  };

  fileChangedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });

    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  render() {
    let $imagePreview = (
      <div className="previewText image-container">
        <Form>
          <Form.Field>
            <Image
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              size="small"
              name="fotoRestaurante"
              style={{ width: 140 }}
            />
            Seleccione una Imagen
          </Form.Field>
        </Form>
      </div>
    );
    if (this.state.imagePreviewUrl) {
      $imagePreview = (
        <div className="image-container">
          <Form>
            <Form.Field>
              <Image
                src={this.state.imagePreviewUrl}
                size="small"
                name="fotoRestaurante"
                style={{ width: 140 }}
              />
            </Form.Field>
          </Form>
        </div>
      );
    }

    return (
      <div className="App">
        {$imagePreview}

        <input
          type="file"
          id="archivo"
          name="avatar"
          accept="image/*"
          onChange={this.fileChangedHandler}
          style={{ width: 180 }}
        />
      </div>
    );
  }
}

export default ImagePrev;
