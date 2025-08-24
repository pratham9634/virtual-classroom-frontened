import { useState } from "react";

export default function Attendance() {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice Johnson", present: false },
    { id: 2, name: "Bob Smith", present: false },
    { id: 3, name: "Charlie Brown", present: false },
  ]);

  const toggleAttendance = (id) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, present: !s.present } : s
      )
    );
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Attendance
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <ul className="space-y-3">
          {students.map((student) => (
            <li
              key={student.id}
              className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
            >
              <span className="text-gray-900 dark:text-white font-medium">
                {student.name}
              </span>
              <button
                onClick={() => toggleAttendance(student.id)}
                className={`px-4 py-1 rounded-lg text-sm font-medium transition ${
                  student.present
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-red-600 text-white hover:bg-red-700"
                }`}
              >
                {student.present ? "Present" : "Absent"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
