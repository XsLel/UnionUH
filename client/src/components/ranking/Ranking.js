import React from "react";
import { Rating } from "semantic-ui-react";

function Ranking(props) {
  const { qualification } = props;
  return (
    <div>
      <Rating
        icon="star"
        defaultRating={qualification}
        maxRating={5}
        size="huge"
        disabled={true}
      />
    </div>
  );
}

export default Ranking;
