import React, { useState } from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";
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
  console.log("Quiz question:", newQuizQuestion.question);
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
