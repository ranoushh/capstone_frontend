import React, { useState } from "react";
import "../../style/form.css";
import { NavLink, useNavigate } from "react-router-dom";
import { me } from "../../redux/user";
import { useSelector } from "react-redux";



const AddLesson = ({ onSubmit, languageId }) => {
  const navigate = useNavigate();
  const [newLesson, setnewLesson] = useState({
    languageId: languageId,
  });

  const HandleInputChange = (event) => {
    setnewLesson({
      ...newLesson,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newLesson);
    navigate(`/language/${languageId}`);
  };

  const user = useSelector((state) => state.user); //just checking if the user is admin or not
  console.log(user.username);

  if (user.username !== "admin") { //If not prevent access
    return (
      <div>
        <div>You cannot add a new lesson at this time. </div>
        <NavLink to="/languages">Go back to languages</NavLink>
      </div>
    );
  }


  return (
    <div className="form-container">
      <h1 className="form-title">Lesson Info</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Lesson Name:</label>
          <input
            type="text"
            name="lessonName"
            value={newLesson.lessonName}
            onChange={HandleInputChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Description:</label>
          <input
            type="text"
            name="description"
            value={newLesson.description}
            onChange={HandleInputChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Content:</label>
          <input
            type="text"
            name="content"
            value={newLesson.content}
            onChange={HandleInputChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Language ID: </label>
          <input
            type="number"
            name="languageId"
            value={newLesson.languageId}
            onChange={HandleInputChange}
            readOnly
            className="form-input"
          />
        </div>
        <button className="form-button" type="submit">
          Add Lesson
        </button>
      </form>
    </div>
  );
};
export default AddLesson;
