import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import seo from "../../next-seo.config";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div
        id="page"
        className="dark:bg-gray-900 text-gray-900 dark:text-gray-300"
      >
        <DefaultSeo {...seo} />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
