import React from "react";
import { Link } from "react-router-dom";
import "../style/singleLanguage.css";
import { useParams } from "react-router";
import { deleteLessonThunk } from "../../redux/lessons/lessons.actions";
import { useDispatch } from "react-redux";

export default function ListingLessons(props) {
  const dispatch = useDispatch();
  const { languageId } = useParams();
  const filteredLessons = props.list.filter((lesson) => {
    return lesson.languageId === props.languageId;
  });

  const handleDelete = (lessonId) => {
    dispatch(deleteLessonThunk(lessonId))
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting lesson:", error);
      });
  };

  return filteredLessons.length > 0 ? (
    <div className="item-grid">
      {filteredLessons.map((item) => (
        <div>
          <Link key={item.id} className="card-link" to={`/lesson/${item.id}`}>
            <div className="container-item">
              <h2 className="item-name">{item.lessonName}</h2>
            </div>
          </Link>
          <Link
            to={`/language/${languageId}/lesson/edit/${item.id}`}
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
    <h1 className="info-message">There are no lessons here</h1>
  );
}
