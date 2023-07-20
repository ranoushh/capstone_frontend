import React from "react";
import { Link } from "react-router-dom";
import "../style/singleLanguage.css";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { deleteQuizThunk } from "../../redux/quizzes/quizzes.actions";

export default function ListingQuizzes(props) {
  const dispatch = useDispatch();
  const { languageId } = useParams();
  const filteredQuizzes = props.list.filter((Quizzes) => {
    return Quizzes.languageId === props.languageId;
  });

  const handleDelete = (quizId) => {
    dispatch(deleteQuizThunk(quizId))
      .then(() => {
        // Reload the page after deleting the test
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting test:", error);
      });
  };

  return filteredQuizzes.length > 0 ? (
    <div className="item-grid">
      {filteredQuizzes.map((item) => (
        <div>
          <Link key={item.id} className="card-link" to={`/quiz/${item.id}`}>
            <div className="container-item">
              <h2 className="item-name">{item.quizName}</h2>
            </div>
          </Link>
          <Link
            to={`/language/${languageId}/quiz/edit/${item.id}`}
            className="text"
          >
            <button className="edit-btn">Edit</button>
          </Link>
          <button
            type="button"
            className="del-btn"
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  ) : (
    <h1 className="info-message">There are no Quizzes here</h1>
  );
}
