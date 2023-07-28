import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../style/form.css";
import { editLessonThunk } from "../../redux/lessons/lessons.actions";
import { me } from "../../redux/user";


const EditLesson = ({ languageId }) => {
  const lesson = useSelector((state) => state.lessons.singleLesson);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editForm, seteditForm] = useState({});

  useEffect(() => {
    seteditForm(lesson);
  }, [lesson]);

  const handleEditSubmit = (event) => {
    event.preventDefault();
    dispatch(editLessonThunk(editForm));
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
        <div>You cannot edit a new lesson at this time. </div>
        <NavLink to="/languages">Go back to languages</NavLink>
      </div>
    );
  }


  return (
    <div className="form-container">
      <h2 className="form-title">Edit Lesson</h2>
      <form onSubmit={handleEditSubmit}>
        <div className="form-group">
          <label className="form-label">Lesson Name: </label>
          <input
            type="text"
            name="lessonName"
            value={editForm.lessonName || ""}
            onChange={HandleInputChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Description:</label>
          <input
            type="text"
            name="description"
            value={editForm.description || ""}
            onChange={HandleInputChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Content:</label>
          <textarea
            name="content"
            value={editForm.content || ""}
            onChange={HandleInputChange}
            className="content-form-input"
            rows={4} 
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
            readOnly
          />
        </div>
        <button className="form-button" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditLesson;
