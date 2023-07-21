import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../styling/ProfileCard.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllAvatarsThunk } from "../redux/avatars/avatars.actions";
// import { updateUserThunk , fetchAllUsersThunk} from "../redux/users/users.actions";
import { updateUser, updateUserThunk } from "../redux/usersCrud/users.actions";
import { me } from "../redux/user";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [showPopup, setShowPopup] = useState(false);
  const allAvatars = useSelector((state) => state.avatars.allAvatars);

  function fetchAllAvatars() {
    console.log("RUNNING DISPATCH FROM FETCHALLAVATARS");
    return dispatch(fetchAllAvatarsThunk());
  }

  function fetchMe() {
    console.log("RUNNING DISPATCH FROM FETCHMe");
    return dispatch(me());
  }

  useEffect(() => {
    fetchAllAvatars();
    fetchMe();
  }, []);

  function handleClick() {
    setShowPopup(true);
  }

  function handleClickAvatar(event) {
    console.log("event target" + event.target.id);
    //find the id of selected avatar from array
    const avatarID = parseInt(event.target.id, 10) + 1;

    const updatedUser = {
      ...user,
      avatarId: avatarID,
    };
    console.log("IMAGE URL" + user.avatarId?.imageURL);
    dispatch(updateUserThunk(updatedUser));
    console.log("updated user " + updatedUser.avatarId.imageURL);
    setShowPopup(false);
  }

  
  return (
    <div>
      This is Profile.
      <p></p>
      <p></p>
      <button style={{ borderRadius: "10px" }} onClick={handleClick}>
        <div className="card">
          <div className="blob"></div>
        </div>
      </button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setShowPopup(false)}>
              &times;
            </span>
            {allAvatars.map((item, id) => (
              <div className="img-container" key={id}>
                <div>
                  <img
                    id={id}
                    className="avatarPics"
                    onClick={handleClickAvatar}
                    src={item.imageURL}
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
