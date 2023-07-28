import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../style/singleLanguage.css";
import { useParams } from "react-router";
import { deleteLessonThunk } from "../../redux/lessons/lessons.actions";
import { useDispatch, useSelector } from "react-redux";

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

  const user = useSelector((state) => state.user);
  console.log(user.username);

  const isAdmin = user.username === "admin"; // Check if the user is an admin

  return filteredLessons.length > 0 ? (
    <div className="item-grid">
      {filteredLessons.map((item) => (
        <div key={item.id}>
          <Link className="card-link" to={`/lesson/${item.id}`}>
            <div className="container-item">
              <h2 className="item-name">{item.lessonName}</h2>
            </div>
          </Link>
          {isAdmin && ( // Only show the "Edit" button for admin users
            <Link
              to={`/language/${languageId}/lesson/edit/${item.id}`}
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
    <h1 className="info-message">There are no lessons here</h1>
  );
}
