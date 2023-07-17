import React from "react";

export default function ListingTestQuestion(props) {
  //CSS
  console.log("LIST TESTQUESTION COMPONENT");
  const filteredTestQuestion = props.list.filter((TestQuestion) => {
    return TestQuestion.testId === props.testId;
  });

  return filteredTestQuestion.length > 0 ? (
    filteredTestQuestion.map((item) => {
      return (
        <div className="item-grid">
          <div className="container-item" key={item.id}>
            <div className="div-card-name">
              <h1 className="item-name">Question: {item.question}</h1>
              <h2>Choice: {item.testChoice}</h2>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <h1 className="info-message">There are no Test Question here</h1>
  );
}
