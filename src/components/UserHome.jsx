import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

/**
 * COMPONENT
 */
const UserHome = () => {
  const username = useSelector((state) => state.users.username);

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