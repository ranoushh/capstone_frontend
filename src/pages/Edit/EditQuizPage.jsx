import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import EditQuiz from "../../components/forms/EditQuiz";
import { fetchSingleQuizThunk } from "../../redux/quizzes/quizzes.actions";

const EditQuizPage = () => {
  const { id, languageId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleQuizThunk(id));
  }, [id, dispatch]);

  return (
    <div>
      <EditQuiz languageId={languageId} />
    </div>
  );
};

export default EditQuizPage;
