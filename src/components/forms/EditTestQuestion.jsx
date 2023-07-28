import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../style/form.css";
import { editTestQuestionThunk } from "../../redux/testQuestion/testQuestion.actions";

const EditTestQuestion = ({ testId }) => {
  const testQuestion = useSelector(
    (state) => state.testQuestion.singleTestQuestion
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editForm, seteditForm] = useState({});

  useEffect(() => {
    seteditForm(testQuestion);
  }, [testQuestion]);

  const handleEditSubmit = (event) => {
    event.preventDefault();
    dispatch(editTestQuestionThunk(editForm));
    navigate(`/test/${testId}`);
  };

  const HandleInputChange = (event) => {
    seteditForm({
      ...editForm,
      [event.target.name]: event.target.value,
    });
  };

  const user = useSelector((state) => state.user);

  if (user.username !== "admin") {
    //If not prevent access
    return (
      <div>
        <div>You cannot edit a test question at this time. </div>
        <NavLink to={`/test/${testId}`}>Go back to Test</NavLink>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h1 className="form-title">Edit Test Question</h1>
      <form onSubmit={handleEditSubmit}>
        <div className="form-group">
          <label className="form-label">Question: </label>
          <input
            type="text"
            name="question"
            value={editForm.question || ""}
            onChange={HandleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Test Choice:</label>
          <input
            type="text"
            name="testChoice"
            value={editForm.testChoice || ""}
            onChange={HandleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Correct Choice:</label>
          <input
            type="text"
            name="correctChoice"
            value={editForm.correctChoice || ""}
            onChange={HandleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Point Worth:</label>
          <input
            type="number"
            name="pointWorth"
            value={editForm.pointWorth || ""}
            onChange={HandleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Test ID: </label>
          <input
            type="number"
            name="testId"
            value={editForm.testId || ""}
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

export default EditTestQuestion;
