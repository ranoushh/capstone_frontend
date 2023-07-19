import React, { useState } from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";
const AddQuiz = ({ onSubmit, languageId }) => {
  const navigate = useNavigate();
  const [newQuiz, setnewQuiz] = useState({
    // name: "",
    // address: "",
    // description: "",
    // imageUrl: defaultImageUrl,
  });

  const HandleInputChange = (event) => {
    setnewQuiz({
      ...newQuiz,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newQuiz);
    navigate(`/language/${languageId}`);
  };

  return (
    <div className="forms">
      <h1 className="form-header">Quiz Info</h1>
      <form onSubmit={handleSubmit}>
        <label>Quiz Name:</label>
        <input
          type="text"
          name="quizName"
          value={newQuiz.quizName}
          onChange={HandleInputChange}
          required
        />

        <label>Difficulty:</label>
        <input
          type="text"
          name="difficulty"
          value={newQuiz.difficulty}
          onChange={HandleInputChange}
          required
        />

        <label>Language ID: </label>
        <input
          type="number"
          name="languageId"
          value={newQuiz.languageId}
          onChange={HandleInputChange}
        />

        <button className="submitbtn" type="submit">
          Add Quiz
        </button>
      </form>
    </div>
  );
};
export default AddQuiz;
