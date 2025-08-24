// src/pages/TeacherDashboard.jsx
import { Link } from "react-router-dom";
import StatsCard from "../components/dashboard/StatsCard";

export default function TeacherDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="Total Classes" value="8" />
        <StatsCard title="Students" value="150" />
        <StatsCard title="Quizzes Created" value="20" />
      </div>

      <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow space-y-3">
        <h2 className="text-xl font-semibold">Quick Actions</h2>
        <div className="flex gap-4">
          <Link
            to="/teacher/create-class"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            ➕ Create Class
          </Link>
          <Link
            to="/teacher/attendance"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            📋 Attendance
          </Link>
          <Link
            to="/teacher/quizzes"
            className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
          >
            📝 Quizzes
          </Link>
        </div>
      </div>
    </div>
  );
}
