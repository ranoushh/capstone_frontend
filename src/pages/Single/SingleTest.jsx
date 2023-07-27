import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleTestThunk } from "../../redux/tests/tests.actions";
import ListingTestQuestion from "../../components/Listing/ListingTestQuestion";
import { fetchAllTestQuestionThunk } from "../../redux/testQuestion/testQuestion.actions";
import "../../style/flashcard.css";
import { Link } from "react-router-dom";

function SingleTest() {
  const { testId } = useParams();
  const dispatch = useDispatch();
  const singleTest = useSelector((state) => state.tests.singleTest);
  const testQuestion = useSelector(
    (state) => state.testQuestion.allTestQuestion
  );
  const currentUser = useSelector((state) => state.user);
  const isTestCompleted = singleTest.completed;

  useEffect(() => {
    dispatch(fetchSingleTestThunk(testId));
    dispatch(fetchAllTestQuestionThunk());
  }, [dispatch, testId]);

  return (
    <div className="test-container">
      {singleTest ? (
        <div>
          <h2 className="title">{singleTest.testName}</h2>
          <p className="test-level">Difficulty: {singleTest.difficulty}</p>
          <Link to={`/test/${testId}/testQuestion/add`}>
            <button class="add1-btn">Add Test Question</button>
          </Link>
          <ListingTestQuestion list={testQuestion} testId={singleTest.id} isTestCompleted={isTestCompleted} />
        </div>
      ) : (
        <p className="info-message">No Test information currently</p>
      )}
    </div>
  );
}

export default SingleTest;
