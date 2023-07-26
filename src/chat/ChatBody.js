import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux"

//containing the sent messages and the header
function ChatBody ({messages}){
  const navigate = useNavigate();
  const email = useSelector((state) => state.user.email);
  const isLoggedIn = useSelector((state) => !!state.user.id);

  const handleLeaveChat = () => {
    // localStorage.removeItem('email');
    navigate('/');
    window.location.reload();
  };

  {console.log('messages', messages)}

  return (
    <>
      <header className="chat__mainHeader">
        <p>Chat with Friends!</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          HOME
        </button>
      </header>

      <div className="message__container">


        {messages.map((message) =>
         (
          // message.name === email ? (
          <div className="message__chats" key={1 || message.id}>
              <p className="sender__name">You</p>
              <div className="message__sender">
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