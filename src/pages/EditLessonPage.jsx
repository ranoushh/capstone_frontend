import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { fetchSingleLessonThunk } from "../redux/lessons/lessons.actions";
import EditLesson from "../components/forms/EditLesson";

const EditLessonPage = () => {
  const { id, languageId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleLessonThunk(id));
  }, [id, dispatch]);

  return (
    <div>
      <EditLesson languageId={languageId} />
    </div>
  );
};

export default EditLessonPage;
