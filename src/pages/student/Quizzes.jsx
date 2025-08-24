// src/pages/student/Quizzes.jsx
import { useState } from "react";

export default function Quizzes() {
  const sampleQuiz = [
    { question: "What is React?", options: ["Library", "Framework", "Language", "Tool"], answer: 0 },
    { question: "Who maintains React?", options: ["Google", "Facebook", "Microsoft", "Netflix"], answer: 1 },
  ];

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const submit = () => setSubmitted(true);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Quizzes</h1>
      {sampleQuiz.map((q, i)=>(
        <div key={i} className="mb-4 p-3 border rounded-lg">
          <p className="font-semibold">{i+1}. {q.question}</p>
          <div className="mt-2 space-y-2">
            {q.options.map((op, idx)=>(
              <label key={idx} className="flex items-center gap-2">
                <input type="radio" name={`q${i}`} checked={answers[i]===idx} onChange={()=>setAnswers({...answers, [i]: idx})}/>
                {op}
              </label>
            ))}
          </div>
          {submitted && answers[i]===q.answer && <p className="text-green-600 font-semibold">✔ Correct</p>}
          {submitted && answers[i]!==q.answer && <p className="text-red-600 font-semibold">✘ Incorrect</p>}
        </div>
      ))}
      {!submitted && <button onClick={submit} className="bg-indigo-600 text-white px-4 py-2 rounded">Submit Quiz</button>}
    </div>
  );
}
