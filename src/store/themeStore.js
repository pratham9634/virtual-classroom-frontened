// src/store/themeStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set) => ({
      dark: false,
      toggle: () =>
        set((state) => {
          const newTheme = !state.dark;

          // Apply/remove dark mode on <html>
          if (newTheme) {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }

          return { dark: newTheme };
        }),
    }),
    { name: "theme-storage" }
  )
);
