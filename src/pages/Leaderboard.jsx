import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsersThunk } from "../redux/usersCrud/users.actions";
import "../styling/LeaderboardStyle.css";

function Leaderboard() {
  const allUsers = useSelector((state) => state.usersCrud.allUsers);
  const dispatch = useDispatch();

  function fetchAllUsers() {
    console.log("RUNNING DISPATCH FROM FETCHALLAchievements");
    return dispatch(fetchAllUsersThunk());
  }

  useEffect(() => {
    console.log("FETCH ALL USERS FIRING IN USEEFFECT");
    fetchAllUsers();
  }, []);

  return (
    <div className="leaderboard-container">
      <h1 className="title">Leaderboard</h1>
      {allUsers && allUsers.length > 0 ? (
        allUsers.slice(0, 10).map((user, index) => (
          <div
            key={index}
            className={`user-card ${
              index < 3 ? "top-user-card" : "other-user-card"
            }`}
          >
            <div className="user-info">
              {index < 3 ? (
                <span className="top-user-rank">{index + 1}</span>
              ) : (
                <span className="user-rank">{index + 1}</span>
              )}
              <span className="user-name">{user.name}</span>
              <span className="user-score">{user.score} points</span>
            </div>
            <img
              className="user-avatar"
              src={user.avatar}
              alt={`${user.name}'s avatar`}
            />
          </div>
        ))
      ) : (
        <h2 className="info-message">There are no users here</h2>
      )}
    </div>
  );
}

export default Leaderboard;
