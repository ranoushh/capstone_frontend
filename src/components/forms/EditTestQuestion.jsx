import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./form.css";
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

  return (
    <div className="forms">
      <h1 className={"form-header"}>Edit Test Question</h1>
      <form onSubmit={handleEditSubmit}>
        <label>Question: </label>
        <input
          type="text"
          name="question"
          value={editForm.question || ""}
          onChange={HandleInputChange}
        />
        <label>Test Choice:</label>
        <input
          type="text"
          name="testChoice"
          value={editForm.testChoice || ""}
          onChange={HandleInputChange}
        />
        <label>Correct Choice:</label>
        <input
          type="text"
          name="correctChoice"
          value={editForm.correctChoice || ""}
          onChange={HandleInputChange}
        />
        <label>Point Worth:</label>
        <input
          type="number"
          name="pointWorth"
          value={editForm.pointWorth || ""}
          onChange={HandleInputChange}
        />
        <label>Test ID: </label>
        <input
          type="number"
          name="testId"
          value={editForm.testId || ""}
          onChange={HandleInputChange}
        />

        <button className="submitbtn" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditTestQuestion;
