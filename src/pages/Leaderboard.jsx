import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsersThunk ,fetchFriendsThunk } from "../redux/usersCrud/users.actions";
import { fetchAllAvatarsThunk } from "../redux/avatars/avatars.actions";
import { me } from "../redux/user";
import "../styling/LeaderboardStyle.css";

function Leaderboard() {
  const allUsers = useSelector((state) => state.usersCrud.allUsers);
  const allAvatars = useSelector((state) => state.avatars.allAvatars);
  const friends = useSelector((state) => state.usersCrud.friends);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  async function fetchAllData(){
    try {
      await dispatch(me());
      await dispatch(fetchFriendsThunk(user.id));
      await dispatch(fetchAllAvatarsThunk());
      await dispatch(fetchAllUsersThunk());
    } catch (error) {
      console.log("error fetching data " + error)
    } 
  }

  useEffect(() => {
    fetchAllData();
  }, [dispatch, user.id]);

  
  return (
    <div className="leaderboard-container">
      <h1 className="title">Leaderboard</h1>
      {allUsers && allUsers.length > 0 ? (
        allUsers.slice(0, 10).map((user, index) => {
          // Find the corresponding avatar for the user
          let userAvatar = allAvatars.find((avatar) => parseInt(avatar.id) === user.avatarId);
          return (
            <div
              key={index}
              className={`user-card ${index < 3 ? "top-user-card" : "other-user-card"}`}
            >
              <div className="user-info">
                {index < 3 ? (
                  <span className="top-user-rank">{index + 1}</span>
                ) : (
                  <span className="user-rank">{index + 1}</span>
                )}
                <span className="user-name">{user.username}</span>
                <span className="user-score">{user.points} points</span>
              </div>
              {userAvatar && (
                <div>
                  <img
                    className="user-avatar"
                    src={userAvatar.imageURL}
                    alt={`${user.username}'s avatar`}
                  />
                </div>
              )}
            </div>
          );
        })
      ) : (
        <h2 className="info-message">There are no users here</h2>
      )}
    </div>
  );
}

export default Leaderboard;
