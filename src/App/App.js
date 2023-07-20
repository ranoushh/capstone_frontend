import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Chat from "../pages/Chat";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Lessons from "../pages/Lessons";
import SingleLesson from "../pages/Single/SingleLesson";
import Leaderboard from "../pages/Leaderboard";
import Languages from "../pages/Languages";
import SingleLanguage from "../pages/Single/SingleLanguage";
import Quizzes from "../pages/Quizzes";
import SingleQuiz from "../pages/Single/SingleQuiz";
import Tests from "../pages/Tests";
import SingleTest from "../pages/Single/SingleTest";
import ProtectedRoute from "../Utils/Auth";
import { HomePage, Navigation } from "../components";
import Achievements from "../pages/Achievements";
import AddFriend from "../pages/Add/AddFriend";
import io from "socket.io-client";
import AddQuizPage from "../pages/Add/AddQuizPage";
import AddTestPage from "../pages/Add/AddTestPage";
import AddLessonPage from "../pages/Add/AddLessonPage";
import EditTestPage from "../pages/EditTestPage";
import EditQuizPage from "../pages/EditQuizPage";
import EditLessonPage from "../pages/EditLessonPage";
import AddTestQuestionPage from "../pages/AddTestQuestionPage";
import AddQuizQuestionPage from "../pages/AddQuizQuestionPage";
import { me } from "../redux/user";
import { Login, NavBar, SignUp, UserHome } from "../components";

//establish connection with backend
const socket = io.connect(`http://localhost:8080`);

console.log("here");
function App() {
  const isLoggedIn = useSelector((state) => !!state.user.id);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMe = async () => {
      dispatch(await me());
      setLoading(false);
    };
    fetchMe();
  }, [dispatch, isLoggedIn]);

  if (loading) {
    return <div>Loading </div>;
  }
  // const isLoggedIn = true;
  console.log("isloggingin" + isLoggedIn);
  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} />

      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}> */}
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
          <Route path="/language/:languageId/quiz/add" element={<AddQuizPage />}/>
          <Route path="/language/:languageId/test/add" element={<AddTestPage />} />
          <Route path="/language/:languageId/lesson/add" element={<AddLessonPage />}/>
          <Route path="/language/:languageId/quiz/edit/:id" element={<EditQuizPage />}/>
          <Route path="/language/:languageId/test/edit/:id" element={<EditTestPage />}/>
          <Route path="/language/:languageId/lesson/edit/:id" element={<EditLessonPage />}/>
          <Route path="/test/:testId/testQuestion/add" element={<AddTestQuestionPage />} />
          <Route path="/quiz/:quizId/quizQuestion/add" element={<AddQuizQuestionPage />} />
          {/* </Route> */}
        </Routes>
      
    </Router>
  );
}

export default App;
