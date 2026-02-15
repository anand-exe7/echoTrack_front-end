import React, { useState, useEffect, useRef } from 'react';

// Gemini API Configuration
const GEMINI_API_KEY = "AIzaSyD5JHSY25hGjgkrqAW3suPDzKE4MdECXns";

export default function AIInsightSection() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { role: 'assistant', text: "Hello Akshay! Your EchoTrack Mentor is online. How can I assist your development today?" }
  ]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const handleAskAI = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMessage = { role: 'user', text: query };
    setChatHistory(prev => [...prev, userMessage]);
    setQuery('');
    setLoading(true);

    try {
      const payload = {
        contents: [
          ...chatHistory.map(msg => ({
            role: msg.role === 'ai' ? 'model' : 'user',
            parts: [{ text: msg.text }]
          })),
          { role: "user", parts: [{ text: query }] }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      };

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `API Error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.candidates && data.candidates.length > 0) {
        const aiResponse = data.candidates[0].content?.parts?.[0]?.text || "Sorry, I couldn't generate a response. Please try again.";
        setChatHistory(prev => [...prev, { role: 'ai', text: aiResponse }]);
      } else if (data.error) {
        throw new Error(data.error.message || "API returned an error");
      } else {
        throw new Error("Unexpected API response format");
      }
    } catch (err) {
      console.error('Gemini API Error:', err.message);
      const errorMsg = err.message.includes('API') ? err.message : "Connection error. Please check your API key and internet connection.";
      setChatHistory(prev => [...prev, { role: 'ai', text: errorMsg }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl border border-[#90A955]/20 shadow-sm h-137.5 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-[#132A13] flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4F772D] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4F772D]"></span>
          </span>
          EchoTrack Mentor
        </h3>
      </div>

      <div className="grow space-y-4 mb-6 overflow-y-auto pr-2 custom-scrollbar">
        {chatHistory.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium ${
              msg.role === 'user' 
              ? 'bg-linear-to-r from-[#4F772D] to-[#90A955] text-white rounded-tr-none shadow-md' 
              : 'bg-[#90A955]/10 text-[#132A13] rounded-tl-none border border-[#90A955]/30'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start px-4">
            <div className="bg-[#90A955]/10 text-[#4F772D] p-2 rounded-2xl animate-pulse text-[10px] font-black uppercase">
              Analyzing Data...
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={handleAskAI} className="relative">
        <input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a question..."
          className="w-full bg-slate-50 border border-[#90A955]/30 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F772D]/40 transition-all pr-16"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="absolute right-2 top-2 bg-linear-to-r from-[#4F772D] to-[#90A955] text-white p-2.5 rounded-xl hover:from-[#31572C] hover:to-[#4F772D] transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-90" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
