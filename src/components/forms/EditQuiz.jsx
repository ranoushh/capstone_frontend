import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./form.css";
import { editQuizThunk } from "../../redux/quizzes/quizzes.actions";

const EditQuiz = ({ languageId }) => {
  const quiz = useSelector((state) => state.quizzes.singleQuiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editForm, seteditForm] = useState({});

  useEffect(() => {
    seteditForm(quiz);
  }, [quiz]);

  const handleEditSubmit = (event) => {
    event.preventDefault();
    dispatch(editQuizThunk(editForm));
    navigate(`/language/${languageId}`);
  };

  const HandleInputChange = (event) => {
    seteditForm({
      ...editForm,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="forms">
      <h1 className={"form-header"}>Edit Quiz</h1>
      <form onSubmit={handleEditSubmit}>
        <label>Quiz Name: </label>
        <input
          type="text"
          name="quizName"
          value={editForm.quizName || ""}
          onChange={HandleInputChange}
        />
        <label>Difficulty:</label>
        <input
          type="text"
          name="difficulty"
          value={editForm.difficulty || ""}
          onChange={HandleInputChange}
        />
        <label>Language ID: </label>
        <input
          type="number"
          name="languageId"
          value={editForm.languageId || ""}
          onChange={HandleInputChange}
        />

        <button className="submitbtn" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditQuiz;