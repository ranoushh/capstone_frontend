import React, { useState } from "react";
import "../style/flashcard.css";

export default function ListingTestQuestion(props) {
  console.log("LIST TESTQUESTION COMPONENT");
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const { list, testId } = props;
  const filteredTestQuestion = list.filter(
    (TestQuestion) => TestQuestion.testId === testId
  );
  const currentCard = filteredTestQuestion[currentCardIndex];
  const [userAnswers, setUserAnswers] = useState(
    new Array(filteredTestQuestion.length).fill("")
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

  const handleNextCard = () => {
    setIsAnswerCorrect(null);
    setUserAnswer(userAnswers[currentCardIndex + 1] || "");
    setIsAnswerSubmitted(false);
    setCurrentCardIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevCard = () => {
    setIsAnswerCorrect(null);
    setUserAnswer(userAnswers[currentCardIndex - 1] || "");
    setIsAnswerSubmitted(userAnswers[currentCardIndex - 1] !== "");
    setCurrentCardIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="flashcard-container">
      <p className="score-message">Your score: {userScore} points</p>
      {filteredTestQuestion.length > 0 && currentCard ? (
        <>
          <div className="flashcard">
            <div className="flashcard-front">
              <h1 className="items-name">
                {currentCardIndex + 1}. {currentCard.question}
              </h1>
              <h2 className="items-name">{currentCard.testChoice}</h2>
              <input
                type="text"
                placeholder="Enter your answer"
                value={userAnswer}
                onChange={handleInputChange}
                readOnly={isAnswerSubmitted}
              />
              <button onClick={handleAnswerSubmit} disabled={isAnswerSubmitted}>
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
          <div className="navigation-buttons">
            <button onClick={handlePrevCard} disabled={currentCardIndex === 0}>
              Previous
            </button>
            <button
              onClick={handleNextCard}
              disabled={currentCardIndex === filteredTestQuestion.length - 1}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <h1 className="info-message">There are no Test Questions available</h1>
      )}
    </div>
  );
}
