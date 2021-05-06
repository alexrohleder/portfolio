import { DefaultSeo } from "next-seo";
import seo from '../next-seo.config';
import "tailwindcss/tailwind.css";

function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
