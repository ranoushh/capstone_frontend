import React, { useEffect } from "react";
// import Navigation from "../components/Navigation";
import ListingLanguages from "../components/ListingLanguages";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllLanguagesThunk } from "../redux/languages/languages.actions";

function Languages() {
  const allLanguages = useSelector((state) => state.languages.allLanguages);
  const dispatch = useDispatch();

  console.log((useSelector(state => state)));
  
  useEffect(() => {
    console.log("FETCH ALL LESSONS FIRING IN USEEFFECT");
    fetchAllLanguages();
  }, []);

  function fetchAllLanguages() {
    console.log("RUNNING DISPATCH FROM FETCHALLLANGUAGES");
    return dispatch(fetchAllLanguagesThunk());
  }

  

  return (
    <div>
      {/* <Navigation /> */}
      <h1 className="title">Languages</h1>
      <ListingLanguages list={allLanguages} />
    </div>
  );
}

export default Languages;
