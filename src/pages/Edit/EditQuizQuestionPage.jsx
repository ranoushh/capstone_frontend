import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import EditQuizQuestion from "../../components/forms/EditQuizQuestion";
import { fetchSingleQuizQuestionThunk } from "../../redux/quizQuestion/quizQuestion.actions";

const EditQuizQuestionPage = () => {
  const { id, quizId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleQuizQuestionThunk(id));
  }, [id, dispatch]);

  return (
    <div>
      <EditQuizQuestion quizId={quizId} />
    </div>
  );
};

export default EditQuizQuestionPage;
