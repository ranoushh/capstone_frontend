import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { me } from "../../redux/user";
import { useEffect } from "react";
/**
 * COMPONENT
 */
const UserHome = () => {
  const username = useSelector((state) => state.user.username);
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
      <h3>Welcome, {username}</h3>
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