import React, { useState } from "react";
import "../../style/flashcard.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuizQuestionThunk } from "../../redux/quizQuestion/quizQuestion.actions";
import { updateUserPointsThunk } from "../../redux/usersCrud/users.actions";
import { markQuizCompletedThunk } from "../../redux/quizzes/quizzes.actions";

export default function ListingQuizQuestion(props) {
  const dispatch = useDispatch();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const { list, quizId } = props;
  const currentUser = useSelector((state) => state.user);

  const filteredQuizQuestion = list.filter(
    (QuizQuestion) => QuizQuestion.quizId === quizId
  );
  const currentCard = filteredQuizQuestion[currentCardIndex];
  const [userAnswers, setUserAnswers] = useState(
    new Array(filteredQuizQuestion.length).fill("")
  );
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleAnswerSubmit = () => {
    const isCorrect =
      userAnswer.toLowerCase() === currentCard.correctChoice.toLowerCase();
    if (isCorrect && isAnswerCorrect === null) {
      setIsAnswerCorrect(true);
      setUserScore((prevScore) => prevScore + currentCard.pointWorth);
      if(currentCardIndex === filteredQuizQuestion.length - 1){
        dispatch(markQuizCompletedThunk(quizId))
        dispatch(updateUserPointsThunk(currentUser.id, userScore));
      }
    } else {
      setIsAnswerCorrect(false);
    }

    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentCardIndex] = userAnswer;
    setUserAnswers(newUserAnswers);
    setIsAnswerSubmitted(true);

    setTimeout(() => {
      setCurrentCardIndex((prevIndex) => prevIndex + 1);
      setIsAnswerCorrect(null);
      setUserAnswer("");
      setIsAnswerSubmitted(false);
    }, 1500);
  };

  const handleDelete = (quizQuestionId) => {
    dispatch(deleteQuizQuestionThunk(quizQuestionId))
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting quizQuestion:", error);
      });
  };

  return (
    <div>
      <p className="quiz-length">
        Number of Questions: {filteredQuizQuestion.length}
      </p>
      <div className="flashcard-container">
        <p className="score-message">Your score: {userScore} points</p>
        {filteredQuizQuestion.length > 0 && currentCard ? (
          <>
            <div className="flashcard">
              <div className="flashcard-front">
                <h1 className="items-name">
                  {currentCardIndex + 1}. {currentCard.question}
                </h1>
                <h2 className="items-name">{currentCard.quizChoice}</h2>
                <input
                  type="text"
                  placeholder="Enter your answer"
                  value={userAnswer}
                  onChange={handleInputChange}
                  readOnly={isAnswerSubmitted}
                />
                <button
                  onClick={handleAnswerSubmit}
                  disabled={isAnswerSubmitted}
                >
                  Submit
                </button>
                {isAnswerCorrect === false && (
                  <p className="alert-message">Incorrect answer!</p>
                )}
                {isAnswerCorrect === true && (
                  <p className="congrats-message">
                    Correct answer. Congratulations!
                  </p>
                )}
              </div>
            </div>
            <div className="button-container">
              <Link
                to={`/quiz/${quizId}/quizQuestion/edit/${currentCard.id}`}
                className="text"
              >
                <button className="edit1-btn">Edit</button>
              </Link>
              <button
                type="button"
                className="del1-btn"
                onClick={() => handleDelete(currentCard.id)}
              >
                Delete
              </button>
            </div>
          </>
        ) : (
          <h1 className="info-message">
            There are no Quiz Questions available
          </h1>
        )}
      </div>
    </div>
  );
}
