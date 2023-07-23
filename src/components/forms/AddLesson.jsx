import React, { useState } from "react";
import "./form.css";
import { NavLink, useNavigate } from "react-router-dom";
import { me } from "../../redux/user";
import { useSelector } from "react-redux";



const AddLesson = ({ onSubmit, languageId }) => {
  const navigate = useNavigate();
  const [newLesson, setnewLesson] = useState({});

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
    <div className="forms">
      <h1 className="form-header">Lesson Info</h1>
      <form onSubmit={handleSubmit}>
        <label>Lesson Name:</label>
        <input
          type="text"
          name="lessonName"
          value={newLesson.lessonName}
          onChange={HandleInputChange}
          required
        />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={newLesson.description}
          onChange={HandleInputChange}
          required
        />

        <label>Content:</label>
        <input
          type="text"
          name="content"
          value={newLesson.content}
          onChange={HandleInputChange}
          required
        />

        <label>Language ID: </label>
        <input
          type="number"
          name="languageId"
          value={newLesson.languageId}
          onChange={HandleInputChange}
        />

        <button className="submitbtn" type="submit">
          Add Lesson
        </button>
      </form>
    </div>
  );
};
export default AddLesson;
