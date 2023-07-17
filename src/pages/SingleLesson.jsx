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
  const [flashcards, setFlashcards] = useState([]); // Use useState hook to initialize flashcards

  useEffect(() => {
    dispatch(fetchSingleLessonThunk(lessonId))
      .then(() => {
        console.log("Fetched singleLesson:", singleLesson);
        if (singleLesson && singleLesson.content) {
          try {
            const parsedFlashcards = JSON.parse(singleLesson.content);
            console.log("Parsed flashcards:", parsedFlashcards);
            setFlashcards(parsedFlashcards);
          } catch (error) {
            console.error("Error parsing flashcards:", error);
            // Handle the error appropriately, such as showing an error message to the user.
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching singleLesson:", error);
        // Handle the error appropriately, such as showing an error message to the user.
      });
  }, [dispatch, lessonId, singleLesson]);
  console.log("Flascards: " + flashcards);

  const handleYesClick = () => {
    // Additional logic to handle removing the flashcard from the list or marking it as completed
    setCurrentCard(currentCard + 1);
    setFlip(false);
  };

  const handleNoClick = () => {
    // Additional logic to handle marking the flashcard as incomplete or adding it back to the list
    // implement navigation to the next flashcard here
    if (currentCard === flashcards.length - 1) {
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
              <div className="flashcard-question">{flashcard?.question}</div>
            </div>
            <div className="back">
              <div className="flashcard-content">
                <div className="flashcard-answer">{flashcard?.answer}</div>
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