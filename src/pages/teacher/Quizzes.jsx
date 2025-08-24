import { useState } from "react";

export default function Quizzes() {
  const [quizzes, setQuizzes] = useState([]);
  const [form, setForm] = useState({ title: "", date: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title) {
      setQuizzes([...quizzes, { ...form, id: Date.now() }]);
      setForm({ title: "", date: "" });
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Manage Quizzes
      </h1>

      {/* Quiz Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Quiz Title
          </label>
          <input
            className="border border-gray-300 dark:border-gray-600 p-2 w-full rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Date
          </label>
          <input
            type="date"
            className="border border-gray-300 dark:border-gray-600 p-2 w-full rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
        </div>
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white w-full py-2 rounded-lg font-medium transition"
          type="submit"
        >
          Create Quiz
        </button>
      </form>

      {/* Quiz List */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Upcoming Quizzes
        </h2>
        <ul className="mt-4 space-y-3">
          {quizzes.map((q) => (
            <li
              key={q.id}
              className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow flex flex-col"
            >
              <p className="text-gray-900 dark:text-white font-medium">
                {q.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Scheduled: {q.date || "TBD"}
              </p>
            </li>
          ))}
          {quizzes.length === 0 && (
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              No quizzes created yet.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}
