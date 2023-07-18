import React from "react";

const TermList = ({ flashcards }) => {
  return (
    <div className="term-list">
      <h2>Terms List</h2>
      <ul>
        {flashcards.map((flashcard, index) => (
          <li key={index}>
            <strong>Question:</strong> {flashcard.question},{" "}
            <strong>Answer:</strong> {flashcard.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TermList;
