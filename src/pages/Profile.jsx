import React from "react";
import { useState, useEffect } from "react";
import "../styling/ProfileCard.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllAvatarsThunk } from "../redux/avatars/avatars.actions";
import { updateUserThunk } from "../redux/usersCrud/users.actions";
import { me } from "../redux/user";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const allAvatars = useSelector((state) => state.avatars.allAvatars);
  const [showPopup, setShowPopup] = useState(false);

  function fetchAllAvatars() {
    console.log("RUNNING DISPATCH FROM FETCHALLAVATARS");
    return dispatch(fetchAllAvatarsThunk());
  }

  function fetchMe() {
    console.log("RUNNING DISPATCH FROM FETCHMe");
    return dispatch(me());
  }

  async function fetchUser() {
    await fetchMe();
  }

  useEffect(() => {
    fetchAllAvatars();
    fetchUser(); // Fetch user data once on initial mount
  }, []);

  async function handleClick() {
    setShowPopup(true);
    await fetchUser(); // Fetch user data when the popup is shown
  }

  async function handleClickAvatar(avatarId) {
    const updatedUser = {
      ...user,
      avatarId: avatarId,
    };
    dispatch(updateUserThunk(updatedUser));
    setShowPopup(false);
    await fetchUser(); // Fetch user data after the avatar is updated
  }

  console.log("allAvatars:", allAvatars);

  const selectedAvatar = allAvatars.find((avatar) => avatar.id === user.avatarId);

  const profileCardStyle = {
    backgroundImage: selectedAvatar ? `url(${selectedAvatar.imageURL})` : "",
  };

  console.log("point: ", user.points);
  return (
    <div>
      <div>
        <p>Welcome, {user.username}!</p>
        <p>Points: {user.points}</p>
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
    </div>
  );
}

export default Profile;