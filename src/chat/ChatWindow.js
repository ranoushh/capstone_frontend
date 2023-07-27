import React from 'react';

function ChatWindow({ messages }) {
  // Check if messages array is empty or not yet loaded
  if (messages.length === 0) {
    return <p>Loading messages...</p>;
  }

  return (
    <div className="chat__window">
      {messages.map((message) => (
        <div key={message.id}>
          {/* Your message rendering code */}
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatWindow;
