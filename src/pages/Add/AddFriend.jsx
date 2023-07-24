import React, { useState } from 'react';

function AddFriend() {
  const [searchInput, setSearchInput] = useState("");
  const [userList, setUserList] = useState([]);

  function handleSearch() {
    // Make an API request to fetch users based on searchInput
    fetch(`/users?search=${searchInput}`)
      .then((response) => response.json())
      .then((data) => {
        // Update the userList state with the fetched users
        setUserList(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }

  function sendFriendRequest(userId) {
    // Make an API request to send a friend request to the user with the given userId
    fetch("/addfriend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Friend request sent:", data);
        // Optionally, you can update the user interface to indicate that the friend request was sent successfully.
      })
      .catch((error) => {
        console.error("Error sending friend request:", error);
      });
  }

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
