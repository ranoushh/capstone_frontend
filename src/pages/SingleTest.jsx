import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleTestThunk } from "../redux/tests/tests.actions";
import ListingTestQuestion from "../components/ListingTestQuestion";
import { fetchAllTestQuestionThunk } from "../redux/testQuestion/testQuestion.actions";
import "../style/flashcard.css";

function SingleTest() {
  const { testId } = useParams();
  const dispatch = useDispatch();
  const singleTest = useSelector((state) => state.tests.singleTest);
   const testQuestion = useSelector(
     (state) => state.testQuestion.allTestQuestion
   );

  useEffect(() => {
    dispatch(fetchSingleTestThunk(testId));
    dispatch(fetchAllTestQuestionThunk());
  }, [dispatch, testId]);

  return (
    <div>

      {singleTest ? (
        <div>
          <h2 className="test-title">{singleTest.testName}</h2>
          <p className="test-level">Difficulty: {singleTest.difficulty}</p>
          <ListingTestQuestion list={testQuestion} testId={singleTest.id} />
        </div>
      ) : (
        <p className="info-message">No Test information currently</p>
      )}
    </div>
  );
}

export default SingleTest;
