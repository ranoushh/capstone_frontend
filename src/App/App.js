import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Chat from '../pages/Chat';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile'
import Test from '../pages/Test'
import Quiz from '../pages/Quiz'
import Lessons from '../pages/Lessons'
import SingleLesson from '../pages/SingleLesson'
import Leaderboard from '../pages/Leaderboard'
import { Signup } from '../components/AuthForm';
import {ProtectedRoute} from "../Utils/Auth";
import { Navigation } from '../components';
import { Login } from '../components/AuthForm';
import UserHome from '../components/UserHome';

console.log("here");
function App() {
  return (
    <Router>
      <Navigation/>
      <div>
        <Routes>
          <Route element = {<ProtectedRoute/>}>
            <Route path="/" element={<UserHome />} />
          </Route>
          <Route path="/login" element={<Login name = "login" displayName = "Login" />} />
          <Route path="/signup" element={< Signup name = "signup" displayName = "Signup" />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tests" element={<Test />} />
          <Route path="/quizzes" element={<Quiz />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lesson/:lessonId" element={<SingleLesson />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
