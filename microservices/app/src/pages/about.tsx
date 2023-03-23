import type { NextPage } from "next";
import Link from "next/link";

import { SmartCounter } from "src/components/SmartCounter";
import { StupidCounter } from "src/components/StupidCounter";

import styles from "../styles/Home.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>About</h1>
      <Link href="/">home</Link>
      <SmartCounter />
      <StupidCounter />
    </div>
  );
};

export default About;
