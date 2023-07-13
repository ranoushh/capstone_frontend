import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";


function Navigation () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => !!state.user.id);

  function handleLogOut(event){
    event.preventDefault();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      <h1>Language Learning App</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            <Link to ="/home">Home</Link>
            <Link onClick={handleLogOut}> Logout</Link>
          </div>
        ) : (
          <div>
            <Link to ="/login">Login</Link>
            <Link to ="/signup">Signup</Link>
          </div>
        )};

      </nav>
      {/* <nav>
        <ul>
          <li className="img-container">
            Language Learning
          </li>
        </ul>
        <ul className="btns-nav">
          <li>
            <Link to="/chat">chat</Link>
          </li>
          <li>
            <Link to="/leaderboard">leaderboard</Link>
          </li>
          <li>
            <Link to="/lessons">lessons</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/quizzes">quiz</Link>
          </li>
          <li>
            <Link to="/tests">test</Link>
          </li>
          <li>
            <Link to="/profile">profile</Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default Navigation;
