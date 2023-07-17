import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleQuizThunk } from "../redux/quizzes/quizzes.actions";
import ListingQuizQuestion from "../components/ListingQuizQuestion";
import { fetchAllQuizQuestionThunk } from "../redux/quizQuestion/quizQuestion.actions";
import "../style/flashcard.css";

function SingleQuiz() {
  const { quizId } = useParams();
  const dispatch = useDispatch();
  const singleQuiz = useSelector((state) => state.quizzes.singleQuiz);
  const quizQuestion = useSelector(
    (state) => state.quizQuestion.allQuizQuestion
  );

  useEffect(() => {
    dispatch(fetchSingleQuizThunk(quizId));
    dispatch(fetchAllQuizQuestionThunk());
  }, [dispatch, quizId]);
  

  return (
    <div>
      {singleQuiz ? (
        <div>
          <h2 className="quiz-title">{singleQuiz.quizName}</h2>
          <p className="quiz-level">Difficulty: {singleQuiz.difficulty}</p>
          <ListingQuizQuestion list={quizQuestion} quizId={singleQuiz.id} />
        </div>
      ) : (
        <p className="info-message">No quiz information currently</p>
      )}
    </div>
  );
}

export default SingleQuiz;
