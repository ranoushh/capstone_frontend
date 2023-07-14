import React, { useEffect } from "react";
// import Navigation from "../components/Navigation";
import ListingQuizzes from "../components/ListingQuizzes";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllQuizzesThunk } from "../redux/quizzes/quizzes.actions";

function Quizzes() {
  const allQuizzes = useSelector((state) => state.quizzes.allQuizzes);
  const dispatch = useDispatch();

  function fetchAllQuizzes() {
    console.log("RUNNING DISPATCH FROM FETCHALLQUIZZES");
    return dispatch(fetchAllQuizzesThunk());
  }

    useEffect(() => {
      console.log("FETCH ALL QUIZZES FIRING IN USEEFFECT");
      fetchAllQuizzes();
    }, []);

  return (
    <div>
      {/* <Navigation /> */}
      <ListingQuizzes list={allQuizzes} />
    </div>
  );
}

export default Quizzes;
