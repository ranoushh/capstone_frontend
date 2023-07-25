import React from "react";
import { useState, useEffect } from "react";
import "../styling/ProfileCard.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllAvatarsThunk } from "../redux/avatars/avatars.actions";
import { updateUserThunk , fetchFriendsThunk, fetchFriendRequestsThunk, updateFriendRequestThunk} from "../redux/usersCrud/users.actions";
import { me } from "../redux/user";


//friends u add automically go to friends[]
//friends who added u go to friendrequests
function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const allAvatars = useSelector((state) => state.avatars.allAvatars);
  const friends = useSelector((state) => state.usersCrud.friends);
  const friendRequests = useSelector((state) => state.usersCrud.friendRequests);
  const [showPopup, setShowPopup] = useState(false);

  async function fetchAllData(){
    try {
      await dispatch(me());
      await dispatch(fetchAllAvatarsThunk());
      await dispatch(fetchFriendsThunk(user.id));
      await dispatch(fetchFriendRequestsThunk(user.id));
    } catch (error) {
      console.log("error fetching data " + error)
    } 
  }

  useEffect(() => {
    fetchAllData();
  }, [dispatch, user.id]);

  async function handleClick() {
    setShowPopup(true);
  }

  async function handleAccept(myID, friendID){
    const updatedFriendship = {
      userId1: friendID,
      userId2: myID,
      accepted: true
    }
    await dispatch(updateFriendRequestThunk(updatedFriendship));
    await fetchAllData();
  }

  function handleReject(){

  }

  async function handleClickAvatar(avatarId) {
    const updatedUser = {
      ...user,
      avatarId: avatarId,
    };
    await dispatch(updateUserThunk(updatedUser));
    await fetchAllData();
    setShowPopup(false);
    // await fetchUser(); // Fetch user data after the avatar is updated
  }

  console.log("allAvatars:", allAvatars);

  const selectedAvatar = allAvatars.find(
    (avatar) => avatar.id === user.avatarId
  );

  const profileCardStyle = {
    backgroundImage: selectedAvatar ? `url(${selectedAvatar.imageURL})` : "",
  };

  console.log("point: ", user.points);
  return (
    <div>
      <div>
        <h1>Welcome, {user.username}!</h1>
      </div>
      <p></p>
      <p></p>
      <button style={{ borderRadius: "10px" }} onClick={handleClick}>
        <div className="card" style={profileCardStyle}>
          {" "}
          {/* Avatar changes upon refresh or re-clicking icon*/}
          {/* No need for the bg and blob divs since the background image is applied to the card */}
        </div>
      </button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setShowPopup(false)}>
              &times;
            </span>
            {allAvatars.map((item) => (
              <div className="img-container" key={item.id}>
                <div>
                  <img
                    className="avatarPics"
                    onClick={() => handleClickAvatar(item.id)} // Pass the item.id here
                    src={item.imageURL}
                    alt={`Avatar ${item.id}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <br></br>
        <h2>Points: {user.points ? user.points : "No Points"}</h2>
        
        <h2>Friends: {friends && friends.length > 0
            ? friends.map((item) => <li key={item}>{item.userId2}</li>)
            : "Loading friends..."}</h2>

        
        <h2>Friend Requests:  </h2>
        {friendRequests && friendRequests.length > 0
            ? friendRequests.map((item) => <li key={item}>
              {item.userId1}
              <button onClick={() => handleAccept(user.id, item.userId1)}> Accept</button>
              <button onClick={handleReject}> Reject </button>
              </li>)
            : "Loading friends..."}
      </div>
    </div>
  );
}

export default Profile;
