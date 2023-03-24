import _Layout from "../components/_Layout";
import NextNprogress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import "../styles/globals.css";
import "../styles/app.css";
import "../styles/particles.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.location.href = "https://the-round-table.io/";
  }, []);

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
