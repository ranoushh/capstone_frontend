import React, { useState } from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";
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
