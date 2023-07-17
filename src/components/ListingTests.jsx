import React from "react";
import { Link } from "react-router-dom";

export default function ListingTests(props) {
  //CSS
  console.log("LIST TESTS COMPONENT");
  const filteredTests = props.list.filter((Tests) => {
    return Tests.languageId === props.languageId;
  });
  return filteredTests.length > 0 ? (
    filteredTests.map((item) => {
      return (
        <div className="item-grid">
          <div className="container-item" key={item.id}>
            <div className="div-card-name">
              <Link className="card-link" to={`/test/${item.id}`}>
                <h1 className="item-name">{item.testName}</h1>
              </Link>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <h1 className="info-message">There are no Tests here</h1>
  );
}
