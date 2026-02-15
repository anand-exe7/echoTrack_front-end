import React from 'react';
export default function SkillCard({ skill }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-[#90A955]/20 shadow-sm hover:border-[#90A955]/40 transition-all">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-[#132A13]">{skill.skill_name}</h4>
        <span className="text-xs font-bold text-[#4F772D] bg-[#90A955]/10 px-2 py-1 rounded-lg">{skill.xp} XP</span>
      </div>
      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
        <div className="bg-gradient-to-r from-[#4F772D] to-[#90A955] h-full transition-all duration-500" style={{ width: `${skill.progress}%` }}></div>
      </div>
    </div>
  );
}
