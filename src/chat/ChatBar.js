import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFriendsThunk } from "../redux/usersCrud/users.actions";
import { me } from "../redux/user";

// Separate component for the chat window
function ChatWindow({ friendId }) {
  // Implement your chat functionality here using the friendId
  return (
    <div>
      <h2>Chat with Friend {friendId}</h2>
      {/* Implement your chat UI here */}
    </div>
  );
}

// Sidebar showing active users
function ChatBar() {
  const user = useSelector((state) => state.user);
  const friends = useSelector((state) => state.usersCrud.friends);
  const dispatch = useDispatch();

  // State to keep track of the selected friend's ID
  const [selectedFriendId, setSelectedFriendId] = useState(null);

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

  // Handle friend selection
  function handleFriendClick(friendId) {
    setSelectedFriendId(friendId);
  }

  console.log("user " + user.id);
  console.log("friends " + JSON.stringify(friends));

  return (
    <div className="chat__sidebar">
      <h2>APP NAME</h2>

      <div>
        <h4 className="chat__header">Friends</h4>
        <div className="chat__users">
          {/* Map through friends and display their names */}
          {friends && friends.length > 0 ? (
            friends.map((friend) => (
              <button key={friend.userId2} onClick={() => handleFriendClick(friend.userId2)}>
                {friend.username} {/* Assuming the friend's username is available */}
              </button>
            ))
          ) : (
            <p>Loading friends...</p>
          )}
        </div>
      </div>

      {/* Render the ChatWindow component when a friend is selected */}
      {selectedFriendId && <ChatWindow friendId={selectedFriendId} />}
    </div>
  );
}

export default ChatBar;
