import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAchievementsThunk } from "../redux/achievements/achievements.actions";

function Achievements() {
  const allAchievements = useSelector((state) => state.achievements.allAchievements);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("FETCH ALL Achievements FIRING IN USEEFFECT");
    fetchAllAchievements();
  }, []);

  function fetchAllAchievements() {
    console.log("RUNNING DISPATCH FROM FETCHALLAchievements");
    return dispatch(fetchAllAchievementsThunk());
  };

  return (
    <div>
       <h1>Achievements </h1>
       <ul>
        {allAchievements.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Achievements;
