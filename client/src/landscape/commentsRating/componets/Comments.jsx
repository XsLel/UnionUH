import React from "react";
import { http } from "../../../services";
import { Button, Comment, Form, Header, Rating } from "semantic-ui-react";

export default class Comments extends React.Component {
  state = {
    commentarys: [],
    ultimos: [],
    image: [
      "https://react.semantic-ui.com/images/avatar/small/matt.jpg",
      "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
      "https://react.semantic-ui.com/images/avatar/small/joe.jpg",
    ],
    names: ["Joe", "Matt", "Elliot", "Royher", "Mark", "Dany"],
  };

  imagealeatoire(image) {
    var i;
    i = Math.floor(3 * Math.random());
    return this.state.image[i];
  }
  namesAleatoire(names) {
    var i;
    i = Math.floor(6 * Math.random());
    return this.state.names[i];
  }

  componentDidMount() {
    http
      .request({ url: "/commentary/" })
      .then((res) => this.setState({ commentarys: res }));
  }
  render() {
    return (
      <Comment.Group>
        <Header as="h3" dividing>
          Comentarios recientes
        </Header>
        {this.state.commentarys.map((comment) => (
          <Comment>
            <Comment.Avatar src={this.imagealeatoire(this.state.image)} />
            <Comment.Content>
              <Comment.Author as="a">{comment.title}</Comment.Author>
              <Comment.Metadata>
                <Rating defaultRating={comment.generalRating} maxRating={5} disabled />
                <div> at {comment.actualDate}</div>
              </Comment.Metadata>
              <Comment.Text>{comment.description}</Comment.Text>
              <Comment.Author as="a">
                {this.namesAleatoire(this.state.names)}
              </Comment.Author>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        ))}

        <Form reply>
          <Form.TextArea />
          <Button content="Add Reply" labelPosition="left" icon="edit" primary />
        </Form>
      </Comment.Group>
    );
  }
}
