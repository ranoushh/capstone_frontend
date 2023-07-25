import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function AddFriend() {
  const user = useSelector((state) => state.user);
  const friends = useSelector((state) => state.usersCrud.friends);
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");

  function handleSearch(){
      //if user exists, list that user and have add button etc 
      //if user doesn't, say user not found
    
  };
  

  return (
    <div>
      <input
        type="text"
        placeholder="Search friend's user"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {/* Display the list of users */}
      {userList.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {userList.map((user) => (
              <li key={user.id}>
                {user.username} {/* You can display any relevant user information */}
                {/* Add a button to send friend request */}
                <button onClick={() => sendFriendRequest(user.id)}>Add Friend</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display "User not found" message if no results */}
      {userList.length === 0 && searchInput !== "" && <div>User not found.</div>}
    </div>
  );
}

export default AddFriend;
