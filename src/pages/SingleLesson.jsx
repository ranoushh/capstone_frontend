import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleLessonThunk } from "../redux/lessons/lessons.actions";

function SingleLesson() {
  const { lessonId } = useParams();
  const dispatch = useDispatch();
  const singleLesson = useSelector((state) => state.lessons.singleLesson);

  useEffect(() => {
    dispatch(fetchSingleLessonThunk(lessonId));
  }, [dispatch, lessonId]);

  return (
    <div>
      <h1 className="lesson-title">Lesson</h1>

      {singleLesson ? (
        <div>
          <h2 className="Lesson-title">{singleLesson.lessonName}</h2>
          <p className="paragraph-img">Description: {singleLesson.description}</p>
          <p className="paragraph-img">Content: {singleLesson.content}
          </p>
        </div>
      ) : (
        <p className="info-message">No lesson information currently</p>
      )}
    </div>
  );
}

export default SingleLesson;
