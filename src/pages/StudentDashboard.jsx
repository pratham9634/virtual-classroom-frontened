// src/pages/StudentDashboard.jsx
import StatsCard from "../components/dashboard/StatsCard";

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="My Classes" value="5" />
        <StatsCard title="Attendance %" value="92%" />
        <StatsCard title="Quizzes Completed" value="12" />
      </div>
      <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">Upcoming Classes</h2>
        <ul className="space-y-2">
          <li className="p-2 border rounded-lg dark:border-gray-700">
            📅 Math - Tomorrow 10 AM
          </li>
          <li className="p-2 border rounded-lg dark:border-gray-700">
            📅 Science - Fri 2 PM
          </li>
        </ul>
      </div>
    </div>
  );
}
