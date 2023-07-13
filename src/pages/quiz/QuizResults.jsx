import React from "react";

function QuizResult({ result }) {
  return (
    <div>
      <h2>Quiz Result</h2> {/** will be passed as props to the quiz component*/}
      <p>Score: {result.score}</p>
      <p>Correct Answers: {result.correctAnswers}</p>
      <p>Total Questions: {result.totalQuestions}</p>

    </div>
  );
}

export default QuizResult;
