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
import { NavigationBar } from "../components/NavigationBar";
import { useSession } from "next-auth/client";
import Login from "../components/login";

interface IHomeProps {
  level: number;
  currentXP: number;
  completedChallenges: number;
}

export default function Home(props: IHomeProps) {
  const { level, currentXP, completedChallenges } = props;
  const [session] = useSession();

  return (
    <ChallengesProvider
      level={level}
      currentXP={currentXP}
      completedChallenges={completedChallenges}
    >
      <Head>
        <title> Início | FocusDungeon </title>
      </Head>
      <ThemeController />
      <NavigationBar />
      {session ? (
        <div className={styles.container}>
          <ExperienceBar />

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
      ) : (
        <Login />
      )}
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
