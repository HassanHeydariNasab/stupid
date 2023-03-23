import { createContext } from "react";
import { Smart } from "@bluelibs/smart";
import { Service } from "@bluelibs/core";

interface IState {
  loading: boolean;
  results: any[];
  count: number;
}

interface IConfig {
  endpoint: string;
}

const CounterContext = createContext(null);

@Service()
export class CounterService extends Smart<IState, IConfig> {
  state: IState = {
    loading: true,
    results: [],
    count: 0,
  };

  async init() {}

  async destroy() {
    // Perform things such as cleanup when the component gets unmounted
    // This is very useful for subscriptions()
  }

  increment() {
    this.updateState({ count: this.state.count + 1 });
  }

  decrement() {
    this.updateState({ count: this.state.count - 1 });
  }

  isDebug = () => true;

  static getContext = () => CounterContext;
}
