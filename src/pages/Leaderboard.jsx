import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch
import Navigation from "../components/Navigation";
import { fetchAllUsersThunk } from "../redux/users/users.actions";

function Leaderboard() {
  const allUsers = useSelector((state) => state.users.allUsers);
  const dispatch = useDispatch(); // Add useDispatch here
  console.log((useSelector(state => state)));

  function fetchAllUsers() {
    console.log("RUNNING DISPATCH FROM FETCHALLAchievements");
    return dispatch(fetchAllUsersThunk());
  }

  useEffect(() => {
    console.log("FETCH ALL USERS FIRING IN USEEFFECT");
    fetchAllUsers();
  }, []);

  return (
    <div>
      <h1 className="title">Leaderboard </h1>
      <ul>
        {allUsers && allUsers.length > 0 ?
          (allUsers.map((item, index) => (
            <li key={index}>{item.email}</li>
          ))) : (<h2 className="info-message">There are no users here</h2>)
        };
      </ul>
    </div>
  );
}

export default Leaderboard;
