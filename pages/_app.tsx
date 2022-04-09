import "../styles/main.css";
import type { AppProps } from "next/app";
import { StoreProvider } from "easy-peasy";
import { store } from "../store";
import "../firebase";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
