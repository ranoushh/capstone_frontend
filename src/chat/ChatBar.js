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

  async function fetchMe() {
    console.log("RUNNING DISPATCH FROM FETCHMe");
    dispatch(await me());
  }

  function fetchFriends() {
    console.log("RUNNING DISPATCH FROM FETCH FRIENDS");
    dispatch(fetchFriendsThunk(user));
  }

  useEffect(() => {
    fetchMe();
    // if(user.id){
    //    fetchFriends();
    // }
    // dispatch(me());
    if(user.id){
      dispatch(fetchFriendsThunk(user.id));
    }
    
    // async function runAll(){
    //   await fetchMe();
    //   await fetchFriends();
    // };
    // runAll();
  }, [dispatch]);

  // useEffect(() => {
  //   async function fetchData() {
  //     await fetchMe();
  //     await fetchFriends();
  //   }
  //   fetchData();
  // }, []);

  function handleSubmit() {}

  console.log("user " + user.id);
  console.log("friends " + friends);
  return (
    <div className="chat__sidebar">
      <h2>APP NAME</h2>

      <div>
        <h4 className="chat__header">Friends</h4>
        <div className="chat__users">
          <button onClick={handleSubmit}>Learning Bot</button>
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
