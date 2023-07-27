import React, { useState } from "react";
import "../../style/form.css";
import { NavLink, useNavigate } from "react-router-dom";
import { me } from "../../redux/user";
import { useSelector } from "react-redux";

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


  const user = useSelector((state) => state.user); //just checking if the user is admin or not
  console.log(user.username);

  if (user.username !== "admin") { //If not prevent access
    return (
      <div>
        <div>You cannot add a new test at this time. </div>
        <NavLink to="/languages">Go back to languages</NavLink>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h1 className="form-title">Test Info</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Test Name:</label>
          <input
            type="text"
            name="testName"
            value={newTest.testName}
            onChange={HandleInputChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Difficulty:</label>
          <input
            type="text"
            name="difficulty"
            value={newTest.difficulty}
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
            value={newTest.languageId}
            onChange={HandleInputChange}
            className="form-input"
          />
        </div>
        <button className="form-button" type="submit">
          Add Test
        </button>
      </form>
    </div>
  );
};
export default AddTest;
