import React from "react";
import { Link } from "react-router-dom";
import "../style/singleLanguage.css";

export default function ListingQuizzes(props) {
  //CSS
  console.log("LIST QUIZZES COMPONENT");
  const filteredQuizzes = props.list.filter((Quizzes) => {
    return Quizzes.languageId === props.languageId;
  });
    return filteredQuizzes.length > 0 ? (
      <div className="item-grid">
        {filteredQuizzes.map((item) => (
          <Link key={item.id} className="card-link" to={`/quiz/${item.id}`}>
            <div className="container-item">
              <h2 className="item-name">{item.quizName}</h2>
            </div>
          </Link>
        ))}
      </div>
    ) : (
      <h1 className="info-message">There are no Quizzes here</h1>
    );
}
