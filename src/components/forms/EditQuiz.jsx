import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../style/form.css";
import { editQuizThunk } from "../../redux/quizzes/quizzes.actions";
import { me } from "../../redux/user";


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

  const user = useSelector((state) => state.user); //just checking if the user is admin or not
  console.log(user.username);

  if (user.username !== "admin") { //If not prevent access
    return (
      <div>
        <div>You cannot edit a new quiz at this time. </div>
        <NavLink to="/languages">Go back to languages</NavLink>
      </div>
    );
  }


  return (
    <div className="form-container">
      <h1 className="form-title">Edit Quiz</h1>
      <form onSubmit={handleEditSubmit}>
        <div className="form-group">
          <label className="form-label">Quiz Name: </label>
          <input
            type="text"
            name="quizName"
            value={editForm.quizName || ""}
            onChange={HandleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Difficulty:</label>
          <input
            type="text"
            name="difficulty"
            value={editForm.difficulty || ""}
            onChange={HandleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Language ID: </label>
          <input
            type="number"
            name="languageId"
            value={editForm.languageId || ""}
            onChange={HandleInputChange}
            className="form-input"
          />
        </div>
        <button className="form-button" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditQuiz;
