import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../../redux/user";
import "../../styling/SignupStyling.css";

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const username = event.target.username.value;
    dispatch(signup(email, password, username, name));

    navigate("/home");
  };

  return (
    <div className="background">
      <form onSubmit={handleSubmit} name="signup">
        <div>
          <h1 style={{textAlign: 'center'}}>Sign Up Today!</h1>
          <label htmlFor="email" placeHolder="signup...">
            <small>Email</small>
          </label>
          <input className="input" name="email" type="text" placeholder="Enter email..."/>
        </div>
        <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input className="input" name="username" type="text" placeholder="Choose a username..."/>
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input className="input" name="password" type="password"placeholder="Enter a password..." />
        </div>
        
        <div className="signup-options" style={{display: 'contents'}}>
        <div classname="button">
          <button type="submit">Sign Up</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
        <br></br>
  

      <div className="googleSignup">
        <a href={`${process.env.REACT_APP_BACKEND_URL}/auth/google`}>
          Sign up with Google
        </a>
      </div>
      </div>
      </form>
    </div>
  );
}
