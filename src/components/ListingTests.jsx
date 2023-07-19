import React from "react";
import { Link } from "react-router-dom";
import "../style/singleLanguage.css";
import { useParams } from "react-router";

export default function ListingTests(props) {
  const { languageId } = useParams();
  const filteredTests = props.list.filter((Tests) => {
    return Tests.languageId === props.languageId;
  });
  return filteredTests.length > 0 ? (
    <div className="item-grid">
      {filteredTests.map((item) => (
        <Link key={item.id} className="card-link" to={`/test/${item.id}`}>
          <div className="container-item">
            <h2 className="item-name">{item.testName}</h2>
            <Link
              to={`/language/${languageId}/test/edit/${item.id}`}
              className="text"
            >
              <button className="edit-btn">Edit</button>
            </Link>
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <h1 className="info-message">There are no Tests here</h1>
  );
}
