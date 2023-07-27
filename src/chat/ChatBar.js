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


  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/conversations/${user.id}`);
        const lastConversation = res.data[res.data.length-1]; 

        setConversation(lastConversation);
        console.log('conversation', conversation);
      } catch (err) {
        console.log(err);
      }
    };
    getConversation();
  }, [user]);



  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/mongoMessages/${conversation._id}`);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [conversation]);


console.log("user"+ user.id);

  // Function to handle friend selection
  const handleFriendClick = (friendId) => {
    setSelectedFriendId(friendId);
    setMessages([]); // Reset messages when a new friend is selected
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
            <button key={friend.id} onClick={() => handleFriendClick(friend.userId2)}>
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
