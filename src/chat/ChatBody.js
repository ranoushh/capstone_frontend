import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux"

//containing the sent messages and the header
function ChatBody ({messages}){
  const navigate = useNavigate();
  const username = useSelector((state) => state.user.username);

  const handleLeaveChat = () => {
    // localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };

  return (
    <>
      <header className="chat__mainHeader">
        <p>Hangout with Polyglot Losers</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          HOME
        </button>
      </header>

      <div className="message__container">
        {/* instead of localstorage get user etc, we need to check with our registered users table : needs oauth setup*/}
        {messages.map((message) =>
          message.name === username ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}

        {/* <div className="message__status">
          <p>Someone is typing...</p>
        </div> */}
      </div>

            {/*  example*/}
      {/*This shows messages sent from you*/}
      {/* <div className="message__container">
        <div className="message__chats">
          <p className="sender__name">You</p>
          <div className="message__sender">
            <p>Hello there</p>
          </div>
        </div> */}

        {/*This shows messages received by you*/}
        {/* <div className="message__chats">
          <p>Other</p>
          <div className="message__recipient">
            <p>Hey, I'm good, you?</p>
          </div>
        </div> */}

        {/*This is triggered when a user is typing*/}
        {/* <div className="message__status">
          <p>Someone is typing...</p>
        </div>
      </div> */}
    </>
  );
};

export default ChatBody;