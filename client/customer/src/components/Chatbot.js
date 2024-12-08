import React, { useState } from "react";
import { HfInference } from "@huggingface/inference";
import { FaCopy } from "react-icons/fa";

const client = new HfInference("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");

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const getResponse = async (userInput) => {
    try {
      setIsTyping(true);
      const chatCompletion = await client.chatCompletion({
        model: "Qwen/Qwen2.5-Coder-32B-Instruct",
        messages: [{ role: "user", content: userInput }],
        max_tokens: 500,
      });

      const response = chatCompletion.choices[0].message.content;
      return response;
    } catch (error) {
      console.error("Error fetching response:", error);
      return "I'm sorry, I couldn't get a response at the moment.";
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { user: true, text: input, timestamp: new Date() };
      setMessages([...messages, userMessage]);
      setInput("");

      const botResponse = await getResponse(input);
      const botMessage = {
        user: false,
        text: botResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-black">
      {/* Chat Messages */}
      <div className="flex-grow p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-3 flex ${msg.user ? "justify-end" : "justify-start"}`}>
            <div className={`p-3 rounded-lg shadow ${msg.user ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"} max-w-xl`}>
              {msg.text}
              {!msg.user && (
                <button
                  onClick={() => handleCopy(msg.text)}
                  className="text-gray-500 ml-2 hover:text-gray-700"
                >
                  <FaCopy />
                </button>
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="p-3 rounded-lg shadow bg-gray-100 text-gray-800">
              Typing...
            </div>
          </div>
        )}
      </div>

      {/* Input Section */}
      <div className="p-4 border-t bg-gray-50 border-gray-200">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your question here..."
            className="flex-grow px-4 py-2 border rounded shadow focus:outline-none bg-white text-black border-gray-300 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white transition"
          >
            Send
          </button>
          <button
            onClick={handleClearChat}
            className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white transition"
          >
            Clear Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
