import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleLessonThunk } from "../redux/lessons/lessons.actions";
import TermList from "../components/TermList";

function SingleLesson() {
  const { lessonId } = useParams();
  const dispatch = useDispatch();
  const singleLesson = useSelector((state) => state.lessons.singleLesson);
  const [flip, setFlip] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [completedCards, setCompletedCards] = useState([]);
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    dispatch(fetchSingleLessonThunk(lessonId));
  }, [dispatch, lessonId]);

  useEffect(() => {
    if (singleLesson && singleLesson.content) {
      try {
        setFlashcards(JSON.parse(singleLesson.content));
      } catch (error) {
        console.error("Error parsing flashcards:", error);
        // Handle the error appropriately, such as showing an error message to the user.
      }
    }
  }, [singleLesson]);

  const handleYesClick = () => {
    // Remove the current flashcard from the array
    setFlashcards((prevFlashcards) =>
      prevFlashcards.filter((_, index) => index !== currentCard)
    );

    // Additional logic to handle marking the flashcard as completed or adding it to the completedCards list

    // Move to the next flashcard
    setCurrentCard((prevCard) => (prevCard + 1) % flashcards.length);

    // Reset flip to the front side of the flashcard
    setFlip(false);
  };

  const handleNoClick = () => {
    // Additional logic to handle marking the flashcard as incomplete or adding it back to the list
    // implement navigation to the next flashcard here
    if (currentCard === flashcards.length - 1) {
      setCurrentCard(0);
      setCompletedCards([]);
    } else {
      setCurrentCard((prevCard) => prevCard + 1);
    }
    setFlip(false);
  };

  // Ensure that flashcard and flashcards array are not empty before accessing their properties
  const flashcard = flashcards[currentCard] ?? {};
  const options = flashcard.options ?? [];

  return (
    <div>
      <h1 className="lesson-title">Lesson</h1>
      <h2 className="lesson-name">{singleLesson?.lessonName}</h2>
      <div className="flashcard-details">{singleLesson?.lessonDescription}</div>
      <div className="flashcard-container">
        <div className="flashcard" onClick={() => setFlip(!flip)}>
          <div className={`card ${flip ? "flip" : ""}`}>
            <div className="front">
              {flashcard?.question}
              <div className="flashcard-options">
                {options.map((option) => {
                  return <div className="flashcard-option">{option}</div>;
                })}
              </div>
            </div>
            <div className="back">{flashcard?.answer}</div>
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
      <TermList flashcards={flashcards} />
    </div>
  );
}

export default SingleLesson;
