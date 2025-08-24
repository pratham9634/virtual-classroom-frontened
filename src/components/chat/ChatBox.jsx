// src/components/chat/ChatBox.jsx
import { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Teacher", text: "Hello class! 👋" },
    { id: 2, sender: "Student", text: "Good morning sir!" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages([
      ...messages,
      { id: Date.now(), sender: "Me", text: newMessage },
    ]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-full border rounded-xl bg-white dark:bg-gray-800">
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "Me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs shadow text-sm ${
                msg.sender === "Me"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 dark:text-white"
              }`}
            >
              <p className="font-semibold text-xs opacity-70">
                {msg.sender}
              </p>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="border-t p-3 flex items-center gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-lg border dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
