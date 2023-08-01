import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Profile from "../pages/Profile";
import SingleLesson from "../pages/Single/SingleLesson";
import Leaderboard from "../pages/Leaderboard";
import Languages from "../pages/Languages";
import SingleLanguage from "../pages/Single/SingleLanguage";
import SingleQuiz from "../pages/Single/SingleQuiz";
import SingleTest from "../pages/Single/SingleTest";
//import ProtectedRoute from "../Utils/Auth";
import ProtectedRoutes from "../components/Auth/ProtectedRoutes";
import { HomePage, Navigation } from "../components";
import AchievementsPage from "../pages/AchievementsPage";
import AddFriend from "../pages/Add/AddFriend";
import io from "socket.io-client";
import AddQuizPage from "../pages/Add/AddQuizPage";
import AddTestPage from "../pages/Add/AddTestPage";
import AddLessonPage from "../pages/Add/AddLessonPage";
import EditTestPage from "../pages/Edit/EditTestPage";
import EditQuizPage from "../pages/Edit/EditQuizPage";
import EditLessonPage from "../pages/Edit/EditLessonPage";
import AddTestQuestionPage from "../pages/Add/AddTestQuestionPage";
import AddQuizQuestionPage from "../pages/Add/AddQuizQuestionPage";
import { me } from "../redux/user";
import { Login, NavBar, SignUp, UserHome } from "../components";
import EditTestQuestionPage from "../pages/Edit/EditTestQuestionPage";
import EditQuizQuestionPage from "../pages/Edit/EditQuizQuestionPage";
import ChatBot from "../pages/ChatBot";
import LandingPage from "../pages/LandingPage";

// const socket = io.connect(`${process.env.REACT_APP_BACKEND_URL}`);

function App() {
  const isLoggedIn = useSelector((state) => !!state.user.id);
  const user = useSelector((state) => state.user);
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
    <div>
      <NavBar isLoggedIn={isLoggedIn} />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<UserHome />} />

        {/* <Route element={<ProtectedRoutes isLoggedIn={isLoggedIn} />}> */}
        <Route path="/home" element={<UserHome />} />
        <Route path="/chatbot" element={<ChatBot />} />
        {/* <Route path="/chat" element={<Chat socket={socket} />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/lesson/:lessonId" element={<SingleLesson />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/language/:languageId" element={<SingleLanguage />} />
        <Route path="/quiz/:quizId" element={<SingleQuiz />} />
        <Route path="/test/:testId" element={<SingleTest />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/achievements" element={<AchievementsPage />} />
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
        <Route
          path="/test/:testId/testQuestion/edit/:id"
          element={<EditTestQuestionPage />}
        />
        <Route
          path="/quiz/:quizId/quizQuestion/edit/:id"
          element={<EditQuizQuestionPage />}
        />
        <Route path="/addfriend" element={<AddFriend />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
