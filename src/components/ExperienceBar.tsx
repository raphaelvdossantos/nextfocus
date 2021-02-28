import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContexts";
import styles from "../styles/components/ExperienceBar.module.css";

export function ExperienceBar() {
  const { currentXP, experienceToNextLevel } = useContext(ChallengesContext);
  const experienceProgress =
    Math.round(currentXP * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${experienceProgress}%` }}>
          <span
            className={styles.currentExperience}
            style={{ left: `${experienceProgress}%` }}
          >
            {currentXP} xp
          </span>
        </div>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
