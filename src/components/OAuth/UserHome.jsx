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
  const dispatch = useDispatch();

  function fetchMe() {
    console.log("RUNNING DISPATCH FROM FETCHMe");
    return dispatch(me());
  };

  useEffect(() => {
    console.log("FETCH user FIRING IN USEEFFECT");
    fetchMe();
  }, []);


  return (
    <div className="main-container">
      <h1 id="home-greeting">Welcome, {username} !</h1>
      <h4 className="app-name">PolyglotPalace</h4>

      <p className="description">
        PolyglotPalace is an immersive and engaging platform designed to help
        users master various languages through interactive quizzes and engaging
        challenges. Whether you're a beginner or looking to refine your language
        skills, our app offers a personalized learning experience tailored to
        your proficiency level.
      </p>
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