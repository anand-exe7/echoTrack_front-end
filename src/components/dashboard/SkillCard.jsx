import React from 'react';
export default function SkillCard({ skill }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-indigo-50 shadow-sm hover:border-indigo-200 transition-all">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-indigo-900">{skill.skill_name}</h4>
        <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg">{skill.xp} XP</span>
      </div>
      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
        <div className="bg-indigo-500 h-full transition-all duration-500" style={{ width: `${skill.progress}%` }}></div>
      </div>
    </div>
  );
}
