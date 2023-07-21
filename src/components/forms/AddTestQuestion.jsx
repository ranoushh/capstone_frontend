import React, { useState } from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";
const AddTestQuestion = ({ onSubmit, testId }) => {
  const navigate = useNavigate();
  const [newTestQuestion, setnewTestQuestion] = useState({});

  const handleInputChange = (event) => {
    setnewTestQuestion({
      ...newTestQuestion,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newTestQuestion);
    navigate(`/test/${testId}`);
  };
console.log("Test question:", newTestQuestion.question);
  return (
    <div>
      <h2>Add Test Question</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question:</label>
          <input
            type="text"
            name="question"
            value={newTestQuestion.question}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Test Choice:</label>
          <input
            type="text"
            name="testChoice"
            value={newTestQuestion.testChoice}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Correct Choice:</label>
          <input
            type="text"
            name="correctChoice"
            value={newTestQuestion.correctChoice}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Point Worth:</label>
          <input
            type="number"
            name="pointWorth"
            value={newTestQuestion.pointWorth}
            onChange={handleInputChange}
          />
          <label>Test ID: </label>
          <input
            type="number"
            name="testId"
            value={newTestQuestion.testId}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Test Question</button>
      </form>
    </div>
  );
};

export default AddTestQuestion;