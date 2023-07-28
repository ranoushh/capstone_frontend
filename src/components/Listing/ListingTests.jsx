import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../style/singleLanguage.css";
import { useParams } from "react-router";
import { deleteTestThunk } from "../../redux/tests/tests.actions";
import { useDispatch, useSelector } from "react-redux";

export default function ListingTests(props) {
  const dispatch = useDispatch();
  const { languageId } = useParams();
  const filteredTests = props.list.filter((test) => {
    return test.languageId === props.languageId;
  });

  const handleDelete = (testId) => {
    dispatch(deleteTestThunk(testId))
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting test:", error);
      });
  };

  const user = useSelector((state) => state.user);
  console.log(user.username);

  const isAdmin = user.username === "admin"; // Check if the user is an admin

  return filteredTests.length > 0 ? (
    <div className="item-grid">
      {filteredTests.map((item) => (
        <div key={item.id}>
          <Link className="card-link" to={`/test/${item.id}`}>
            <div className="container-item">
              <h2 className="item-name">{item.testName}</h2>
            </div>
          </Link>
          {isAdmin && ( // Only show the "Edit" button for admin users
            <Link
              to={`/language/${languageId}/test/edit/${item.id}`}
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
    <h1 className="info-message">There are no Tests here</h1>
  );
}
