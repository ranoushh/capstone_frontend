import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizzes } from "../Redux/quizzes/quizzes.actions";
import QuizList from "../QuizList";
import Quiz from "../Quiz";

function Quizzes() {
  const dispatch = useDispatch();
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [completedQuiz, setCompletedQuiz] = useState(null);
  const quizzes = useSelector((state) => state.quizzes);

  useEffect(() => {
    console.log("FETCH ALL QUIZZES FIRING IN USE EFFECT");
    fetchAllQuizzes();
  }, []);

  function fetchAllQuizzes() {
    console.log("RUNNING DISPATCH FROM FETCHALLQUIZZES");
    return dispatch(fetchAllQuizzesThunk());
  }

  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz);
  };

  const handleQuizComplete = (result) => {
    setCompletedQuiz(result);
  };

  const renderAllQuizzes = () => {
  if (!selectedQuiz && !completedQuiz) {
    return <QuizList quizzes={quizzes} onQuizSelect={handleQuizSelect} />;
  } else if (selectedQuiz && !completedQuiz) {
    return <Quiz quiz={selectedQuiz} onComplete={handleQuizComplete} />;
  } else if (!selectedQuiz && completedQuiz) {
    return <QuizResult result={completedQuiz} />;
  } else {
    return null;
  }
  };

  return (
    <div>
      <h1>Quizzes Page</h1>
      {renderAllQuizzes()}

      {completedQuiz && (
        <div>
          <h2>Quiz Result</h2>
          <p>Score: {completedQuiz.score}</p>
          <p>Correct Answers: {completedQuiz.correctAnswers}</p>
          <p>Total Questions: {completedQuiz.totalQuestions}</p>
        </div>
      )}
    </div>
  );
}

export default Quizzes;