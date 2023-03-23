import type { FC, PropsWithChildren } from "react";
import type { AppProps } from "next/app";
import { XUIProvider } from "@bluelibs/x-ui-react-bundle";
import { newSmart } from "@bluelibs/smart";

import { kernel } from "../startup/kernel";
import { CounterService } from "src/services/CounterService";
import { StupidCounterContextProvider } from "src/services/StupidCounterService";

import "../styles/globals.css";

const Providers: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [, CounterContextProvider] = newSmart(CounterService);
  return (
    <CounterContextProvider>
      <StupidCounterContextProvider>{children}</StupidCounterContextProvider>
    </CounterContextProvider>
  );
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <XUIProvider kernel={kernel}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </XUIProvider>
  );
};

export default App;
