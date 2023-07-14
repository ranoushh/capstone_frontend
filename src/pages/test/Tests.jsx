import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTests } from "../Redux/Tests/Tests.actions";
import TestList from "../TestList";
import Test from "../Test";

function Tests() {
  const dispatch = useDispatch();
  const [selectedTest, setSelectedTest] = useState(null);
  const [completedTest, setCompletedTest] = useState(null);
  const Tests = useSelector((state) => state.tests);

  useEffect(() => {
    console.log("FETCH ALL TESTS FIRING IN USE EFFECT");
    fetchAllTests();
  }, []);

  function fetchAllTests() {
    console.log("RUNNING DISPATCH FROM FETCHALLTESTS");
    return dispatch(fetchAllTestsThunk());
  }

  const handleTestSelect = (test) => {
    setSelectedTest(test);
  };

  const handleTestComplete = (result) => {
    setCompletedTest(result);
  };

  const renderAllTests = () => {
  if (!selectedTest && !completedTest) {
    return <TestList tests={Tests} onTestSelect={handleTestSelect} />;
  } else if (selectedTest && !completedTest) {
    return <Test test={selectedTest} onComplete={handleTestComplete} />;
  } else if (!selectedTest && completedTest) {
    return <TestResult result={completedTest} />;
  } else {
    return null;
  }
  };

  return (
    <div>
      <h1>Tests Page</h1>
      {renderAllTests()}

      {completedTest && (
        <div>
          <h2>Test Result</h2>
          <p>Score: {completedTest.score}</p>
          <p>Correct Answers: {completedTest.correctAnswers}</p>
          <p>Total Questions: {completedTest.totalQuestions}</p>
        </div>
      )}
    </div>
  );
}

export default Tests;
