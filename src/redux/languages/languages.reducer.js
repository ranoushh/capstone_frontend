import LanguagesActionType from "./languages.types";

export const INITIAL_LANGUAGES_STATE = {
  allLanguages: [],
  singleLanguage: {},
};

const languageReducer = (
  state = INITIAL_LANGUAGES_STATE,
  { type, payload }
) => {
  console.log("LANGUAGEREDUCER IS HANDLING FETCH ALL LANGUAGES ACTION");
  switch (type) {
    case LanguagesActionType.FETCH_ALL_LANGUAGES:
      return { ...state, allLanguages: payload };
    case LanguagesActionType.FETCH_SINGLE_LANGUAGE:
      return { ...state, singleLanguage: payload };
    default:
      return state;
  }
};

export default languageReducer;
