// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Navigation from "../components/Navigation";
// import io from 'socket.io-client';

// //idea is that users can join a room by their roomid
// function Chat() {
//   // const [user, setUser] = useState("");
//   // const [room, setRoom] = useState("");
//   // const socket = io.connect(`http://localhost:8080`);

//   // function joinRoom(){
//   //   //only want to join a room if username is not empty, and room is not empty string as well
//   //   if(user!=="" && room!==""){
//   //     socket.emit("join_room", room);
//   //   }
//   // };

//   // return (
//   //   <div>

//   //       <h4>Start Chatting!</h4>
//   //       <input type="text" placeholder="Name" onChange={(event) => {setUser(event.target.value)}}/>
//   //       <input type="text" placeholder="Room ID" onChange={(event) => {setRoom(event.target.value)}}/>
//   //       <button onClick= {joinRoom}>Join</button>
//   //   </div>
//   // );
// }

// export default Chat;

import React from 'react';
import { useState, useEffect } from 'react';
import ChatBar from '../chat/ChatBar';
import ChatBody from '../chat/ChatBody';
import ChatFooter from '../chat/ChatFooter';

function Chat({ socket }){
  //listen to message and display it
  const [messages, setMessages] = useState([]);

  //Socket.io listens to the messages sent via the messageResponse event 
  //and spreads the data into the messages array. The array of messages 
  //is passed into the ChatBody component for display on the UI.
  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  return (
    <div className="chat">
      <ChatBar socket = {socket} />
      <div className="chat__main">
        <ChatBody messages = {messages} />
        <ChatFooter socket = {socket} />
      </div>
    </div>
  );
};

export default Chat;