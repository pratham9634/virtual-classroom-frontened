// src/pages/student/AttendanceReport.jsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function AttendanceReport() {
  const data = [
    { month: "Jan", attendance: 80 },
    { month: "Feb", attendance: 90 },
    { month: "Mar", attendance: 70 },
    { month: "Apr", attendance: 95 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Attendance Report</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month"/>
          <YAxis/>
          <Tooltip/>
          <Bar dataKey="attendance" fill="#4F46E5"/>
        </BarChart>
      </ResponsiveContainer>
      <p className="mt-4">Average: {Math.round(data.reduce((a,c)=>a+c.attendance,0)/data.length)}%</p>
    </div>
  );
}
