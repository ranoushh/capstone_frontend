import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Chat from '../pages/Chat';
import Home from '../pages/Home';
// import Login from '../pages/Login';
import Profile from '../pages/Profile'
import Lessons from '../pages/Lessons'
import SingleLesson from '../pages/SingleLesson'
import Leaderboard from '../pages/Leaderboard'
import Languages from '../pages/Languages';
import SingleLanguage from '../pages/SingleLanguage';
import { Signup } from '../components/AuthForm';
import {ProtectedRoute} from "../Utils/Auth";
import { HomePage, Navigation } from '../components';
import { Login } from '../components/AuthForm';
import UserHome from '../components/UserHome';
import Achievements from '../pages/Achievements';


console.log("here");
function App() {
  return (
    <Router>
      {/* <Navigation/> */}
      <div>
        <Routes>
          {/* <Route element = {<ProtectedRoute/>}>
            <Route path="/" element={<UserHome />} />
          </Route> */}
          {/* <Route path="/login" element={<Login name = "login" displayName = "Login" />} />
          <Route path="/signup" element={< Signup name = "signup" displayName = "Signup" />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lesson/:lessonId" element={<SingleLesson />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/language/:languageId" element={<SingleLanguage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
