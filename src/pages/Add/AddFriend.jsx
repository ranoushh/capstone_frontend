import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addFriendThunk,
  fetchAllUsersThunk,
  fetchFriendsThunk,
} from "../../redux/usersCrud/users.actions";
import { fetchAllAvatarsThunk } from "../../redux/avatars/avatars.actions";
import { me } from "../../redux/user";
import "../../styling/AddFriend.css";

function AddFriend() {
  const user = useSelector((state) => state.user);
  const allUsers = useSelector((state) => state.usersCrud.allUsers);
  const allAvatars = useSelector((state) => state.avatars.allAvatars);
  const [searchInput, setSearchInput] = useState("");
  const [findingUsers, setFindingUsers] = useState([]);
  const [isFriendRequestSent, setIsFriendRequestSent] = useState(false);
  const dispatch = useDispatch();

  async function fetchAllData() {
    try {
      await dispatch(me());
      await dispatch(fetchAllUsersThunk());
      await dispatch(fetchAllAvatarsThunk());
    } catch (error) {
      console.log("error fetching data " + error);
    }
  }

  useEffect(() => {
    fetchAllData();
  }, [dispatch, user.id]);

  function handleSearch() {
    setFindingUsers(allUsers.filter((user) => user.username === searchInput));
    console.log("users found: " + findingUsers);
  }

  async function add(friendID) {
    try {
      await dispatch(addFriendThunk(user.id, friendID));
      setIsFriendRequestSent(true);
    } catch (error) {
      console.log("unsuccessful adding friend");
    }
  }

  function handleReset() {
    setFindingUsers([]);
    setSearchInput("");
    setIsFriendRequestSent(false);
  }

  return (
    <div className="f-container">
      {!isFriendRequestSent && (
        <div className="search-field">
          <input
            type="text"
            className="search-input"
            placeholder="Search friend's user"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
          ></input>
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      )}
      {isFriendRequestSent ? (
        <div>
          <p className="success-message">Friend request sent!</p>
          <button className="reset-button" onClick={handleReset}>
            Search Again
          </button>
        </div>
      ) : (
        <div className="add-friend">
          {findingUsers.length > 0 ? (
            findingUsers.map((item) => {
              const itemAvatar = allAvatars.find(
                (avatar) => parseInt(avatar.id) === item.avatarId
              );

              return (
                <div className="f-form" key={item.id}>
                  {itemAvatar && (
                    <div>
                      <img
                        className="user-avatar"
                        src={itemAvatar.imageURL}
                        alt={`${item.username}'s avatar`}
                      />
                    </div>
                  )}
                  <div className="f-form-content">
                  <p className="f-username">{item.username}</p>
                  <button className="f-button" onClick={() => add(item.id)}>
                    Add Friend
                  </button>
                </div>
                </div>
              );
            })
          ) : (
            <p className="no-users-found">No User Found</p>
          )}
        </div>
      )}
    </div>
  );

  // return (
  //   <div className="f-container">
  //     {!isFriendRequestSent && ( // Only show the search field if request not sent
  //       <div className="search-field">
  //         <input
  //           type="text"
  //           className="search-input"
  //           placeholder="Search friend's user"
  //           value={searchInput}
  //           onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
  //         ></input>
  //         <button className="search-button" onClick={handleSearch}>
  //           Search
  //         </button>
  //       </div>
  //     )}
  //     {isFriendRequestSent ? (
  //       <div>
  //         <p className="success-message">Friend request sent!</p>
  //         <button className="reset-button" onClick={handleReset}>
  //           Search Again
  //         </button>
  //       </div>
  //     ) : (
  //       <div className="add-friend">
  //         {findingUsers.length > 0 ? (
  //           findingUsers.map((item) => (
              
  //             <div className="f-form" key={item.id}>
  //               {itemAvatar && (
  //               <div>
  //                 <img
  //                   className="user-avatar"
  //                   src={itemAvatar.imageURL}
  //                   alt={`${item.username}'s avatar`}
  //                 />
  //               </div>
  //               )}
  //               <p className="f-username">{item.username}</p>
  //               <button className="f-button" onClick={() => add(item.id)}>
  //                 Add Friend
  //               </button>
  //             </div>
  //           ))
  //         ) : (
  //           <p className="no-users-found">No User Found</p>
  //         )}
  //       </div>
  //     )}
  //   </div>
  // );
}

export default AddFriend;
