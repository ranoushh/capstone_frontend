import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleLanguageThunk } from "../redux/languages/languages.actions";
import ListingLessons from "../components/ListingLessons";
import { fetchAllLessonsThunk } from "../redux/lessons/lessons.actions";
import ListingQuizzes from "../components/ListingQuizzes";
import { fetchAllQuizzesThunk } from "../redux/quizzes/quizzes.actions";

function SingleLanguage() {
  const { languageId } = useParams();
  const dispatch = useDispatch();
  const singleLanguage = useSelector((state) => state.languages.singleLanguage);
  const lessons = useSelector((state) => state.lessons.allLessons);
   const quizzes = useSelector((state) => state.quizzes.allQuizzes);

  useEffect(() => {
    dispatch(fetchSingleLanguageThunk(languageId));
    dispatch(fetchAllLessonsThunk());
    dispatch(fetchAllQuizzesThunk());
  }, [dispatch, languageId]);

  return (
    <div>
      <h1 className="language-title">Language</h1>

      {singleLanguage ? (
        <div>
          <h2 className="Language-title">{singleLanguage.languageName}</h2>
          <p className="paragraph-img">
            Difficulty: {singleLanguage.difficulty}
          </p>
          <p className="paragraph-img">
            Description: {singleLanguage.description}
          </p>
          <p className="paragraph-img">Category: {singleLanguage.category}</p>
          <h2>Lesson</h2>
          <ListingLessons list={lessons} languageId={singleLanguage.id} />
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
