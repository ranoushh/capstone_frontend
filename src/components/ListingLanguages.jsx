/* ListingLanguages.js */
import React from "react";
import { Link } from "react-router-dom";
import "../style/language.css";

export default function ListingLanguages(props) {
  console.log("LIST LANGUAGES COMPONENT");
  return props.list.length > 0 ? (
    <div className="language-grid">
      {props.list.map((item) => {
        return (
          <Link
            className="language-link"
            key={item.id}
            to={`/language/${item.id}`}
          >
            <div className="container-language">
              <h1 className="language-name">{item.languageName}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  ) : (
    <h1 className="info-message">There are no languages here</h1>
  );
}
