// src/pages/student/JoinClass.jsx
import { Link } from "react-router-dom";

export default function JoinClass() {
  const dummyClasses = ["Maths", "Science", "English"];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Available Classes</h2>
      <ul className="space-y-3">
        {dummyClasses.map((cls, i) => (
          <li
            key={i}
            className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
          >
            <span>{cls}</span>
            <Link
              to={`/classroom/${cls.toLowerCase()}`}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Join
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
