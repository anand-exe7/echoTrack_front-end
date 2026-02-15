import React from 'react';
export default function LevelCard({ xp }) {
  const level = Math.floor(xp / 100);
  const progress = xp % 100;
  return (
    <div className="bg-white p-6 rounded-3xl border border-indigo-100 shadow-sm">
      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Growth Level</p>
      <h3 className="text-4xl font-black text-indigo-600 mt-1">Lvl {level}</h3>
      <div className="w-full bg-indigo-50 h-2.5 rounded-full mt-4 overflow-hidden">
        <div className="bg-indigo-500 h-full transition-all duration-700" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-[10px] text-indigo-400 mt-2 font-bold uppercase">{100 - progress} XP to Level {level + 1}</p>
    </div>
  );
}
