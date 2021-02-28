import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from "next/head";
import { GetServerSideProps } from "next";

import styles from "../styles/pages/Home.module.css";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountDownProvider } from "../contexts/CountDownContexts";
import { ThemeController } from "../components/ThemeController";
import { ChallengesProvider } from "../contexts/ChallengesContexts";

interface IHomeProps {
  level: number;
  currentXP: number;
  completedChallenges: number;
}

export default function Home(props: IHomeProps) {
  const { level, currentXP, completedChallenges } = props;

  return (
    <ChallengesProvider
      level={level}
      currentXP={currentXP}
      completedChallenges={completedChallenges}
    >
      <div className={styles.container}>
        <Head>
          <title> Início | FocusDungeon </title>
        </Head>
        <ExperienceBar />
        <ThemeController />
        <CountDownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentXP, completedChallenges } = context.req.cookies;

  return {
    props: {
      level: Number(level),
      currentXP: Number(currentXP),
      completedChallenges: Number(completedChallenges),
    },
  };
};
