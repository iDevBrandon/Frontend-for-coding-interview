import React from "react";

const DisplayNumber = (props) => {
  return (
    <div>
      <h1>Display Number</h1>
      <input type="text" value={props.number}></input>
    </div>
  );
};

export default DisplayNumber;
