import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";


//idea is that users can join a room by their roomid
function Chat() {
  const [user, setUser] = useState();
  const [room, setRoom] = useState();


  function joinRoom(){
    
  };

  return (
    <div>

        <h4>Start Chatting!</h4>
        <input type="text" placeholder="Name" onChange={(event) => {setUser(event.target.value)}}/>
        <input type="text" placeholder="Room ID" onChange={(event) => {setRoom(event.target.value)}}/>
        <button onSubmit= {joinRoom}>Join</button>
    </div>
  );
}

export default Chat;
