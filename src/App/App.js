import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Chat from '../pages/Chat';
import Profile from '../pages/Profile';
import Test from '../pages/Test';
import Quiz from '../pages/Quiz';
import Lessons from '../pages/Lessons';
import SingleLesson from '../pages/SingleLesson';
import Leaderboard from '../pages/Leaderboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tests" element={<Test />} />
        <Route path="/quizs" element={<Quiz />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/lesson/:lessonId" element={<SingleLesson />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
