import React from "react";

export default function ListingQuizQuestion(props) {
  //CSS
  console.log("LIST QUIZQUESTION COMPONENT");
  const filteredQuizQuestion = props.list.filter((QuizQuestion) => {
    return QuizQuestion.quizId === props.quizId;
  });
  return filteredQuizQuestion.length > 0 ? (
    filteredQuizQuestion.map((item) => {
      return (
        <div className="item-grid">
          <div className="container-item" key={item.id}>
            <div className="div-card-name">
              <h1 className="item-name">Question: {item.question}</h1>
              <h2>Choice: {item.quizChoice}</h2>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <h1 className="info-message">There are no Quiz Question here</h1>
  );
}
