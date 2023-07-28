import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../style/singleLanguage.css";
import { useParams } from "react-router";
import { deleteQuizThunk } from "../../redux/quizzes/quizzes.actions";
import { useDispatch, useSelector } from "react-redux";

export default function ListingQuizzes(props) {
  const dispatch = useDispatch();
  const { languageId } = useParams();
  const filteredQuizzes = props.list.filter((quiz) => {
    return quiz.languageId === props.languageId;
  });

  const handleDelete = (quizId) => {
    dispatch(deleteQuizThunk(quizId))
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting quiz:", error);
      });
  };

  const user = useSelector((state) => state.user);
  console.log(user.username);

  const isAdmin = user.username === "admin"; // Check if the user is an admin

  return filteredQuizzes.length > 0 ? (
    <div className="item-grid">
      {filteredQuizzes.map((item) => (
        <div key={item.id}>
          <Link className="card-link" to={`/quiz/${item.id}`}>
            <div className="container-item">
              <h2 className="item-name">{item.quizName}</h2>
            </div>
          </Link>
          {isAdmin && ( // Only show the "Edit" button for admin users
            <Link
              to={`/language/${languageId}/quiz/edit/${item.id}`}
              className="text"
            >
              <button className="edit-btn">Edit</button>
            </Link>
          )}
          {isAdmin && ( // Only show the "Delete" button for admin users
            <button
              type="button"
              className="del-btn"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  ) : (
    <h1 className="info-message">There are no Quizzes here</h1>
  );
}
