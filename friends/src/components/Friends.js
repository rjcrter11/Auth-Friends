import React, { useState, useEffect } from "react";

import FriendCards from "./FriendCards";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendForm from "./FriendForm";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  const getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log("Friends data: ", res);
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const addAFriend = (friend) => {
    setFriends(friend);
  };

  return (
    <div>
      <h2>Life's a joke, you're broke</h2>
      {friends.map((friend, index) => {
        return <FriendCards key={index} friend={friend} />;
      })}
      <FriendForm addAFriend={addAFriend} />
    </div>
  );
};

export default Friends;
