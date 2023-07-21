import React from "react";
import { Link } from "react-router-dom";
import "../../style/singleLanguage.css";
import { useParams } from "react-router";
import { deleteTestThunk } from "../../redux/tests/tests.actions";
import { useDispatch } from "react-redux";

export default function ListingTests(props) {
  const dispatch = useDispatch();
  const { languageId } = useParams();
  const filteredTests = props.list.filter((Tests) => {
    return Tests.languageId === props.languageId;
  });

  const handleDelete = (testId) => {
    dispatch(deleteTestThunk(testId))
      .then(() => {
        // Reload the page after deleting the test
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting test:", error);
      });
  };

  return filteredTests.length > 0 ? (
    <div className="item-grid">
      {filteredTests.map((item) => (
        <div>
          <Link key={item.id} className="card-link" to={`/test/${item.id}`}>
            <div className="container-item">
              <h2 className="item-name">{item.testName}</h2>
            </div>
          </Link>
          <Link
            to={`/language/${languageId}/test/edit/${item.id}`}
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
    <h1 className="info-message">There are no Tests here</h1>
  );
}
