import React, { useState } from "react";

//
function Quiz({ quiz, onComplete }) {
  const [userAnswers, setUserAnswers] = useState({});

  const handleAnswerSelect = (questionId, answer) => {
    setUserAnswers((prevUserAnswers) => ({
      ...prevUserAnswers,
      [questionId]: answer,
    }));
  };

  const handleQuizSubmit = () => {
    const totalQuestions = quiz.questions.length;

    // calculating the correct answers by comparing the user's answers with the correct choice from the quiz object
    let correctAnswers = 0;
    quiz.questions.forEach((question) => {
    const userAnswer = userAnswers[question.id];
    const isCorrect = userAnswer === question.correctChoice;
    if (isCorrect) {
      correctAnswers += 1;
    }
});
    const result = { //storing the users quiz result
      score: (correctAnswers / totalQuestions) * 100,
      correctAnswers,
      totalQuestions,
    };

    onComplete(result);
  };

  return (
    <div>
      {/* Render the quiz questions and answer options */}
      {quiz.questions.map((question) => (
        <div key={question.id}>
          <h4>{question.question}</h4>
          {question.quizChoice.map((choice) => (
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

      <button onClick={handleQuizSubmit}>Submit Quiz</button>  {/* Button to submit the quiz */}

    </div>
  );
}

export default Quiz;
