import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import seo from "../../next-seo.config";
import "tailwindcss/tailwind.css";
import { useRouter } from "next/router";

function App({ Component, pageProps }) {
  const { route } = useRouter();

  const domain =
    process.env.NODE_ENV === "production"
      ? "https://alexrohleder.com"
      : "http://localhost:3000";

  const canonical = `${domain}${route === "/" ? "" : route}`;

  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <Head>
        <link rel="canonical" href={canonical} />
      </Head>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
