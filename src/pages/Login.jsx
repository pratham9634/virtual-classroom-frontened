// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import Navbar from "../components/common/Navbar";

export default function Login() {
  const [role, setRole] = useState("student");
  const login = useUserStore((s) => s.login);
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ name: "Demo User", role });
    navigate(role === "teacher" ? "/teacher" : "/student");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar page="login" />
      
      <div className="flex items-center justify-center min-h-screen px-6">
        <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 space-y-4">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          {/* Role selection */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>

          {/* Login button */}
          <button
            onClick={handleLogin}
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Continue as {role}
          </button>
        </div>
      </div>
    </div>
  );
}
