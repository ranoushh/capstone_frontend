import React from "react";
import Navigation from "../components/Navigation";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

function UserHome() {
  const email = useSelector((state) => state.user.email);

  return (
    <div>
      <h1>Welcome, {email} </h1> 
        <Navigation/>
    </div>
  );
}

UserHome.propTypes = {
    email: PropTypes.string
};

export default UserHome;

