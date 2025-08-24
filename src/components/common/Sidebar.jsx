// src/components/common/Sidebar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  PlusCircle,
  ClipboardList,
  BookOpen,
  Users,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar({ role }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  // Teacher sidebar items
  const teacher = [
    { to: "/teacher", label: "Overview", icon: <Home size={18} /> },
    { to: "/teacher/create-class", label: "Create Class", icon: <PlusCircle size={18} /> },
    { to: "/teacher/attendance", label: "Attendance", icon: <ClipboardList size={18} /> },
    { to: "/teacher/quizzes", label: "Quizzes", icon: <BookOpen size={18} /> },
  ];

  // Student sidebar items
  const student = [
    { to: "/student", label: "Overview", icon: <Home size={18} /> },
    { to: "/student/classes", label: "My Classes", icon: <Users size={18} /> },
    { to: "/student/attendance", label: "Attendance Report", icon: <ClipboardList size={18} /> },
    { to: "/student/quizzes", label: "Quizzes", icon: <BookOpen size={18} /> },
  ];

  const items = role === "teacher" ? teacher : student;

  return (
    <>
      {/* ========== Mobile Toggle Button ========== */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-indigo-600 text-white shadow"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* ========== Desktop Sidebar ========== */}
      <aside className="hidden md:block border-r min-h-[calc(100vh-56px)] w-64 bg-white dark:bg-gray-900">
        <nav className="p-4 space-y-1">
          {items.map((i) => {
            const active = pathname === i.to;
            return (
              <Link
                key={i.to}
                to={i.to}
                className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-indigo-600 text-white shadow"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {i.icon}
                {i.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* ========== Mobile Sidebar Drawer ========== */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 border-r shadow-lg z-50 transform transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {role === "teacher" ? "Teacher Panel" : "Student Panel"}
          </h2>
          <button onClick={() => setOpen(false)} className="text-gray-600 dark:text-gray-300">
            <X size={22} />
          </button>
        </div>
        <nav className="p-4 space-y-1">
          {items.map((i) => {
            const active = pathname === i.to;
            return (
              <Link
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-indigo-600 text-white shadow"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {i.icon}
                {i.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
