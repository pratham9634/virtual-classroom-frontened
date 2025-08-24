import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import App from "./App";
import { useThemeStore } from "./store/themeStore";

export default function Root() {
  const dark = useThemeStore((s) => s.dark);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <BrowserRouter>
      <App />
      <Toaster position="top-right" />
    </BrowserRouter>
  );
}
