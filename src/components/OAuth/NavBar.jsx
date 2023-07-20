import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../redux/user";

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
  console.log("isLoggedIn", isLoggedIn);
  return (
    <div>
      <h1>Language Learning</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            <LinkButton to="/home">Home</LinkButton>
            <br />
            <LinkButton onClick={handleLogOut}>Logout</LinkButton>
          </div>
        ) : (
          <div>
            <h4>Not a User? </h4> <LinkButton to="/signup">Sign Up</LinkButton>
            <h4>Already a User? </h4> <LinkButton to="/login">Login</LinkButton>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default NavBar;
