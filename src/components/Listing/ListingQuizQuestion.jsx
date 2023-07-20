import React, { useState } from "react";
import "../../style/flashcard.css";

export default function ListingQuizQuestion(props) {
  console.log("LIST QUIZQUESTION COMPONENT");
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const { list, quizId } = props;
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
