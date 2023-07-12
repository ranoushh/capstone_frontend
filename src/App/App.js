import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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

console.log("here");
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
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
