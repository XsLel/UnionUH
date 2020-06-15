import React from "react";
import { http } from "../../../services";
import { Comment, Header, Rating } from "semantic-ui-react";

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
  cut() {
    if (this.state.commentarys.length > 15) {
      return this.state.commentarys.slice(
        this.state.commentarys.length - 15,
        this.state.commentarys.length
      );
    } else {
      return this.state.commentarys;
    }
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
  componentDidUpdate() {
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
        {this.cut().map((comment) => (
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
            </Comment.Content>
          </Comment>
        ))}
      </Comment.Group>
    );
  }
}
