import _Layout from "../components/_Layout";
import NextNprogress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import "../styles/app.css";
import "../styles/particles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <_Layout>
      <Toaster position="bottom-right" reverseOrder={false} />
      <NextNprogress
        color="#bd8d4c"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        options={{ showSpinner: false }}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </_Layout>
  );
}

export default MyApp;
