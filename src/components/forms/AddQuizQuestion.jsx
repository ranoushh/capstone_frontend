import React, { useState } from "react";
import "../../style/form.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AddQuizQuestion = ({ onSubmit, quizId }) => {
  const navigate = useNavigate();
  const [newQuizQuestion, setnewQuizQuestion] = useState({});

  const handleInputChange = (event) => {
    setnewQuizQuestion({
      ...newQuizQuestion,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newQuizQuestion);
    navigate(`/quiz/${quizId}`);
  };

    const user = useSelector((state) => state.user); //just checking if the user is admin or not
    console.log(user.username);

    if (user.username !== "admin") {
      //If not prevent access
      return (
        <div>
          <div>You cannot add a new quiz question at this time. </div>
          <NavLink to={`/quiz/${quizId}`}>Go back to Quiz</NavLink>
        </div>
      );
    }

  return (
    <div>
      <div className="form-container">
        <h2 className="form-title">Add Quiz Question</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Question:</label>
            <input
              type="text"
              name="question"
              value={newQuizQuestion.question}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Quiz Choice:</label>
            <input
              type="text"
              name="quizChoice"
              value={newQuizQuestion.quizChoice}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Correct Choice:</label>
            <input
              type="text"
              name="correctChoice"
              value={newQuizQuestion.correctChoice}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Point Worth:</label>
            <input
              type="number"
              name="pointWorth"
              value={newQuizQuestion.pointWorth}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Quiz ID: </label>
            <input
              type="number"
              name="quizId"
              value={newQuizQuestion.quizId}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
          <button className="form-button" type="submit">
            Add Quiz Question
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddQuizQuestion;
