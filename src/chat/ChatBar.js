import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFriendsThunk } from "../redux/usersCrud/users.actions";
import { me } from "../redux/user";
import ChatWindow from './ChatWindow';
import axios from "axios";

function ChatBar() {
  const user = useSelector((state) => state.user);
  const friends = useSelector((state) => state.usersCrud.friends);
  const dispatch = useDispatch();

  const [selectedFriendId, setSelectedFriendId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [conversation, setConversation] = useState({});

  // Function to handle friend selection //please work displayed
//   const handleFriendClick = async (friendId) => {
//   setSelectedFriendId(friendId);
//   setMessages([]); // Reset messages when a new friend is selected

//   try {
//     const res = await axios.get(`http://localhost:8080/api/conversations/find/${user.id}/${friendId}`);
//     const conversationId = res.data._id;
//     setConversation({ _id: conversationId });

//     // Fetch messages for the selected conversation
//     const messagesRes = await axios.get(`http://localhost:8080/api/mongoMessages/${conversationId}`);
//     setMessages(messagesRes.data);
//   } catch (err) {
//     console.log(err);
//   }
// };

const handleFriendClick = async (friendId) => {
  setSelectedFriendId(friendId);
  setMessages([]); // Reset messages when a new friend is selected

  try {
    const res = await axios.get(`http://localhost:8080/api/conversations/find/${user.id}/${friendId}`);
    const conversationId = res.data?._id; // Use optional chaining to access _id
    if (conversationId) {
      setConversation({ _id: conversationId });

      // Fetch messages for the selected conversation
      const messagesRes = await axios.get(`http://localhost:8080/api/mongoMessages/${conversationId}`);
      setMessages(messagesRes.data);
    }
  } catch (err) {
    console.log(err);
  }
};


  async function fetchAllData() {
    try {
      await dispatch(me());
      await dispatch(fetchFriendsThunk(user.id));
    } catch (error) {
      console.log("error fetching data " + error);
    }
  }

  useEffect(() => {
    fetchAllData();
  }, [dispatch, user.id]);

  return (
    <div className="chat__sidebar">
      <h2>APP NAME</h2>

      <div>
        <h4 className="chat__header">Friends</h4>
        <div className="chat__users">
          {friends && friends.length > 0 ? (
           friends.map((friend) => (
  <button key={friend.id} onClick={() => handleFriendClick(friend.userId1)}>
    {friend.userId2}
  </button>
))

          ) : (
            <p>Loading friends...</p>
          )}
        </div>
      </div>

      {selectedFriendId && (
        <ChatWindow friendId={selectedFriendId} messages={messages} setMessages={setMessages} />
      )}
    </div>
  );
}

export default ChatBar;