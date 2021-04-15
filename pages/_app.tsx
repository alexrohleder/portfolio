import { DefaultSeo } from "next-seo";
import "tailwindcss/tailwind.css";

function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Alex Rohleder - Software Developer - Contractor"
        description="Software engineer with 5+ years of experience. Specialized in front-end and with a foot in every step of the development pipeline. Open for contractor jobs."
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
