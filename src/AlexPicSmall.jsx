import React from "react";
import alexpicSmallResized from "./alexpicSmallResized.png";

class AlexPicSmall extends React.Component {
  render() {
    return (
      <img
        src={alexpicSmallResized}
        alt="alex small sized"
        className="xs center"
      ></img>
    );
  }
}

export default AlexPicSmall;
