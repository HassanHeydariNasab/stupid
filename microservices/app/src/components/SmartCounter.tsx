import { useSmart } from "@bluelibs/smart";

import { CounterService } from "src/services/CounterService";

export const SmartCounter = () => {
  const counter = useSmart(CounterService);
  return (
    <div>
      <h2>smart counter</h2>
      <div>{counter.state.count}</div>
      <button onClick={() => counter.increment(1)}>+</button>
      <button onClick={() => counter.decrement(1)}>-</button>
    </div>
  );
};
