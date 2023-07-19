import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editTestThunk } from "../../redux/tests/tests.actions";
import "./form.css";

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

  return (
    <div className="forms">
      <h1 className={"form-header"}>Edit Test</h1>
      <form onSubmit={handleEditSubmit}>
        <label>Test Name: </label>
        <input
          type="text"
          name="testName"
          value={editForm.testName || ""}
          onChange={HandleInputChange}
        />
        <label>Difficulty:</label>
        <input
          type="text"
          name="difficulty"
          value={editForm.difficulty || ""}
          onChange={HandleInputChange}
        />
        <label>Language ID: </label>
        <input
          type="number"
          name="languageId"
          value={editForm.languageId || ""}
          onChange={HandleInputChange}
        />

        <button className="submitbtn" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditTest;
