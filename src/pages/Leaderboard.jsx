import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch
import Navigation from "../components/Navigation";
import { fetchAllUsersThunk } from "../redux/users/users.actions";
import ListingUsers from "../components/ListingUsers";

function Leaderboard() {
  const allUsers = useSelector((state) => state.users.allUsers);
  const dispatch = useDispatch(); // Add useDispatch here

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
      <h1 className="title">Leaderboard</h1>
      <ListingUsers list={allUsers}/>
    </div>
  );
}

export default Leaderboard;
