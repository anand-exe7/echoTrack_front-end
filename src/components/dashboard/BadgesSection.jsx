import React, { useState } from 'react';
import BadgeCard from './BadgeCard';

export default function BadgesSection({ badges }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState(null);

  const visibleBadges = isExpanded ? badges : badges.slice(0, 4);

  return (
    <div className="bg-white p-8 rounded-3xl border border-indigo-100 shadow-sm relative">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-bold text-indigo-900 flex items-center gap-2">
          🏅 Achievements
        </h3>
        {/* Toggle Button using Three Lines (Hamburger Icon) */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 hover:bg-indigo-50 rounded-xl transition-colors text-indigo-600"
          title={isExpanded ? "Collapse" : "Expand All"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {visibleBadges.map((b, i) => (
          <BadgeCard key={i} badge={b} onClick={setSelectedBadge} />
        ))}
      </div>

      {selectedBadge && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-indigo-900/20 backdrop-blur-md">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center">
            <div className="text-6xl mb-4">{selectedBadge.icon}</div>
            <h3 className="text-2xl font-black text-indigo-900">{selectedBadge.title}</h3>
            <div className="mt-4 p-4 bg-indigo-50 rounded-2xl">
              <p className="text-sm text-indigo-700 font-medium">
                {selectedBadge.earned 
                  ? `Awarded on ${selectedBadge.date}` 
                  : `Unlock: ${selectedBadge.requirement}`}
              </p>
            </div>
            <button onClick={() => setSelectedBadge(null)} className="mt-6 w-full py-3 bg-indigo-600 text-white rounded-xl font-bold">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
