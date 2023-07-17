import React from "react";
import { Link } from "react-router-dom";

export default function ListingLanguages(props) {
  console.log("LIST LANGUAGES COMPONENT");
  return props.list.length > 0 ? (
    props.list.map((item) => {
      return (
        <div className="item-grid">
          <div className="container-item" key={item.id}>
            <div className="div-card-name">
              <Link className="card-link" to={`/language/${item.id}`}>
                <h1 className="item-name">{item.languageName}</h1>
              </Link>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <h1 className="info-message">There are no languages here</h1>
  );
}
