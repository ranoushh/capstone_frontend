import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAchievementsThunk } from "../redux/achievements/achievements.actions";
import axios from "axios";
import "../style/achievements.css";

function Achievements({ userId, points }) {
  const allAchievements = useSelector(
    (state) => state.achievements?.allAchievements
  );
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllAchievements();
  }, []);

  async function fetchAllAchievements() {
    try {
      await dispatch(fetchAllAchievementsThunk());
    } catch (error) {
      console.error("Error fetching achievements:", error);
    }
  }

  const [showCongrats, setShowCongrats] = useState(false);
  const [showUnlockedMessage, setShowUnlockedMessage] = useState(false);

  const handleUnlockAchievement = async (achievementId) => {
    try {
      const selectedAchievement = allAchievements.find(
        (achievement) => achievement.id === achievementId
      );

      if (selectedAchievement.isUnlocked) {
        setShowUnlockedMessage(true);
        return;
      }

      await axios.post(
        `http://localhost:8080/api/achievements/${userId}/unlock/${achievementId}`
      );

      await fetchAllAchievements();
      setShowCongrats(true);
    } catch (error) {
      console.error("Error unlocking achievement:", error);
    }
  };

  return (
    <div>
      <h1 className="achievement-title">Achievement</h1>
      <h2 className="achievement-user-info">Your points: {points} pts</h2>
      <div className="achievement-container">
        {allAchievements.map((achievement) => (
          <div key={achievement.id} className="achievement-card">
            <div className="achievement-image-container">
              <img
                src={achievement.imageURL}
                alt={`Achievement ${achievement.id}`}
                className="achievement-image"
              />
            </div>
            <div className="achievement-name">
              {achievement.achievementName}
            </div>
            <div className="achievement-criteria">
              {achievement.criteria}
            </div>
            <div className="achievement-points">
              Points Requirement: <h2>{achievement.pointsRequirement}</h2>
            </div>
            {achievement.isUnlocked ? (
              <p style={{ color: "#0fab3e" }}>Achievement already unlocked</p>
            ) : points >= achievement.pointsRequirement ? (
              <button
                className="unlock-button"
                onClick={() => handleUnlockAchievement(achievement.id)}
              >
                Unlock Achievement
              </button>
            ) : (
              <p style={{ color: "#d60924" }}>
                Not enough points to unlock this achievement
              </p>
            )}
          </div>
        ))}
      </div>
      {showCongrats && (
        <div className="congrats-popup">
          <h3>Congratulations!</h3>
          <p>You've unlocked an achievement!</p>
          <button onClick={() => setShowCongrats(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Achievements;
