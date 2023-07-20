import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import AddQuizQuestion from "../components/forms/AddQuizQuestion";
import { addQuizQuestionThunk } from "../redux/quizQuestion/quizQuestion.actions";

const AddQuizQuestionPage = () => {
  //dispatch the action to the store
  const { quizId } = useParams();
  const dispatch = useDispatch();
  const handleSubmit = (quizQuestion) => {
    dispatch(addQuizQuestionThunk(quizQuestion));
  };

  return (
    <div>
      <AddQuizQuestion onSubmit={handleSubmit} quizId={quizId} />
    </div>
  );
};

export default AddQuizQuestionPage;
