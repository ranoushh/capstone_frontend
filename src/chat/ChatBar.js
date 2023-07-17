import React from 'react';

// sidebar showing active users
function ChatBar (){
  return (
    <div className="chat__sidebar">
      <h2>APP NAME</h2>

      <div>
        <h4 className="chat__header">Friends</h4>
        <div className="chat__users">
          {/* here we need to list ALL USERS FRIENDS */}
          {/* <p>User 1</p>
          <p>User 2</p>
          <p>User 3</p>
          <p>User 4</p> */}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;