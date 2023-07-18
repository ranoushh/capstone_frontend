import React from "react";
import { Link } from "react-router-dom";
import "../style/singleLanguage.css"

export default function ListingTests(props) {
  //CSS
  console.log("LIST TESTS COMPONENT");
  const filteredTests = props.list.filter((Tests) => {
    return Tests.languageId === props.languageId;
  });
    return filteredTests.length > 0 ? (
      <div className="item-grid">
        {filteredTests.map((item) => (
          <Link key={item.id} className="card-link" to={`/test/${item.id}`}>
            <div className="container-item">
              <h2 className="item-name">{item.testName}</h2>
            </div>
          </Link>
        ))}
      </div>
    ) : (
      <h1 className="info-message">There are no Tests here</h1>
    );
}
