import React from "react";
import { useDispatch } from "react-redux";
import AddQuiz from "../components/forms/AddQuiz";
import { addQuizThunk } from "../redux/quizzes/quizzes.actions";
import { useParams } from "react-router-dom";

const AddQuizPage = () => {
  //dispatch the action to the store
  const { languageId } = useParams();
  const dispatch = useDispatch();
  const handleSubmit = (quiz) => {
    dispatch(addQuizThunk(quiz));
  };

  return (
    <div>
      <AddQuiz onSubmit={handleSubmit} languageId={languageId} />
    </div>
  );
};

export default AddQuizPage;
