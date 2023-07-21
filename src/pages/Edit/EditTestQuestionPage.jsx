import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import EditTestQuestion from "../../components/forms/EditTestQuestion";
import { fetchSingleTestQuestionThunk } from "../../redux/testQuestion/testQuestion.actions";

const EditTestQuestionPage = () => {
  const { id, testId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleTestQuestionThunk(id));
  }, [id, dispatch]);

  return (
    <div>
      <EditTestQuestion testId={testId} />
    </div>
  );
};

export default EditTestQuestionPage;
