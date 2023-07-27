import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchSingleLessonThunk } from "../../redux/lessons/lessons.actions";
import "../../styling/LessonStyle.css"; // Import the CSS for the SingleLesson component
import { completeLessonThunk } from "../../redux/lessons/lessons.actions";
import { updateUserPointsThunk } from "../../redux/usersCrud/users.actions";


const SingleLesson = () => {
  const { lessonId } = useParams();
  const dispatch = useDispatch();
  const singleLesson = useSelector((state) => state.lessons.singleLesson);
  const currentUser = useSelector((state) => state.user);
  const [flip, setFlip] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [completedCards, setCompletedCards] = useState([]);
  const [flashcards, setFlashcards] = useState([]);
  const [termList, setTermList] = useState([]);

  useEffect(() => {
    dispatch(fetchSingleLessonThunk(lessonId));
  }, [dispatch, lessonId]);

  useEffect(() => {
    if (singleLesson && singleLesson.content) {
      try {
        const parsedFlashcards = JSON.parse(singleLesson.content);
        setFlashcards(parsedFlashcards);
        setTermList(parsedFlashcards);
      } catch (error) {
        console.error("Error parsing flashcards:", error);
      }
    }
  }, [singleLesson]);

  const handleYesClick = () => {
    // Remove the current flashcard from the array
    setFlashcards((prevFlashcards) =>
      prevFlashcards.filter((_, index) => index !== currentCard)
    );

    setCurrentCard((prevCard) => (prevCard + 1) % flashcards.length);

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

  const verifyPoints = () => {
    if (!singleLesson.completed) {
      dispatch(updateUserPointsThunk(currentUser.id, 10));
    };
    dispatch(completeLessonThunk(lessonId));
    console.log("Added points");
    setCompletedCards((prevCompletedCards) => [...prevCompletedCards, lessonId]);

  };

  const flashcard = flashcards[currentCard] ?? {};
  const options = flashcard.options ?? [];

  return (
    <div className="single-lesson">
      <h1 className="title">Lesson #{singleLesson?.id}</h1>
      <h2 className="subheading">{singleLesson?.lessonName}</h2>
      <div className="flashcard-details">{singleLesson?.lessonDescription}</div>
      <div className="flashcard-container">
        <div className="flashcard" onClick={() => setFlip(!flip)}>
          <div className={`cardflash ${flip ? "flip" : ""}`}>
            <div className="front">
              {flashcard?.question}
              <div className="flashcard-options">
                {options.map((option, index) => {
                  return (
                    <div key={index} className="flashcard-option">
                      {option}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="back">{flashcard?.answer}</div>
          </div>
        </div>
        <p className="little-msg">Did you memorize it?</p>
        <div className="button-container">
          <button className="yes-button" onClick={handleYesClick}>
            Yes
          </button>
          <button className="no-button" onClick={handleNoClick}>
            No
          </button>
        </div>
      </div>
      {flashcards.length === 0 && !singleLesson.completed && (
        <div className="empty-flashcards">
          {verifyPoints}
          You have completed the lesson! Would you like to try a quiz?
          <Link className="quiz-link" to={`/quiz/${singleLesson.id}`}>
            Go to Quiz
          </Link>
        </div>
      )}
      <div className="term-list-container">
        <h2 className="title">Term List</h2>
        <ul className="term-list-items">
          {termList.map((term, index) => (
            <li key={index} className="term-list-item">
              <span className="term-list-question">{term.question}</span>
              <span className="term-list-separator">-</span>
              <span className="term-list-answer">{term.answer}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleLesson;
