import axios from "axios";
import LanguagesActionType from "./languages.types";

// Fetching all languages
export const fetchAllLanguages = (payload) => {
  console.log("FETCH ALL LANGUAGES ACTION");
  return {
    type: LanguagesActionType.FETCH_ALL_LANGUAGES,
    payload: payload,
  };
};

export const fetchAllLanguagesThunk = () => {
  return async (dispatch) => {
    try {
      console.log("FETCH_ALL_LANGUAGES_THUNK is firing");
      const response = await axios.get("http://localhost:8080/api/languages");
      console.log("FETCH_ALL_LANGUAGES_THUNK completed");
      dispatch(fetchAllLanguages(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

// Fetching a single language
export const fetchSingleLanguage = (payload) => {
  console.log("FETCH SINGLE LANGUAGE ACTION");
  return {
    type: LanguagesActionType.FETCH_SINGLE_LANGUAGE,
    payload: payload,
  };
};

export const fetchSingleLanguageThunk = (id) => {
  return async (dispatch) => {
    try {
      console.log("FETCH_SINGLE_LANGUAGE_THUNK is firing");
      const response = await axios.get(
        `http://localhost:8080/api/languages/${id}`
      );
      console.log("FETCH_SINGLE_LANGUAGE_THUNK completed");
      dispatch(fetchSingleLanguage(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
