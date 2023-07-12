import React from "react";
import { Link } from "react-router-dom";

function Chat() {
    console.log("chat")
  return (
    <div>
       This is Chat.
        <li>
            <Link to="/">HOME</Link>
        </li>
    </div>
  );
}

export default Chat;
