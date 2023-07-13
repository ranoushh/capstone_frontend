import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizzes } from "../Redux/quizzes/quizzes.actions";
import QuizList from "../QuizList";
import Quiz from "../Quiz";
import QuizResult from "../QuizResult";

function QuizPage() {
  const dispatch = useDispatch();
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [completedQuiz, setCompletedQuiz] = useState(null);
  const quizzes = useSelector((state) => state.quizzes);

  useEffect(() => {
    dispatch(fetchQuizzes());
  }, [dispatch]);

  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz);
  };

  const handleQuizComplete = (result) => {
    setCompletedQuiz(result);
  };

  if (!selectedQuiz && !completedQuiz) {
    return <QuizList quizzes={quizzes} onQuizSelect={handleQuizSelect} />;
  } else if (selectedQuiz && !completedQuiz) {
    return <Quiz quiz={selectedQuiz} onComplete={handleQuizComplete} />;
  } else if (!selectedQuiz && completedQuiz) {
    return <QuizResult result={completedQuiz} />;
  } else {
    return null;
  }
}

export default QuizPage;
