import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Chat from "../pages/Chat";
// import Home from '../pages/Home';
// import Login from '../pages/Login';
import Profile from "../pages/Profile";
import Lessons from "../pages/Lessons";
import SingleLesson from "../pages/SingleLesson";
import Leaderboard from "../pages/Leaderboard";
import Languages from "../pages/Languages";
import SingleLanguage from "../pages/SingleLanguage";
import Quizzes from "../pages/Quizzes";
import SingleQuiz from "../pages/SingleQuiz";
import Tests from "../pages/Tests";
import SingleTest from "../pages/SingleTest";
// import { Signup } from '../components/AuthForm';
// import {ProtectedRoute} from "../Utils/Auth";
// import { HomePage, Navigation } from '../components';
// import { Login } from '../components/AuthForm';
// import UserHome from '../components/UserHome';
import Achievements from "../pages/Achievements";
import AddFriend from "../pages/AddFriend";
import io from "socket.io-client";
import ProtectedRoute from "../Utils/Auth";
import { me } from "../redux/user";
import { Login, NavBar, SignUp, UserHome } from "../components";
import LandingPage from "../pages/LandingPage";
//establish connection with backend
const socket = io.connect(`http://localhost:8080`);

console.log("here");
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMe = () => {
      dispatch(me());
    };
    fetchMe();
  }, [dispatch]);

  const isLoggedIn = useSelector((state) => !!state.users.id);
  // const isLoggedIn = true;
  console.log("isloggingin" + isLoggedIn);
  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} />

      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/home" element={<UserHome />} />
          <Route path="/chat" element={<Chat socket={socket} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lesson/:lessonId" element={<SingleLesson />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/language/:languageId" element={<SingleLanguage />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/quiz/:quizId" element={<SingleQuiz />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/test/:testId" element={<SingleTest />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/addfriend" element={<AddFriend />} />
        </Route>
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
