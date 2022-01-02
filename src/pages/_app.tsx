import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import seo from "../../next-seo.config";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
