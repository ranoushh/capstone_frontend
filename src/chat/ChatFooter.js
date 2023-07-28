import React, { useState } from 'react';
import ChatWindow from './ChatWindow'; // Import the ChatWindow component


//the message box and the send button.
function ChatFooter({socket}) {
  const [message, setMessage] = useState('');

  function handleSendMessage(e){
    e.preventDefault();
    //if message is not empty: send the message to our backend 
    if (message.trim()) {
      socket.emit('message', {
        text: message,
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage('');
  };


  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendBtn">SEND</button>
      </form>

    </div>
  );
};

export default ChatFooter;