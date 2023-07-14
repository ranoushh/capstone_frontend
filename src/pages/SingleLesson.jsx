import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleLessonThunk } from "../redux/lessons/lessons.actions";

function SingleLesson() {
  const { lessonId } = useParams();
  const dispatch = useDispatch();
  const singleLesson = useSelector((state) => state.lessons.singleLesson);
  const [flip, setFlip] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [completedCards, setCompletedCards] = useState([]);
  const flashcardsString =
    '[{"question": "What is 3 + 3?", "answer": "6"}, {"question": "What is four + four?", "answer": "8"}, {"question": "What is six * six?", "answer": "36"}]';
  const flashcards = JSON.parse(flashcardsString);

  useEffect(() => {
    dispatch(fetchSingleLessonThunk(lessonId));
  }, [dispatch, lessonId]);

  const handleYesClick = () => {
    // Additional logic to handle removing the flashcard from the list or marking it as completed
    setCurrentCard(currentCard + 1);
    setFlip(false);
  };

  const handleNoClick = () => {
    // Additional logic to handle marking the flashcard as incomplete or adding it back to the list
    // You can also implement navigation to the next flashcard here
    if (currentCard === flashcards.length - 1) {
      // Restart from the beginning if there are no more cards
      setCurrentCard(0);
      setCompletedCards([]);
    } else {
      setCurrentCard(currentCard + 1);
    }
    setFlip(false);
  };

  const handleFlipClick = () => {
    setFlip(!flip);
  };

  const flashcard = flashcards[currentCard];

  return (
    <div>
      <h1 className="lesson-title">Lesson</h1>
      <h2 className="lesson-name">{singleLesson?.lessonName}</h2>
      <div className="flashcard-details">{singleLesson?.lessonDescription}</div>
      <div className="flashcard-container">
        <div className="flashcard" onClick={handleFlipClick}>
          <div className={`card ${flip ? "flip" : ""}`}>
            <div className="front">
              <div className="flashcard-question">{flashcard.question}</div>
            </div>
            <div className="back">
              <div className="flashcard-content">
                <div className="flashcard-answer">{flashcard.answer}</div>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="yes-button" onClick={handleYesClick}>
              Yes
            </button>
            <button className="no-button" onClick={handleNoClick}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleLesson;
