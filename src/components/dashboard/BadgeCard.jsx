import React from 'react';

export default function BadgeCard({ badge, onClick }) {
  return (
    <button 
      onClick={() => onClick(badge)}
      className={`p-4 rounded-2xl border text-left transition-all hover:scale-105 active:scale-95 ${badge.earned ? 'bg-white border-indigo-200 shadow-sm' : 'bg-slate-50 border-slate-100 opacity-60'}`}
    >
      <div className="text-3xl mb-2">{badge.icon}</div>
      <h4 className="font-bold text-sm text-indigo-900 leading-tight">{badge.title}</h4>
      <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-tighter">
        {badge.earned ? 'Completed' : 'Locked'}
      </p>
    </button>
  );
}
