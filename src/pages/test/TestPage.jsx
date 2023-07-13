import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTests } from "../Redux/Tests/Tests.actions";
import TestList from "../TestList";
import Test from "../Test";

function TestPage() {
  const dispatch = useDispatch();
  const [selectedTest, setSelectedTest] = useState(null);
  const [completedTest, setCompletedTest] = useState(null);
  const tests = useSelector((state) => state.tests);

  useEffect(() => {
    dispatch(fetchTests());
  }, [dispatch]);

  const handleTestSelect = (test) => {
    setSelectedTest(test);
  };

  const handleTestComplete = (result) => {
    setCompletedTest(result);
  };

  const renderTest = () => {
  if (!selectedTest && !completedTest) {
    return <TestList tests={tests} onTestSelect={handleTestSelect} />;
  } else if (selectedTest && !completedTest) {
    return <Test Test={selectedTest} onComplete={handleTestComplete} />;
  } else if (!selectedTest && completedTest) {
    return <TestResult result={completedTest} />;
  } else {
    return null;
  }
  };

  return (
    <div>
      <h1>Test Page</h1>
      {renderTest()}

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

export default TestPage;
