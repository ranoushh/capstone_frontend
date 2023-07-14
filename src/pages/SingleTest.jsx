import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleTestThunk } from "../redux/tests/tests.actions";

function SingleTest() {
  const { testId } = useParams();
  const dispatch = useDispatch();
  const singleTest = useSelector((state) => state.tests.singleTest);

  useEffect(() => {
    dispatch(fetchSingleTestThunk(testId));
  }, [dispatch, testId]);

  return (
    <div>
      <h1 className="test-title">Test</h1>

      {singleTest ? (
        <div>
          <h2 className="test-title">{singleTest.testName}</h2>
          <p className="paragraph-img">Difficulty: {singleTest.difficulty}</p>
        </div>
      ) : (
        <p className="info-message">No Test information currently</p>
      )}
    </div>
  );
}

export default SingleTest;
