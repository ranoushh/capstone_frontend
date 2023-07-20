import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Chat from "../pages/Chat";
import Home from "../pages/Home";
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
import { Signup } from "../components/AuthForm";
import { ProtectedRoute } from "../Utils/Auth";
import { HomePage, Navigation } from "../components";
import { Login } from "../components/AuthForm";
import UserHome from "../components/UserHome";
import Achievements from "../pages/Achievements";
import AddFriend from "../pages/AddFriend";
import io from "socket.io-client";
import AddQuizPage from "../pages/AddQuizPage";
import AddTestPage from "../pages/AddTestPage";
import AddLessonPage from "../pages/AddLessonPage";
import EditTestPage from "../pages/EditTestPage";
import EditQuizPage from "../pages/EditQuizPage";
import EditLessonPage from "../pages/EditLessonPage";
import AddTestQuestionPage from "../pages/AddTestQuestionPage";
import AddQuizQuestionPage from "../pages/AddQuizQuestionPage";

//establish connection with backend
const socket = io.connect(`http://localhost:8080`);

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
          <Route
            path="/language/:languageId/quiz/add"
            element={<AddQuizPage />}
          />
          <Route
            path="/language/:languageId/test/add"
            element={<AddTestPage />}
          />
          <Route
            path="/language/:languageId/lesson/add"
            element={<AddLessonPage />}
          />
          <Route
            path="/language/:languageId/quiz/edit/:id"
            element={<EditQuizPage />}
          />
          <Route
            path="/language/:languageId/test/edit/:id"
            element={<EditTestPage />}
          />
          <Route
            path="/language/:languageId/lesson/edit/:id"
            element={<EditLessonPage />}
          />
          <Route
            path="/test/:testId/testQuestion/add"
            element={<AddTestQuestionPage />}
          />
          <Route
            path="/quiz/:quizId/quizQuestion/add"
            element={<AddQuizQuestionPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
