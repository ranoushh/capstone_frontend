import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./form.css";
import { editQuizQuestionThunk } from "../../redux/quizQuestion/quizQuestion.actions";

const EditQuizQuestion = ({ quizId }) => {
  const quizQuestion = useSelector(
    (state) => state.quizQuestion.singleQuizQuestion
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editForm, seteditForm] = useState({});

  useEffect(() => {
    seteditForm(quizQuestion);
  }, [quizQuestion]);

  const handleEditSubmit = (event) => {
    event.preventDefault();
    dispatch(editQuizQuestionThunk(editForm));
    navigate(`/quiz/${quizId}`);
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
         <div>You cannot edit a quiz question at this time. </div>
         <NavLink to={`/quiz/${quizId}`}>Go back to Quiz</NavLink>
       </div>
     );
   }

  return (
    <div className="forms">
      <h1 className={"form-header"}>Edit Quiz Question</h1>
      <form onSubmit={handleEditSubmit}>
        <label>Question: </label>
        <input
          type="text"
          name="question"
          value={editForm.question || ""}
          onChange={HandleInputChange}
        />
        <label>Quiz Choice:</label>
        <input
          type="text"
          name="quizChoice"
          value={editForm.quizChoice || ""}
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
        <label>Quiz ID: </label>
        <input
          type="number"
          name="quizId"
          value={editForm.quizId || ""}
          onChange={HandleInputChange}
        />

        <button className="submitbtn" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditQuizQuestion;
