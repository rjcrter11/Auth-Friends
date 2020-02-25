import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import FriendCards from "./FriendCards";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendForm from "./FriendForm";

const Friends = (props) => {
  console.log("router props from friends component", props);
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

  const deleteData = (id) => {
    console.log("ive been clicked");
    axiosWithAuth()
      .delete(`/api/friends/:${id}`)
      .then((res) => {
        console.log("delete data", res);
        setFriends(res.data.filter((friend) => friend.id !== Number(id)));
      })
      .catch((err) => console.log(err));
  };

  const addAFriend = (friend) => {
    setFriends(friend);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Life's a joke, you're broke</h2>
      {friends.map((friend, index) => {
        return (
          <FriendCards key={index} friend={friend} deleteData={deleteData} />
        );
      })}
      <FriendForm addAFriend={addAFriend} />
    </div>
  );
};

export default Friends;
