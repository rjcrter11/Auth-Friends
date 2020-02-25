import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendForm = (props) => {
  const [addFriend, setAddFriend] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: ""
  });

  const newFriend = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", addFriend)
      .then((res) => {
        console.log(res);
        props.addAFriend(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleChanges = (e) => {
    console.log("Checking event stuff", e.target);
    // e.preventDefault();
    setAddFriend({
      ...addFriend,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="new-friend-form">
      <form onSubmit={newFriend}>
        <TextField
          type="text"
          name="name"
          label="name"
          onChange={handleChanges}
          value={addFriend.name}
        />
        <TextField
          type="number"
          name="age"
          label="age"
          onChange={handleChanges}
          value={addFriend.age}
        />
        <TextField
          type="text"
          name="email"
          label="email"
          onChange={handleChanges}
          value={addFriend.email}
        />
        <Button type="submit">Add a friend!</Button>
      </form>
    </div>
  );
};

export default FriendForm;
