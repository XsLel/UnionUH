import React, { Component } from "react";
import { Comment, Form, GridColumn, Input } from "semantic-ui-react";
import "./css/Commentary.css";
class Commentary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  updateCount(event) {
    this.setState({
      count: event.target.value.length,
    });
  }
  handleChangeTitle = (event) => {
    this.props.newTitle(event.target.value);
  };
  onInputComen = (event, { value }) => {
    this.props.newCount(this.state.count);
    this.props.newDescription(value);
  };

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
            <Form.TextArea
              maxLength="230"
              placeholder="Escribe tu comentario..."
              className={
                (this.state.count < 20 && this.state.count > 0) ||
                (this.state.count === 230 && this.state.count > 0)
                  ? "textarea-error"
                  : ""
              }
              rows="2"
              onChange={this.updateCount.bind(this)}
              onInput={this.onInputComen}
            />
            <div
              className={
                (this.state.count < 20 && this.state.count > 0) ||
                (this.state.count === 230 && this.state.count > 0)
                  ? "counter-error"
                  : "counter"
              }
            >
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
