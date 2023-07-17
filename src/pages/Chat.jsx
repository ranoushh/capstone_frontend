import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import io from 'socket.io-client';

//idea is that users can join a room by their roomid
function Chat() {
  // const [user, setUser] = useState("");
  // const [room, setRoom] = useState("");
  // const socket = io.connect(`http://localhost:8080`);

  // function joinRoom(){
  //   //only want to join a room if username is not empty, and room is not empty string as well
  //   if(user!=="" && room!==""){
  //     socket.emit("join_room", room);
  //   }
  // };

  // return (
  //   <div>

  //       <h4>Start Chatting!</h4>
  //       <input type="text" placeholder="Name" onChange={(event) => {setUser(event.target.value)}}/>
  //       <input type="text" placeholder="Room ID" onChange={(event) => {setRoom(event.target.value)}}/>
  //       <button onClick= {joinRoom}>Join</button>
  //   </div>
  // );
}

export default Chat;
