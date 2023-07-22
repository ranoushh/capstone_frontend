import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { me } from "../../redux/user";
import { useEffect } from "react";
import "../../styling/HomeStyling.css";

/**
 * COMPONENT
 */
const UserHome = () => {
  const username = useSelector((state) => state.user.username);
  const achievements = useSelector((state) => state.user.achievements);
  const dispatch = useDispatch();
 
  useEffect(() => {
    console.log("FETCH ALL Achievements FIRING IN USEEFFECT");
    fetchMe();
  }, []);

  function fetchMe() {
    console.log("RUNNING DISPATCH FROM FETCHMe");
    return dispatch(me());
  };

  return (
    <div>
      <h3 id= "home-greeting">Welcome, {username} !</h3>
      <h4 id = "achievements-list">Your Progress {achievements} </h4>
    </div>
  );
};

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  username: PropTypes.string,
};

export default UserHome;