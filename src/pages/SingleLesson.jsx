import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleLessonThunk } from "../redux/lessons/lessons.actions";

function SingleLesson() {
  const { lessonId } = useParams();
  const dispatch = useDispatch();
  const singleLesson = useSelector((state) => state.lessons.singleLesson);
  const [showFlashcard, setShowFlashcard] = useState(true);

  useEffect(() => {
    dispatch(fetchSingleLessonThunk(lessonId));
  }, [dispatch, lessonId]);

  const handleYesClick = () => {
    setShowFlashcard(false);
    // Additional logic to handle removing the flashcard from the list or marking it as completed
  };

  const handleNoClick = () => {
    // Additional logic to handle marking the flashcard as incomplete or adding it back to the list
    // You can also implement navigation to the next flashcard here
  };

  return (
    <div className="flashcard-container">
      {showFlashcard && (
        <div className="flashcard">
          <div className="front">
            <h1 className="lesson-title">Lesson</h1>
          </div>
          <div className="back">
            {singleLesson ? (
              <>
                <h2 className="lesson-name">{singleLesson.lessonName}</h2>
                <p className="lesson-description">Description: {singleLesson.description}</p>
                <p className="lesson-content">Content: {singleLesson.content}</p>
              </>
            ) : (
              <p className="info-message">No lesson information currently</p>
            )}
            <div className="button-container">
              <button className="yes-button" onClick={handleYesClick}>Yes</button>
              <button className="no-button" onClick={handleNoClick}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleLesson;
