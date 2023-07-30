import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, me } from "../../redux/user";
import UserHome from "./UserHome";
import "../../styling/SignupStyling.css";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await dispatch(login(email, password, name));
    navigate("/home");
  };

  return (
    <div className="background">
      <form onSubmit={handleSubmit} name="login">
        <div>
        <h1 style={{textAlign: 'center'}}>Login!</h1>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input className="input" name="email" type="text" placeholder="Enter email..." />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input className="input" name="password" type="password" placeholder="Enter password" />
        </div>
        <div>
          <button className="signup-button" type="submit">Log In</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      
        <br></br>
      {/* Move the "Log in with Google" link here */}
      <div className="signup-options" style={{display: 'contents'}}>
      <div className="googleSignup">
        <a href={`${process.env.REACT_APP_BACKEND_URL}/auth/google`}>
          Log in with Google
        </a>
      </div>
      </div>
    </form>

    </div>
  );
}
