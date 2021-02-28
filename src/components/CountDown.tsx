import { useContext } from "react";
import { CountDownContext } from "../contexts/CountDownContexts";
import styles from "../styles/components/CountDown.module.css";

let countDownTimeout: NodeJS.Timeout;

export function CountDown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountDown,
    stopAndResetpCountDown,
  } = useContext(CountDownContext);

  const { countDownContainer, countDownButton, countDownButtonActive } = styles;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={countDownButton}>
          Ciclo encerrado
        </button>
      ) : isActive ? (
        <button
          onClick={stopAndResetpCountDown}
          className={`${countDownButton}  ${countDownButtonActive}`}
        >
          Abandonar ciclo
        </button>
      ) : (
        <button onClick={startCountDown} className={countDownButton}>
          Iniciar um ciclo
        </button>
      )}
    </div>
  );
}
