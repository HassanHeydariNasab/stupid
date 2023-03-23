import { createContext, useCallback, useState } from "react";
import { createStupidProvider, IContextValue } from "src/libs/stupid";

interface IState {
  loading: boolean;
  results: any[];
  count: number;
}
const initialState: IState = { count: 0, loading: false, results: [] };

export const StupidCounterContext = createContext<IContextValue<IState> | null>(
  null
);

export const useStupidCounter = () => {
  const [state, setState] = useState<IState>(initialState);

  const increment = useCallback(() => {
    setState((state) => ({ ...state, count: state.count + 1 }));
  }, [setState]);

  const decrement = useCallback(() => {
    setState((state) => ({ ...state, count: state.count - 1 }));
  }, [setState]);

  const methods = { increment, decrement };
  return { state, setState, methods };
};

export const StupidCounterContextProvider = createStupidProvider(
  StupidCounterContext,
  useStupidCounter
);
