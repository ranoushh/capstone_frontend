import React, { useState } from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";
const AddTest = ({ onSubmit, languageId}) => {
  const navigate = useNavigate();
  const [newTest, setnewTest] = useState({});

  const HandleInputChange = (event) => {
    setnewTest({
      ...newTest,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newTest);
    navigate(`/language/${languageId}`);
  };

  return (
    <div className="forms">
      <h1 className="form-header">Test Info</h1>
      <form onSubmit={handleSubmit}>
        <label>Test Name:</label>
        <input
          type="text"
          name="testName"
          value={newTest.testName}
          onChange={HandleInputChange}
          required
        />

        <label>Difficulty:</label>
        <input
          type="text"
          name="difficulty"
          value={newTest.difficulty}
          onChange={HandleInputChange}
          required
        />

        <label>Language ID: </label>
        <input
          type="number"
          name="languageId"
          value={newTest.languageId}
          onChange={HandleInputChange}
        />

        <button className="submitbtn" type="submit">
          Add Test
        </button>
      </form>
    </div>
  );
};
export default AddTest;
