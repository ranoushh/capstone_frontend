import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import AddTestQuestion from "../components/forms/AddTestQuestion";
import { addTestQuestionThunk } from "../redux/testQuestion/testQuestion.actions";

const AddTestQuestionPage = () => {
  //dispatch the action to the store
  const { testId } = useParams();
  const dispatch = useDispatch();
  const handleSubmit = (testQuestion) => {
    dispatch(addTestQuestionThunk(testQuestion));
  };

  return (
    <div>
      <AddTestQuestion onSubmit={handleSubmit} testId={testId} />
    </div>
  );
};

export default AddTestQuestionPage;
