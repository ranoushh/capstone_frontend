import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleLanguageThunk } from "../redux/languages/languages.actions";

function SingleLanguage() {
  const { languageId } = useParams();
  const dispatch = useDispatch();
  const singleLanguage = useSelector((state) => state.languages.singleLanguage);

  useEffect(() => {
    dispatch(fetchSingleLanguageThunk(languageId));
  }, [dispatch, languageId]);

  return (
    <div>
      <h1 className="language-title">Language</h1>

      {singleLanguage ? (
        <div>
          <h2 className="Language-title">{singleLanguage.languageName}</h2>
          <p className="paragraph-img">Difficulty: {singleLanguage.difficulty}</p>
          <p className="paragraph-img">
            Description: {singleLanguage.description}
          </p>
          <p className="paragraph-img">Category: {singleLanguage.category}</p>
        </div>
      ) : (
        <p className="info-message">No language information currently</p>
      )}
    </div>
  );
}

export default SingleLanguage;
