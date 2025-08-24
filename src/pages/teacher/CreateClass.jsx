// src/pages/teacher/CreateClass.jsx
import { useState } from "react";
import { useClassStore } from "../../store/classStore";
import { Link } from "react-router-dom";

export default function CreateClass() {
  const [name, setName] = useState("");
  const { classes, createClass } = useClassStore();

  const handleCreate = (e) => {
    e.preventDefault();
    if (!name) return;
    createClass(name);
    setName("");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Create a Class</h2>

      <form onSubmit={handleCreate} className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Enter Subject Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded-lg
            text-gray-900 dark:text-gray-100
            placeholder-gray-400 dark:placeholder-gray-500
            bg-white dark:bg-gray-900
            focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Create Class
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Your Classes</h3>
        <ul className="space-y-3">
          {classes.map((cls) => (
            <li
              key={cls.id}
              className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
            >
              <span>{cls.name}</span>
              <Link
                to={`/classroom/${cls.name.toLowerCase()}`}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Join
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

