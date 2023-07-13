import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

function Chat() {
    console.log("chat")
  return (
    <div>
      {/* <Navigation/> */}
       This is Chat.
        <li>
            <Link to="/">HOME</Link>
        </li>
    </div>
  );
}

export default Chat;
