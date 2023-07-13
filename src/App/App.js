import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Chat from '../pages/Chat';
import Home from '../components/UserHome';
import { Login } from '../components/AuthForm';
import Profile from '../pages/Profile'
import Test from '../pages/Test'
import Quiz from '../pages/Quiz'
import Lessons from '../pages/Lessons'
import SingleLesson from '../pages/SingleLesson'
import Leaderboard from '../pages/Leaderboard'
// import Signup from '../components/AuthForm'
import { Signup } from '../components/AuthForm';
import {ProtectedRoute} from "../Utils/Auth";

console.log("here");
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route element = {<ProtectedRoute/>}>
            <Route path="/" element={<Home />} />
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
