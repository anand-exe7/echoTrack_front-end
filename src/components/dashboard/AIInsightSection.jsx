import React, { useState, useEffect, useRef } from 'react';
import OpenAI from 'openai';

// Pure Frontend Logic with EchoTrack Branding
const client = new OpenAI({
  apiKey: "dca5f96d-6730-4565-b14b-72a4a28be588",
  baseURL: "https://api.sambanova.ai/v1",
  dangerouslyAllowBrowser: true 
});

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
      const response = await client.chat.completions.create({
        model: "ALLaM-7B-Instruct-preview",
        messages: [
          { 
            role: "system", 
            content: "You are the EchoTrack Mentor for Akshay P (RA2511026020039). You are a built-in feature of the EchoTrack dashboard. Be technical, encouraging, and never mention your source or model names." 
          },
          ...chatHistory.map(msg => ({ 
            role: msg.role === 'ai' ? 'assistant' : msg.role, 
            content: msg.text 
          })),
          { role: "user", content: query }
        ],
      });

      const aiResponse = response.choices[0].message.content;
      setChatHistory(prev => [...prev, { role: 'ai', text: aiResponse }]);
    } catch (err) {
      setChatHistory(prev => [...prev, { role: 'ai', text: "Mentor is currently offline. Please check your connection." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl border border-indigo-100 shadow-sm h-[550px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-indigo-900 flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-600"></span>
          </span>
          EchoTrack Mentor
        </h3>
      </div>

      <div className="flex-grow space-y-4 mb-6 overflow-y-auto pr-2 custom-scrollbar">
        {chatHistory.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium ${
              msg.role === 'user' 
              ? 'bg-indigo-600 text-white rounded-tr-none shadow-md' 
              : 'bg-indigo-50 text-indigo-800 rounded-tl-none border border-indigo-100'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start px-4">
            <div className="bg-indigo-50 text-indigo-400 p-2 rounded-2xl animate-pulse text-[10px] font-black uppercase">
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
          className="w-full bg-slate-50 border border-indigo-100 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all pr-16"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="absolute right-2 top-2 bg-indigo-600 text-white p-2.5 rounded-xl hover:bg-indigo-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-90" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
