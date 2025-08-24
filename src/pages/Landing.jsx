// src/pages/Landing.jsx
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
import PublicNavbar from "../components/common/PublicNavbar";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100">
      
<PublicNavbar />

      {/* ========== Hero Section ========== */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          Welcome to Virtual Classroom
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg max-w-2xl mb-10 text-gray-600 dark:text-gray-300"
        >
          A modern learning platform that connects teachers and students with 
          interactive tools, real-time chat, and easy class management.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-3 rounded-xl font-semibold 
              bg-gradient-to-r from-indigo-500 to-purple-600 
              text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition"
          >
            Get Started
          </button>

          <button
            onClick={() => navigate("/login")}
            className="px-8 py-3 rounded-xl font-semibold 
              bg-white/70 dark:bg-gray-700/70 text-gray-700 dark:text-gray-200 
              border hover:bg-indigo-50 dark:hover:bg-gray-600 transition"
          >
            Continue as Guest
          </button>
        </motion.div>
      </section>

      {/* ========== Features Section ========== */}
      <section className="min-h-screen flex flex-col justify-center items-center px-8 py-20 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Why Choose Virtual Classroom?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
          {[
            { title: "📚 Courses", desc: "Enroll in classes, track progress, and join live sessions easily." },
            { title: "💬 Real-time Chat", desc: "Instant messaging for better communication between students & teachers." },
            { title: "📊 Dashboards", desc: "Smart analytics to monitor performance, attendance, and quizzes." },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-8 rounded-3xl bg-white/70 dark:bg-gray-800/70 
                shadow-xl backdrop-blur-xl border hover:scale-105 transform transition"
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== CTA Section ========== */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold mb-6"
        >
          Ready to start your journey?
        </motion.h2>

        <p className="max-w-xl mb-8 text-gray-700 dark:text-gray-300">
          Whether you are a student looking for better learning or a teacher who wants 
          easy class management, Virtual Classroom is built for you.
        </p>

        <button
          onClick={() => navigate("/login")}
          className="px-10 py-4 rounded-xl font-semibold text-lg 
            bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg 
            hover:shadow-2xl transform hover:scale-105 transition"
        >
          Join Now 🚀
        </button>
      </section>
    </div>
  );
}
