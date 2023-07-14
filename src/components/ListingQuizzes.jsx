import React from "react";
import { Link } from "react-router-dom";

export default function ListingQuizzes(props) {
  //CSS
  console.log("LIST QUIZZES COMPONENT");
  const filteredQuizzes = props.list.filter((Quizzes) => {
    return Quizzes.languageId === props.languageId;
  });
  return filteredQuizzes.length > 0 ? (
    filteredQuizzes.map((item) => {
      return (
        <div className="quiz-grid">
          <div className="container-quiz" key={item.id}>
            <div className="div-card-name">
              <Link className="card-link" to={`/quiz/${item.id}`}>
                <h1 className="item-name">{item.quizName}</h1>
              </Link>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <h1 className="info-message">There are no Quizzes here</h1>
  );
}
