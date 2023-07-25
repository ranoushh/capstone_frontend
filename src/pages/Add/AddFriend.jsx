import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsersThunk, fetchFriendsThunk } from "../../redux/usersCrud/users.actions";
import { me } from "../../redux/user";

function AddFriend() {
  const user = useSelector((state) => state.user);
  const friends = useSelector((state) => state.usersCrud.friends);
  const allUsers = useSelector((state) => state.usersCrud.allUsers);
  const [searchInput, setSearchInput] = useState("");
  const [findingUsers, setFindingUsers] = useState([]);
  const dispatch = useDispatch();

  async function fetchAllData() {
    try {
      await dispatch(me());
      await dispatch(fetchAllUsersThunk());
      // await dispatch(fetchFriendsThunk(user.id));
    } catch (error) {
      console.log("error fetching data " + error);
    }
  }

  useEffect(() => {
    fetchAllData();
  }, [dispatch, user.id]);

  function handleSearch() {
    //if user exists, list that user and have add button etc
    //if user doesn't, say user not found

    setFindingUsers(
      allUsers.filter(
        (user) => user.username === searchInput
      )
    );

    console.log("users found: " + findingUsers)
  }

  
  return (
    <div>
      <input
        type="text"
        placeholder="Search friend's user"
        onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
      ></input>
      <button onClick={handleSearch}>Search</button>

      {findingUsers.length > 0 ? (
        findingUsers.map((item) => <li key={item.id}>{item.username}</li>)
      ) : (
        <p>No User Found</p>
      )}
    </div>
  );
}

export default AddFriend;
