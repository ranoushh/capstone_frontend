import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFriendsThunk } from "../redux/usersCrud/users.actions";
import { me } from "../redux/user";

// sidebar showing active users
function ChatBar() {
  const user = useSelector((state) => state.user);
  const friends = useSelector((state) => state.usersCrud.friends);
  const dispatch = useDispatch();

  async function fetchAllData(){
    try {
      await dispatch(me());
      await dispatch(fetchFriendsThunk(user.id));
    } catch (error) {
      console.log("error fetching data " + error)
    } 
  }

  useEffect(() => {
    fetchAllData();
  }, [dispatch, user.id]);

  function handleSubmit() {


  }

  console.log("user " + user.id);
  console.log("friends " + friends);

  return (
    <div className="chat__sidebar">
      <h2>APP NAME</h2>

      <div>
        <h4 className="chat__header">Friends</h4>
        <div className="chat__users">
          <button onClick={handleSubmit}>friend1</button>
          <p></p>
          {/* here we need to list ALL USERS FRIENDS */}
          {friends && friends.length > 0
            ? friends.map((item) => <li key={item}>{item.userId2}</li>)
            : "Loading friends..."}
        </div>
      </div>
    </div>
  );
}

export default ChatBar;
