import React from "react";
import { useState, useEffect } from "react";
import "../styling/ProfileCard.css";
import "../styling/ProfilePage.css";
import "../styling/ProfilePage.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllAvatarsThunk } from "../redux/avatars/avatars.actions";
import {
  updateUserThunk,
  fetchFriendsThunk,
  fetchFriendRequestsThunk,
  acceptRequestThunk,
  declineRequestThunk,
  deleteFriendThunk,
  fetchUnlockAchievementsThunk,
} from "../redux/usersCrud/users.actions";
import { me } from "../redux/user";

//item.userId2=== user.id ? item.userId1 : item.userId2

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const allAvatars = useSelector((state) => state.avatars.allAvatars);
  const friends = useSelector((state) => state.usersCrud.friends);
  const friendRequests = useSelector((state) => state.usersCrud.friendRequests);
  const [showPopup, setShowPopup] = useState(false);
  const unlockedAchievements = useSelector(
    (state) => state.usersCrud.achievements
  );

  async function fetchAllData() {
    try {
      await dispatch(me());
      await dispatch(fetchAllAvatarsThunk());
      await dispatch(fetchFriendsThunk(user.id));
      await dispatch(fetchUnlockAchievementsThunk(user.id));
      await dispatch(fetchFriendRequestsThunk(user.id));
    } catch (error) {
      console.log("error fetching data " + error);
    }
  }

  useEffect(() => {
    fetchAllData();
  }, [dispatch, user.id]);

  async function handleClick() {
    setShowPopup(true);
  }

  async function handleAccept(myID, friendID) {
    console.log("at accepted");
    const updatedFriendship = {
      userId1: friendID,
      userId2: myID,
      accepted: true,
    };
    console.log("after object");
    await dispatch(acceptRequestThunk(updatedFriendship));
    await fetchAllData();
    // await fetchAllData();
  }

  async function handleReject(myID, friendID) {
    const updatedFriendship = {
      userId1: friendID,
      userId2: myID,
      accepted: false,
    };
    await dispatch(declineRequestThunk(updatedFriendship));
    await fetchAllData();
  }

  async function deleteFriend(myID, friendID) {
    await dispatch(deleteFriendThunk(myID, friendID));
    await fetchAllData();
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

  const selectedAvatar = allAvatars.find(
    (avatar) => avatar.id === user.avatarId
  );

  const profileCardStyle = {
    backgroundImage: selectedAvatar ? `url(${selectedAvatar.imageURL})` : "",
    backgroundPosition: "center", // Center the background image
    backgroundPosition: "center", // Center the background image
  };

  console.log("unlockedAchievements: ", unlockedAchievements);
  return (
    <div id="entire-container">
      <div id="content-container">
        <p></p>
        <p></p>
        <center>
          {showPopup ? // If popup is open, don't render the avatar profile // Check if popup is open
          null : (
            <button className="profiles-button" onClick={handleClick}>
              <div className="card" style={profileCardStyle}>
                {/* Avatar changes upon refresh or re-clicking icon*/}
                {/* No need for the bg and blob divs since the background image is applied to the card */}
              </div>
            </button>
          )}
        </center>
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

        {/* <div> */}
        <div>
          <h1 id="profile-greeting">{user.username}</h1>
        </div>
        <br></br>
        <br></br>
        <br></br>
      

      
          <h2 id="user-points">Points: </h2>
          {user.points ? user.points : "0"}

          <h2 id="user-achievements">Unlocked Achievements:</h2>
          <ul>
            {unlockedAchievements && unlockedAchievements.length > 0 ? (
              unlockedAchievements.map((achievement) => (
                <li key={achievement.id}>
                  {achievement.achievementName}
                  <p>{achievement.criteria}</p>
                  <p>Points Requirement: {achievement.pointsRequirement}</p>
                  <img className="achievement-image"
                    src={achievement.imageURL}
                    alt={`Achievement ${achievement.id}`}
                  />
                </li>
              ))
            ) : (
              <li>No unlocked achievements yet.</li>
            )}
          </ul>
        

          <h2>Friends: </h2>
          {Object.keys(friends).length > 0 ? (
            <ul>
              {Object.entries(friends).map((friend) => {
                let friendData = friend[1];
                return (
                  <li key={friendData.username}>
                    {friendData.Friendship &&
                    friendData.Friendship.accepted === true ? (
                      <React.Fragment>
                        {friendData.username}
                        <button className="reject-button"
                          onClick={() => deleteFriend(user.id, friendData.id)}
                        >
                          Delete Friend
                        </button>
                      </React.Fragment>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          ) : (
            "No Friends"
          )}
          {/* </center> */}
          <h2>Friend Requests: </h2>
          {Object.keys(friendRequests).length > 0 ? (
            <ul>
              {Object.entries(friendRequests).map((request) => {
                let friendData = request[1];
                return (
                  <li key={friendData.username}>
                    {friendData.Friendship &&
                    friendData.Friendship.accepted === false ? (
                      <React.Fragment>
                        {friendData.username}
                        <button className="accept-button"
                          onClick={() => handleAccept(user.id, friendData.id)}
                        >
                          Accept Friend
                        </button>
                        <button className="reject-button"
                          onClick={() => handleReject(user.id, friendData.id)}
                        >
                          Delete Friend
                        </button>
                      </React.Fragment>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          ) : (
            "No Requests"
          )}
        
        </div>
    </div>

    // </div>
    // </div>
  );
}

export default Profile;
