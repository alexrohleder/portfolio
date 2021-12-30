import { useTheme as useNextTheme } from "next-themes";
import { useEffect } from "react";

function useTheme() {
  const { theme, setTheme } = useNextTheme();

  // This effect makes sure to remove dark theme when printing the page.
  // We also add a div in front of the content when switching themes to avoid
  // content blinking in the background while printing from a dark theme.
  useEffect(() => {
    const blanket = document.createElement("div");
    blanket.classList.add("print:hidden");
    blanket.style.position = "fixed";
    blanket.style.top = "0";
    blanket.style.right = "0";
    blanket.style.bottom = "0";
    blanket.style.left = "0";

    const onBeforePrint = () => {
      blanket.style.backgroundColor =
        theme === "dark"
          ? window.getComputedStyle(document.body).backgroundColor
          : "transparent";

      document.body.appendChild(blanket);
      document.documentElement.classList.remove("dark");
    };

    const onAfterPrint = () => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      }

      document.body.removeChild(blanket);
    };

    window.addEventListener("beforeprint", onBeforePrint);
    window.addEventListener("afterprint", onAfterPrint);

    return () => {
      window.removeEventListener("beforeprint", onBeforePrint);
      window.removeEventListener("afterprint", onAfterPrint);
    };
  }, [theme]);

  return {
    theme,
    toggleTheme() {
      setTheme(theme === "light" ? "dark" : "light");
    },
  };
}

export default useTheme;
