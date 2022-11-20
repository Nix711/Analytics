import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createStore, applyMiddleware, compose, Store } from "redux";
import thunk from "redux-thunk";
import { MakeStore, createWrapper } from "next-redux-wrapper";
import { State } from "../app/appState/types";
import reducers from "../app/appState/reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const enhancer = compose(applyMiddleware(thunk));

const makeStore: MakeStore<Store<State, any>> = (): any => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return createStore(reducers, enhancer);
  }

  // eslint-disable-next-line global-require
  const { persistStore, persistReducer } = require("redux-persist");
  // eslint-disable-next-line global-require
  const storage = require("redux-persist/lib/storage").default;

  const persistConfig = {
    key: "nextjs",
    storage,
    blacklist: ["loadingIds", "users", "padiglione"],
  };

  const persistedReducer = persistReducer(persistConfig, reducers);
  const store = createStore(persistedReducer, enhancer);

  // @ts-ignore
  store.__persistor = persistStore(store); // Nasty hack

  return store;
};

export const wrapper = createWrapper<Store<State, any>>(makeStore);

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
