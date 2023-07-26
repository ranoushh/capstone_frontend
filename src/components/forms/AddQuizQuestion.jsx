import React, { useState } from "react";
import "./form.css";
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
      <h2>Add Quiz Question</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question:</label>
          <input
            type="text"
            name="question"
            value={newQuizQuestion.question}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Quiz Choice:</label>
          <input
            type="text"
            name="quizChoice"
            value={newQuizQuestion.quizChoice}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Correct Choice:</label>
          <input
            type="text"
            name="correctChoice"
            value={newQuizQuestion.correctChoice}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Point Worth:</label>
          <input
            type="number"
            name="pointWorth"
            value={newQuizQuestion.pointWorth}
            onChange={handleInputChange}
          />
          <label>Quiz ID: </label>
          <input
            type="number"
            name="quizId"
            value={newQuizQuestion.quizId}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Quiz Question</button>
      </form>
    </div>
  );
};

export default AddQuizQuestion;
