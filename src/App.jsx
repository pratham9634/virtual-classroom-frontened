import { Routes, Route, Navigate } from "react-router-dom";
import { useUserStore } from "./store/userStore";
import { useThemeStore } from "./store/themeStore";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import Classroom from "./pages/Classroom";


import CreateClass from "./pages/teacher/CreateClass";
import TAttendance from "./pages/teacher/Attendance";
import TQuizzes from "./pages/teacher/Quizzes";


import MyClasses from "./pages/student/JoinClass";
import SAttendance from "./pages/student/AttendanceReport";
import SQuizzes from "./pages/student/Quizzes";


import AppLayout from "./layouts/AppLayout";


export default function App() {
const user = useUserStore((s) => s.user);
const dark = useThemeStore((s) => s.dark);


return (
<div className={dark ? "dark" : ""}>
<div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
<Routes>
<Route path="/" element={<Landing />} />
<Route path="/login" element={<Login />} />


{/* Teacher routes */}
<Route
path="/teacher"
element={user?.role === "teacher" ? <AppLayout role="teacher" /> : <Navigate to="/login" />}
>
<Route index element={<TeacherDashboard />} />
<Route path="create-class" element={<CreateClass />} />
<Route path="attendance" element={<TAttendance />} />
<Route path="quizzes" element={<TQuizzes />} />
</Route>


{/* Student routes */}
<Route
path="/student"
element={user?.role === "student" ? <AppLayout role="student" /> : <Navigate to="/login" />}
>
<Route index element={<StudentDashboard />} />
<Route path="classes" element={<MyClasses />} />
<Route path="attendance" element={<SAttendance />} />
<Route path="quizzes" element={<SQuizzes />} />
</Route>


<Route path="/classroom/:id" element={user ? <Classroom /> : <Navigate to="/login" />} />


<Route path="*" element={<Navigate to="/" />} />
</Routes>
</div>
</div>
);
}