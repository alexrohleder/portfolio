import Head from "next/head";
import { DefaultSeo } from "next-seo";
import seo from "../next-seo.config";
import "tailwindcss/tailwind.css";

function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...seo} />
      <Head>
        <style>{`html{overflow-y:scroll}`}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
