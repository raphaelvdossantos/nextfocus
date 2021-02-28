import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContexts";
import styles from "../styles/components/LevelUpModal.module.css";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  const { levelUpModalContainer, overlay } = styles;
  return (
    <div className={overlay}>
      <div className={levelUpModalContainer}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level!</p>
        <button onClick={closeLevelUpModal} type="button">
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </div>
    </div>
  );
}
