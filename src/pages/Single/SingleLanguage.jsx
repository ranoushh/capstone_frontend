import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleLanguageThunk } from "../../redux/languages/languages.actions";
import ListingLessons from "../../components/Listing/ListingLessons";
import { fetchAllLessonsThunk } from "../../redux/lessons/lessons.actions";
import ListingQuizzes from "../../components/Listing/ListingQuizzes";
import { fetchAllQuizzesThunk } from "../../redux/quizzes/quizzes.actions";
import ListingTests from "../../components/Listing/ListingTests";
import { fetchAllTestsThunk } from "../../redux/tests/tests.actions";

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
    dispatch(fetchAllTestsThunk());
    dispatch(fetchAllQuizzesThunk());
  }, [dispatch, languageId]);

   const user = useSelector((state) => state.user);
   const isAdmin = user.username === "admin"; 

  return (
    <div className="language-container">
      <h1 className="title">Let's learn {singleLanguage.languageName}!</h1>

      {singleLanguage ? (
        <div>
          <h2 className="subheading">Lesson</h2>
          {isAdmin && (
            <Link to={`/language/${languageId}/lesson/add`}>
              <button class="add-btn">Add Lesson</button>
            </Link>
          )}
          <ListingLessons list={lessons} languageId={singleLanguage.id} />
          <h2 className="subheading">Test</h2>
          {isAdmin && (
            <Link to={`/language/${languageId}/test/add`}>
              <button class="add-btn">Add Test</button>
            </Link>
          )}
          <ListingTests list={tests} languageId={singleLanguage.id} />
          <h2 className="subheading">Quiz</h2>
          {isAdmin && (
            <Link to={`/language/${languageId}/quiz/add`}>
              <button class="add-btn">Add Quiz</button>
            </Link>
          )}
          <ListingQuizzes list={quizzes} languageId={singleLanguage.id} />
        </div>
      ) : (
        <p className="info-message">No language information currently</p>
      )}
    </div>
  );
}

export default SingleLanguage;
