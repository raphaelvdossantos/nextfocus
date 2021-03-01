import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChallengesContext } from "./ChallengesContexts";

interface ICountDownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountDown: () => void;
  stopAndResetpCountDown: () => void;
}

export const CountDownContext = createContext({} as ICountDownContextData);

interface ICountDownProviderProps {
  children: ReactNode;
}

export function CountDownProvider({ children }: ICountDownProviderProps) {
  let countDownTimeout: NodeJS.Timeout;

  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountDown() {
    setIsActive(true);
  }

  function stopAndResetpCountDown() {
    clearTimeout(countDownTimeout);
    setIsActive(false);
    setTime(25 * 60);
    setHasFinished(false);
  }

  useEffect(() => {
    if (isActive) {
      if (time > 0) {
        countDownTimeout = setTimeout(() => {
          setTime(time - 1);
        }, 1000);
      } else if (time === 0) {
        setHasFinished(true);
        setIsActive(false);
        startNewChallenge();
      }
    }
  }, [isActive, time]);

  return (
    <CountDownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountDown,
        stopAndResetpCountDown,
      }}
    >
      {children}
    </CountDownContext.Provider>
  );
}
