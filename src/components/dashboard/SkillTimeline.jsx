import React, { useState } from 'react';

export default function SkillTimeline({ skills }) {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredSkills = skills
    .filter(skill => skill.skill_name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => new Date(b.date_added) - new Date(a.date_added));

  return (
    <div className="bg-white p-8 rounded-3xl border border-[#90A955]/20 shadow-sm flex flex-col h-[550px]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h3 className="text-2xl font-bold text-[#132A13] flex items-center gap-2">
          📅 Learning Journey
        </h3>
        
        <div className="relative">
          <input 
            type="text"
            placeholder="Search journey..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 bg-[#90A955]/10 border border-[#90A955]/30 rounded-xl text-sm focus:outline-none w-full md:w-48 transition-all"
          />
          <svg className="w-4 h-4 absolute left-3 top-2.5 text-[#4F772D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="relative border-l-2 border-[#90A955]/30 ml-4 pl-4 overflow-y-auto flex-grow pr-4 custom-scrollbar">
        {filteredSkills.length > 0 ? (
          <div className="space-y-8 pb-4">
            {filteredSkills.map((skill, index) => (
              <div key={index} className="relative pl-4 animate-in fade-in slide-in-from-left-2">
                <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-gradient-to-r from-[#4F772D] to-[#90A955] border-4 border-white shadow-sm"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="font-bold text-[#132A13] text-lg">{skill.skill_name}</h4>
                    <p className="text-[10px] font-bold text-[#4F772D] uppercase tracking-widest">Growth Logged</p>
                  </div>
                  <span className="text-xs font-black text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
                    {new Date(skill.date_added).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-400 py-10 italic">No milestones found.</p>
        )}
      </div>
    </div>
  );
}
