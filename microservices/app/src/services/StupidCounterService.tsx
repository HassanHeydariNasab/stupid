import { createContext, useCallback, useState } from "react";
import { createStupidProvider } from "src/libs/stupid";

interface IState {
  loading: boolean;
  results: any[];
  count: number;
}
const initialState: IState = { count: 0, loading: false, results: [] };

export const StupidCounterContext = createContext<ReturnType<
  typeof useStupidCounter
> | null>(null);

export const useStupidCounter = () => {
  const [state, setState] = useState<IState>(initialState);

  const increment = useCallback(
    (step: number) => {
      setState((state) => ({ ...state, count: state.count + step }));
    },
    [setState]
  );

  const decrement = useCallback(
    (step: number) => {
      setState((state) => ({ ...state, count: state.count - step }));
    },
    [setState]
  );

  const methods = { increment, decrement };
  return { state, setState, methods };
};

export const StupidCounterContextProvider = createStupidProvider(
  StupidCounterContext,
  useStupidCounter
);
