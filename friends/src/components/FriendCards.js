import React from "react";

const FriendCards = (props) => {
  console.log("friends cards props", props);
  return (
    <div className="card-container">
      <h3>Friend: {props.friend.name} </h3>
      <p> {props.friend.age} </p>
      <p> {props.friend.email} </p>
    </div>
  );
};

export default FriendCards;
