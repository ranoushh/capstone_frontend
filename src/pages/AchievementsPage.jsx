import React from 'react'
import { useSelector } from "react-redux";
import Achievements from '../components/Achievements'

const AchievementsPage = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <Achievements userId={user.id} points={user.points} />
    </div>
  );
}

export default AchievementsPage;
