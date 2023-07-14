import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleQuizThunk } from "../redux/quizzes/quizzes.actions";

function SingleQuiz() {
  const { quizId } = useParams();
  const dispatch = useDispatch();
  const singleQuiz = useSelector((state) => state.quizzes.singleQuiz);

  useEffect(() => {
    dispatch(fetchSingleQuizThunk(quizId));
  }, [dispatch, quizId]);

  return (
    <div>
      <h1 className="quiz-title">Quiz</h1>

      {singleQuiz ? (
        <div>
          <h2 className="quiz-title">{singleQuiz.quizName}</h2>
          <p className="paragraph-img">Difficulty: {singleQuiz.difficulty}</p>
        </div>
      ) : (
        <p className="info-message">No quiz information currently</p>
      )}
    </div>
  );
}

export default SingleQuiz;
