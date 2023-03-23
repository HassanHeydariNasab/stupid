import type {
  Context,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
} from "react";

export interface IContextValue<T> {
  state: T;
  setState: Dispatch<SetStateAction<T>>;
  methods: Record<string, Function>;
}

export const createStupidProvider = (
  context: Context<any>,
  useValue: () => IContextValue<any>
) => {
  const StupidProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    const value = useValue();
    return <context.Provider value={value}>{children}</context.Provider>;
  };
  return StupidProvider;
};
