"use client";

import { useState } from "react";
import Link from "next/link";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 Welcome to Sri Vasavi Electricals. How can we help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: input },
      {
        sender: "bot",
        text: "Thanks for your message! Our electrician will contact you shortly.",
      },
    ]);
    setInput("");
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">
      
      {/* Header */}
      <header className="bg-yellow-500 p-4 text-gray-900 flex items-center gap-3">
        <Link href="/" className="font-medium">← Home</Link>
        <h1 className="text-xl font-bold">Chat With Us 💬</h1>
      </header>

      {/* Chat Area */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-xs text-sm ${
                  msg.sender === "user"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-800 shadow"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="bg-white p-4 border-t">
        <div className="max-w-3xl mx-auto flex gap-3">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            onClick={sendMessage}
            className="bg-yellow-500 px-5 py-2 rounded-xl font-medium hover:bg-yellow-600 transition"
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
