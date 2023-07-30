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
    <div>
      <form onSubmit={handleSubmit} name="login">
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">Log In</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      
      {/* Move the "Log in with Google" link here */}
      <div className="googleLogin">
        <a href={`${process.env.REACT_APP_BACKEND_URL}/auth/google`}>
          Log in with Google
        </a>
      </div>
    </form>

    </div>
  );
}
