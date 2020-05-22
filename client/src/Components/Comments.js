import React from "react";
import {
  CommentGroup,
  CommentAvatar,
  CommentContent,
  CommentAuthor,
  CommentMetadata,
  CommentText,
  CommentActions,
  CommentAction,
  Form,
  FormTextArea,
  Button,
  Comment,
  Divider,
} from "semantic-ui-react";

const Commentrestaurant = () => (
  <div>
    <Divider />
    <CommentGroup>
      <Comment>
        <CommentAvatar as="a" />
        <CommentContent>
          <CommentAuthor>nick del autor</CommentAuthor>
          <CommentMetadata>
            <div>21 de mayo 2020</div>
          </CommentMetadata>
          <CommentText>
            <p>Esto es un comentario :v</p>
          </CommentText>
          <CommentActions>
            <CommentAction>responder</CommentAction>
          </CommentActions>
        </CommentContent>
      </Comment>
      <Comment>
        <CommentAvatar as="a" />
        <CommentContent>
          <CommentAuthor>nick del autor</CommentAuthor>
          <CommentMetadata>
            <div>21 de mayo 2020</div>
          </CommentMetadata>
          <CommentText>
            <p>Esto es un comentario :v</p>
          </CommentText>
          <CommentActions>
            <CommentAction>responder</CommentAction>
          </CommentActions>
        </CommentContent>
      </Comment>
      <Form reply>
        <FormTextArea />
        <Button content="reponder" primary></Button>
      </Form>
    </CommentGroup>
    <br />
  </div>
);

export default Commentrestaurant;
