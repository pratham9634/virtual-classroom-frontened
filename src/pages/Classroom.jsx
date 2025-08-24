// src/pages/Classroom.jsx
import { useParams } from "react-router-dom";
import ChatBox from "../components/chat/ChatBox";
import Navbar from "../components/common/Navbar";

export default function Classroom() {
  const { subject } = useParams();

  return (
    <div className="flex flex-col min-h-screen">
      {/* ===== Navbar ===== */}
      <Navbar />

      {/* ===== Main Classroom Layout ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Main class content */}
        <div className="md:col-span-2 flex flex-col rounded-xl bg-white dark:bg-gray-800 shadow-lg">
          {/* Header */}
          <div className="p-4 border-b dark:border-gray-700">
            <h2 className="text-xl font-bold capitalize">
              {subject} Class
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Teacher: John Doe
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-4/5 aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400">
              🎥 Video Stream Placeholder
            </div>
          </div>
        </div>

        {/* Chat section */}
        <div className="flex flex-col h-full rounded-xl bg-white dark:bg-gray-800 shadow-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Class Chat</h2>
          <ChatBox />
        </div>
      </div>
    </div>
  );
}
