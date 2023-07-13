import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import ListingLessons from "../components/ListingLessons";
import {useSelector } from "react-redux";

function Lessons() {
  const allLessons = useSelector((state) => state.campuses.allCampuses);
  useEffect(() => {
    console.log("FETCH ALL LESSONS FIRING IN USEEFFECT");
    fetchAllLessons();
  }, []);

  function fetchAllLessons() {
    console.log("RUNNING DISPATCH FROM FETCHALLCAMPUSES");
    return dispatch(fetchAllLessonsThunk());
  }

  return (
    <div>
      <Navigation />
      <ListingLessons list={allLessons} />
    </div>
  );
}

export default Lessons;
