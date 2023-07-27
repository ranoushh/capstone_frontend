import React from "react";
import { useState, useEffect } from "react";
import "../styling/ProfileCard.css";
import "../styling/ProfilePage.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllAvatarsThunk } from "../redux/avatars/avatars.actions";
import { updateUserThunk , fetchFriendsThunk, fetchFriendRequestsThunk, 
  acceptRequestThunk , declineRequestThunk, deleteFriendThunk, fetchUnlockAchievementsThunk } from "../redux/usersCrud/users.actions";
import { me } from "../redux/user";


//friends u add automically go to friends[], even if request is false
//friends who added u go to friendrequests
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

  async function fetchAllData(){
    try {
      await dispatch(me());
      await dispatch(fetchAllAvatarsThunk());
      await dispatch(fetchFriendsThunk(user.id));
      await dispatch(fetchUnlockAchievementsThunk(user.id));
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
    await dispatch(acceptRequestThunk(updatedFriendship));
    await fetchAllData();
    // await fetchAllData();
  }

  async function handleReject(myID, friendID){
    const updatedFriendship = {
      userId1: friendID,
      userId2: myID,
      accepted: false
    }
    await dispatch(declineRequestThunk(updatedFriendship));
    await fetchAllData();
  }

  async function deleteFriend(myID, friendID){
    await dispatch(deleteFriendThunk(myID, friendID));
    await fetchAllData();
  };

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
  };

  console.log("point: ", user.points);
  console.log("unlockedAchievements: ", unlockedAchievements);
  return (
    <div>
      <div>
        <h1 id="profile-greeting">Welcome, {user.username}!</h1>
      </div>
      <p></p>
      <p></p>
      <center>
        {showPopup ? ( // Check if popup is open
          // If popup is open, don't render the avatar profile
          null
        ) : (
          <button style={{ borderRadius: "10px" }} onClick={handleClick}>
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

      <div>
        <br></br>
        <h2>Points: </h2>
        {user.points ? user.points : "0"}
        
        <h2>Friends: </h2>
        {friends && friends.length > 0 
            ? friends.map((item) => <li key={item}>{item.userId2 === user.id ? item.userId1 : item.userId2}
            <button onClick={() => deleteFriend(user.id, item.userId2)}>Delete Friend</button>
            </li>)
            : "No Friends"}

        
        <h2>Friend Requests:  </h2>
        {friendRequests && friendRequests.length > 0
            ? friendRequests.map((item) => <li key={item}>
              {item.userId1}
              <button onClick={() => handleAccept(user.id, item.userId1)}> Accept</button>
              <button onClick={() => handleReject(user.id, item.userId1)}> Reject </button>
              </li>)
            : "No Requests"}
      </div>

      <h2>Unlocked Achievements:</h2>
      <ul>
        {unlockedAchievements && unlockedAchievements.length > 0 ? (
          unlockedAchievements.map((achievement) => (
            <li key={achievement.id}>
              {achievement.achievementName}
              <p>{achievement.criteria}</p>
              <p>Points Requirement: {achievement.pointsRequirement}</p>
              <img
                src={achievement.imageURL}
                alt={`Achievement ${achievement.id}`}
              />
            </li>
          ))
        ) : (
          <li>No unlocked achievements yet.</li>
        )}
      </ul>
    </div>
  );
}

export default Profile;
