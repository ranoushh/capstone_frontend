import React, { useState } from "react";
import "../../style/form.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AddTestQuestion = ({ onSubmit, testId }) => {
  const navigate = useNavigate();
  const [newTestQuestion, setNewTestQuestion] = useState({});

  const handleInputChange = (event) => {
    setNewTestQuestion({
      ...newTestQuestion,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newTestQuestion);
    navigate(`/test/${testId}`);
  };

    const user = useSelector((state) => state.user); //just checking if the user is admin or not
    console.log(user.username);

    if (user.username !== "admin") {
      //If not prevent access
      return (
        <div>
          <div>You cannot add a new test question at this time. </div>
          <NavLink to={`/test/${testId}`}>Go back to Test</NavLink>
        </div>
      );
    }

  return (
    <div className="form-container">
      <h2 className="form-title">Add Test Question</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Question:</label>
          <input
            className="form-input"
            type="text"
            name="question"
            value={newTestQuestion.question}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Test Choice:</label>
          <input
            className="form-input"
            type="text"
            name="testChoice"
            value={newTestQuestion.testChoice}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Correct Choice:</label>
          <input
            className="form-input"
            type="text"
            name="correctChoice"
            value={newTestQuestion.correctChoice}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Point Worth:</label>
          <input
            className="form-input"
            type="number"
            name="pointWorth"
            value={newTestQuestion.pointWorth}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Test ID:</label>
          <input
            className="form-input"
            type="number"
            name="testId"
            value={newTestQuestion.testId}
            onChange={handleInputChange}
          />
        </div>
        <button className="form-button" type="submit">
          Add Test Question
        </button>
      </form>
    </div>
  );
};

export default AddTestQuestion;
