import React from 'react';
export default function Footer() {
  return (
    <footer className="w-full py-12 px-[8%] bg-white border-t border-indigo-100">
      <div className="max-w-[1100px] mx-auto flex flex-wrap justify-between items-end gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-black text-indigo-600 tracking-tight uppercase">EchoTrack</span>
          <p className="text-sm text-slate-500 font-medium">Built for growth — not noise.</p>
        </div>
        <div className="flex gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <span>© 2026 EchoTrack</span>
          <span className="hover:text-indigo-600 cursor-pointer transition-colors">Privacy</span>
          <span className="hover:text-indigo-600 cursor-pointer transition-colors">Terms</span>
        </div>
      </div>
    </footer>
  );
}
