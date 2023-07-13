import Navigation from "../../components/Navigation";
import React, { useState } from "react";


//
function Test({ test, onComplete }) {
  const [userAnswers, setUserAnswers] = useState({});

  const handleAnswerSelect = (questionId, answer) => {
    setUserAnswers((prevUserAnswers) => ({
      ...prevUserAnswers,
      [questionId]: answer,
    }));
  };

  const handleTestSubmit = () => {
    const totalQuestions = test.questions.length;

    // calculating the correct answers by comparing the user's answers with the correct choice from the Test object
    let correctAnswers = 0;
    test.questions.forEach((question) => {
    const userAnswer = userAnswers[question.id];
    const isCorrect = userAnswer === question.correctChoice;
    if (isCorrect) {
      correctAnswers += 1;
    }
});
    const result = { //storing the users test result
      score: (correctAnswers / totalQuestions) * 100,
      correctAnswers,
      totalQuestions,
    };

    onComplete(result);
  };

  return (
    <div>
      {/* Render the Test questions and answer options */}
      {test.questions.map((question) => (
        <div key={question.id}>
          <h4>{question.question}</h4>
          {question.testChoice.map((choice) => (
            <label key={choice}>
              <input //the type of button we'll be using for answer choices 
                type = "radio"
                value={choice}
                checked={userAnswers[question.id] === choice} //comparing the choices 
                onChange={() => handleAnswerSelect(question.id, choice)}
              />
              {choice}
            </label>
          ))}
        </div>
      ))}

      <button onClick={handleTestSubmit}>Submit Test</button>  {/* Button to submit the Test */}

    </div>
  );
}

export default Test;
