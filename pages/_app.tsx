import { DefaultSeo } from "next-seo";
import "tailwindcss/tailwind.css";

function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Alex Rohleder - Software Developer - Contractor"
        twitter={{
          handle: "@alexrohleder",
          site: "@alexrohleder",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
