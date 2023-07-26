import React from "react";

function ChatWindow({ friendId, messages }) {
  // Function to display the chat messages with the selected friend

  
  const renderChatMessages = () => {
    return messages.map((message) => (
      <div key={message.id} className="message__chats">
        {message.sender === friendId ? (
          <>
            <p>{message.senderName}</p>
            <div className="message__recipient">
              <p>{message.text}</p>
            </div>
          </>
        ) : (
          <>
            <p className="sender__name">You</p>
            <div className="message__sender">
              <p>{message.text}</p>
            </div>
          </>
        )}
      </div>
    ));
  };

  return (
    <div className="chat__window">
      <h2>Chat with Friend {friendId}</h2>
      {/* Render the chat messages */}
      <div className="message__container">
        {renderChatMessages()}
      </div>
    </div>
  );
}

export default ChatWindow;
