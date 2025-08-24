import { LogOut, Moon, Sun } from "lucide-react";
import { useThemeStore } from "../../store/themeStore";
import { useUserStore } from "../../store/userStore";

export default function Navbar() {
  const { dark, toggle } = useThemeStore();
  const logout = useUserStore((s) => s.logout);

  return (
    <header className="sticky top-0 z-30 border-b 
  bg-gradient-to-r from-indigo-50 to-purple-50 
  dark:from-gray-900 dark:to-gray-800 
  backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <a href="/" className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Virtual Classroom
        </a>
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
  aria-label="Toggle theme"
  onClick={toggle}
  className="p-2 rounded-lg border bg-white/70 
             hover:bg-indigo-100 dark:bg-gray-800 dark:hover:bg-gray-700
             transition-colors"
>
  {dark ? <Moon size={18} /> : <Sun size={18} />}
</button>

<button
  onClick={logout}
  className="p-2 rounded-lg border bg-white/70 
             hover:bg-red-100 dark:bg-gray-800 dark:hover:bg-red-600
             transition-colors"
  aria-label="Logout"
>
  <LogOut size={18} />
</button>

        </div>
      </div>
    </header>
  );
}
