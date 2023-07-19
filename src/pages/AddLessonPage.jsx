import React from "react";
import { useDispatch } from "react-redux";
import AddLesson from "../components/forms/AddLesson";
import { addLessonThunk } from "../redux/lessons/lessons.actions";
import { useParams } from "react-router-dom";

const AddLessonPage = () => {
  //dispatch the action to the store
  const { languageId } = useParams();
  const dispatch = useDispatch();
  const handleSubmit = (lesson) => {
    dispatch(addLessonThunk(lesson));
  };

  return (
    <div>
      <AddLesson onSubmit={handleSubmit} languageId={languageId} />
    </div>
  );
};

export default AddLessonPage;
