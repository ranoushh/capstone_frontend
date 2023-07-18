import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleLanguageThunk } from "../redux/languages/languages.actions";
import ListingLessons from "../components/ListingLessons";
import { fetchAllLessonsThunk } from "../redux/lessons/lessons.actions";
import ListingQuizzes from "../components/ListingQuizzes";
import { fetchAllQuizzesThunk } from "../redux/quizzes/quizzes.actions";
import ListingTests from "../components/ListingTests";
import { fetchAllTestsThunk } from "../redux/tests/tests.actions";

function SingleLanguage() {
  const { languageId } = useParams();
  const dispatch = useDispatch();
  const singleLanguage = useSelector((state) => state.languages.singleLanguage);
  const lessons = useSelector((state) => state.lessons.allLessons);
  const quizzes = useSelector((state) => state.quizzes.allQuizzes);
  const tests = useSelector((state) => state.tests.allTests);

  useEffect(() => {
    dispatch(fetchSingleLanguageThunk(languageId));
    dispatch(fetchAllLessonsThunk());
    dispatch(fetchAllTestsThunk())
    dispatch(fetchAllQuizzesThunk());
  }, [dispatch, languageId]);

  return (
    <div>
      <h1 className="title">Language: {singleLanguage.languageName}</h1>

      {singleLanguage ? (
        <div>
          <h2>Lesson</h2>
          <ListingLessons list={lessons} languageId={singleLanguage.id} />
          <h2>Test</h2>
          <ListingTests list={tests} languageId={singleLanguage.id} />
          <h2>Quiz</h2>
          <ListingQuizzes list={quizzes} languageId={singleLanguage.id} />
        </div>
      ) : (
        <p className="info-message">No language information currently</p>
      )}
    </div>
  );
}

export default SingleLanguage;
