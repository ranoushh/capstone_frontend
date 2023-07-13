import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
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
            <LinkButton to ="/home">Home</LinkButton>
            <LinkButton onClick={handleLogOut}> Logout</LinkButton>
          </div>
        ) : (
          <div>
            <LinkButton to ="/login">Login</LinkButton>
            <LinkButton to ="/signup">Signup</LinkButton>
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
