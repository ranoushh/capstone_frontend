import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFriendThunk, fetchAllUsersThunk, fetchFriendsThunk } from "../../redux/usersCrud/users.actions";
import { me } from "../../redux/user";

function AddFriend() {
  const user = useSelector((state) => state.user);
  // const friends = useSelector((state) => state.usersCrud.friends);
  const allUsers = useSelector((state) => state.usersCrud.allUsers);
  const [searchInput, setSearchInput] = useState("");
  const [findingUsers, setFindingUsers] = useState([]);
  const dispatch = useDispatch();

  async function fetchAllData() {
    try {
      await dispatch(me());
      await dispatch(fetchAllUsersThunk());
      // await dispatch(addFriendThunk(user.id,findingUsers.id));
    } catch (error) {
      console.log("error fetching data " + error);
    }
  }

  useEffect(() => {
    fetchAllData();
  }, [dispatch, user.id]);

  function handleSearch() {
    setFindingUsers(
      allUsers.filter(
        (user) => user.username === searchInput
      )
    );
    console.log("users found: " + findingUsers)
  }

  async function add(friendID){
      try {
        await dispatch(addFriendThunk(user.id, friendID));
      } catch (error) {
        console.log("unsuccessful adding friend")
      }
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
        findingUsers.map((item) => <li key={item.id}>{item.username}
        <button onClick={() => add(item.id)} >Add Friend</button>
        </li>)
      ) : (
        <p>No User Found</p>
      )}
    </div>
  );
}

export default AddFriend;
