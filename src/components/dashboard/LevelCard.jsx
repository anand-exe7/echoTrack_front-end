import React from 'react';
export default function LevelCard({ xp }) {
  const level = Math.floor(xp / 100);
  const progress = xp % 100;
  return (
    <div className="bg-white p-6 rounded-3xl border border-[#90A955]/20 shadow-sm">
      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Growth Level</p>
      <h3 className="text-4xl font-black text-[#4F772D] mt-1">Lvl {level}</h3>
      <div className="w-full bg-[#90A955]/10 h-2.5 rounded-full mt-4 overflow-hidden">
        <div className="bg-gradient-to-r from-[#4F772D] to-[#90A955] h-full transition-all duration-700" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-[10px] text-[#4F772D] mt-2 font-bold uppercase">{100 - progress} XP to Level {level + 1}</p>
    </div>
  );
}
