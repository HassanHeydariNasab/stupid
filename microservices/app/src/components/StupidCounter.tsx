import { useContext } from "react";

import { StupidCounterContext } from "src/services/StupidCounterService";

export const StupidCounter = () => {
  const stupidCounter = useContext(StupidCounterContext);
  return (
    <div>
      <h2>stupid counter</h2>
      <div>{stupidCounter?.state.count}</div>
      <button onClick={() => stupidCounter?.methods.increment(1)}>+</button>
      <button onClick={() => stupidCounter?.methods.decrement(1)}>-</button>
    </div>
  );
};
