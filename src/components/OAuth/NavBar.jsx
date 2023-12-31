import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../redux/user";
import "../../style/navbar.css";

const LinkButton = ({ to, children, onClick }) => (
  <NavLink to={to} onClick={onClick}>
    {children}
  </NavLink>
);

const NavBar = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = (event) => {
    console.log("hit logout");
    event.preventDefault();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="navbar-container">
      <div className="navbar-left"> 
      <span>
        <h1 className="navbar-title">Polyglot Palace</h1>
        </span>
      </div>
      
      <div className="navbar-right">
        <nav className="navbar-nav">
          {isLoggedIn ? (
            <div className="navbar-links">
              <LinkButton to="/home">Home</LinkButton>
              <LinkButton to="/profile">Profile</LinkButton>
              <LinkButton to="/languages">Languages</LinkButton>
              <LinkButton to="/achievements">Achievements</LinkButton>
              <LinkButton to="/leaderboard">LeaderBoard</LinkButton>
              <LinkButton to="/chatbot">Chat</LinkButton>
              <LinkButton to="/addfriend">Friends</LinkButton>
              <LinkButton onClick={handleLogOut}>Logout</LinkButton>
            </div>
          ) : (
            <div className="navbar-links">
              <div className="navbar-auth">
                <LinkButton to="/signup">Sign Up</LinkButton>
              </div>
              <div className="navbar-auth">
                <LinkButton to="/login">Login</LinkButton>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
