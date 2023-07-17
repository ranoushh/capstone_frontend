import React, { useState } from "react";
import "../style/flashcard.css";

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

  setTimeout(() => {
    setCurrentCardIndex((prevIndex) => prevIndex + 1);
    setIsAnswerCorrect(null);
    setUserAnswer("");
  }, 1500);
};


  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => prevIndex + 1);
    setIsAnswerCorrect(null);
    setUserAnswer("");
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) => prevIndex - 1);
    setIsAnswerCorrect(null);
    setUserAnswer("");
  };

  return (
    <div className="flashcard-container">
      <p className="score-message">Your score: {userScore} points</p>
      {filteredQuizQuestion.length > 0 && currentCard ? (
        <>
          <div className="flashcard">
            <div className="flashcard-front">
              <h1 className="item-name">
                {currentCardIndex + 1}. {currentCard.question}
              </h1>
              <h2>{currentCard.quizChoice}</h2>
              <input
                type="text"
                placeholder="Enter your answer"
                value={userAnswer}
                onChange={handleInputChange}
              />
              <button onClick={handleAnswerSubmit}>Submit</button>
              {isAnswerCorrect === false && (
                <p className="alert-message">Incorrect answer!</p>
              )}
              {isAnswerCorrect === true && (
                <p className="congrats-message">
                  Correct answer. Congratulations!
                </p>
              )}
            </div>
            <div className="flashcard-back">
              <h2>Answer: {currentCard.correctChoice}</h2>
            </div>
          </div>
          <div className="navigation-buttons">
            <button onClick={handlePrevCard} disabled={currentCardIndex === 0}>
              Previous
            </button>
            <button
              onClick={handleNextCard}
              disabled={currentCardIndex === filteredQuizQuestion.length - 1}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <h1 className="info-message">There are no Quiz Questions available</h1>
      )}
    </div>
  );
}
