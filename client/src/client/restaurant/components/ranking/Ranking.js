import React from "react";

function Ranking(props) {
  const { qualification } = props;
  return (
    <div>
      <h2>{qualification}</h2>
    </div>
  );
}

export default Ranking;
