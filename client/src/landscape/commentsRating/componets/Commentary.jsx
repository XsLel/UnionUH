import React, { Component } from "react";
import { Comment, Form, GridColumn, Input, TextArea } from "semantic-ui-react";
import "./css/Commentary.css";
class Commentary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: " ",
      count: 0,
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  updateCount(n) {
    this.setState({
      count: n,
    });
  }

  handleChangeTitle = (event) => {
    this.props.newTitle(event.target.value);
  };

  handleChangeInput(evento) {
    const { name, value } = evento.target;
    let regex = new RegExp("^[a-zA-Z .,]+$");

    if (regex.test(value)) {
      this.setState({
        [name]: value,
      });
      this.props.newDescription(value);
      this.updateCount(value.length - 1);
      this.props.newCount(value.length - 1);
    }
  }

  render() {
    return (
      <GridColumn>
        <h2>Comentario</h2>
        <Comment.Group className="container">
          <h3>Titulo del comentario</h3>
          <div>
            <Input
              type="text"
              size="large"
              onChange={this.handleChangeTitle}
              placeholder="Ingrese un titulo..."
            />
          </div>
          <Form reply>
            <h3>Tu comentario</h3>
            <TextArea
              name="comment"
              type="text"
              value={this.state.comment}
              onChange={this.handleChangeInput}
              maxLength="230"
              placeholder="Escribe tu comentario..."
              className={
                (this.state.count < 20 && this.state.count > 0) ||
                (this.state.count === 230 && this.state.count > 0)
                  ? "textarea-error"
                  : ""
              }
              rows="2"
            />
            <div
              className={
                (this.state.count < 20 && this.state.count > 0) ||
                (this.state.count === 230 && this.state.count > 0)
                  ? "counter-error"
                  : "counter"
              }>
              {this.state.count}
              <label>
                {this.state.count === 230 ? " llegaste  al maximo de " : "-"}
                caracteres(20 minimo)
              </label>
            </div>
          </Form>
        </Comment.Group>
      </GridColumn>
    );
  }
}

export default Commentary;
