import { useContext } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { useSmart } from "@bluelibs/smart";

import { CounterService } from "src/services/CounterService";
import { StupidCounterContext } from "src/services/StupidCounterService";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const counter = useSmart(CounterService);
  const stupidCounter = useContext(StupidCounterContext);

  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <Link href="/about">about</Link>

      <h2>smart counter</h2>
      <div>{counter.state.count}</div>
      <button onClick={() => counter.increment()}>+</button>
      <button onClick={() => counter.decrement()}>-</button>

      <h2>stupid counter</h2>
      <div>{stupidCounter?.state.count}</div>
      <button onClick={() => stupidCounter?.methods.increment()}>+</button>
      <button onClick={() => stupidCounter?.methods.decrement()}>-</button>
    </div>
  );
};

export default Home;
