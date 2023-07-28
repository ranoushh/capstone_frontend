import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editTestThunk } from "../../redux/tests/tests.actions";
import "../../style/form.css";
import { me } from "../../redux/user";


const EditTest = ({ languageId }) => {
  const test = useSelector((state) => state.tests.singleTest);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editForm, seteditForm] = useState({});

  useEffect(() => {
    seteditForm(test);
  }, [test]);

  const handleEditSubmit = (event) => {
    event.preventDefault();
    dispatch(editTestThunk(editForm));
    navigate(`/language/${languageId}`);
  };

  const HandleInputChange = (event) => {
    seteditForm({
      ...editForm,
      [event.target.name]: event.target.value,
    });
  };

  const user = useSelector((state) => state.user); //just checking if the user is admin or not
  console.log(user.username);

  if (user.username !== "admin") { //If not prevent access
    return (
      <div>
        <div>You cannot edit a new test at this time. </div>
        <NavLink to="/languages">Go back to languages</NavLink>
      </div>
    );
  }


  return (
    <div className="form-container">
      <h1 className="form-title">Edit Test</h1>
      <form onSubmit={handleEditSubmit}>
        <div className="form-group">
          <label className="form-label">Test Name: </label>
          <input
            type="text"
            name="testName"
            value={editForm.testName || ""}
            onChange={HandleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Difficulty:</label>
          <input
            type="text"
            name="difficulty"
            value={editForm.difficulty || ""}
            onChange={HandleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Language ID: </label>
          <input
            type="number"
            name="languageId"
            value={editForm.languageId || ""}
            onChange={HandleInputChange}
            className="form-input"
            readOnly
          />
        </div>
        <button className="form-button" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditTest;
