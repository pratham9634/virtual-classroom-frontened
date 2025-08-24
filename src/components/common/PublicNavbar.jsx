// src/components/common/PublicNavbar.jsx
import { Link } from "react-router-dom";

export default function PublicNavbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur border-b">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          Virtual Classroom
        </a>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-200">
          <a href="#features" className="hover:text-indigo-600 dark:hover:text-indigo-400">Features</a>
          <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400">About</a>
          <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a>
        </nav>

        {/* Login Button */}
        <Link
          to="/login"
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow hover:shadow-lg transition"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
