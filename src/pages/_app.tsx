import { ThemeProvider } from "next-themes";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div
        id="page"
        className="dark:bg-gray-900 text-gray-900 dark:text-gray-300"
      >
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
