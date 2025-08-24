// src/components/common/DarkModeToggle.jsx
import { useThemeStore } from "../../store/themeStore";

export default function DarkModeToggle() {
  const { dark, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 dark:text-white"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
