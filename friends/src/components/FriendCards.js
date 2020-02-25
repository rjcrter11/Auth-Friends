import React from "react";
import { Button } from "@material-ui/core";

const FriendCards = (props) => {
  console.log("friends cards props", props);
  return (
    <div className="card-container">
      <h3>Friend: {props.friend.name} </h3>
      <p> {props.friend.age} </p>
      <p> {props.friend.email} </p>
      <div>
        <Button onClick={props.deleteData}>x</Button>
      </div>
    </div>
  );
};

export default FriendCards;
